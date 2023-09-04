# 前言

> 大家好 我是歌谣 今天带大家来学习react-redux的知识

# 技术栈

> react+ant design

# 依赖

```
"dependencies": {
    "@ant-design/icons": "^5.2.5",
    "antd": "4.23.4",
    "less": "2.7.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^7.2.8",
    "react-router-dom": "^6.3.8",
    "redux": "^4.1.2",
    "redux-thunk": "^2.4.2",
    "reset-css": "^5.0.2",
    "sass": "^1.66.1",
    "vite-plugin-style-import": "^2.0.0"
  },
```

# 文件目录
![在这里插入图片描述](https://img-blog.csdnimg.cn/c9038f5def344c289b4977900595cb26.png)
# router+app.tsx
## router

```
import React, { lazy } from "react"
import { Navigate } from "react-router-dom"

const Fang = lazy(() => import("../views/fang"))
const Home = lazy(() => import("../views/home"))
const Geyao = lazy(() => import("../views/Geyao"))
import Login from "@/views/Login"
const withLoadingComponent = (comp: JSX.Element) => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            {comp}
        </React.Suspense>
    )

}
const routes = [{
    path: "/",
    element: <Navigate to="/geyao" />
},
{
    path: "/login",
    element: <Login />
},
{
    path: "*",
    element: <Navigate to="/geyao" />
},
{
    path: "/",
    element: <Home />,
    children: [{
        path: "/geyao",
        element: withLoadingComponent(<Geyao />),
    }, {
        path: "/fang",
        element: withLoadingComponent(<Fang />),
    }]
}]

export default routes
```
## App.tsx

```
import "reset-css"
import "./assets/global.scss"
import 'antd/dist/antd.css'
import {useRoutes,Link} from "react-router-dom"
import router from "./router";

function App() {
  const outlet=useRoutes(router)
  return (
    <>
     {outlet}
    </>
  )
}

export default App

```

> 涉及的知识点包含懒加载 和 路由跳转相关知识

# 组件创建测试
## geyao.tsx

```
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NumberStatus from "@/store/Numberstatus"

export const Geyao = () => {
  const { number } = useSelector((state:RootState) => ({
    number: state.handleNum.number
  }))
  const dispatch = useDispatch()
  const handleChange = () => {

      dispatch(NumberStatus.aysncActions.asyncAdd1)
 
  }
  
  const handleArr = () => {
    dispatch( {type: "geyaopush",value:100})
  }
  const { geyao } = useSelector((state:RootState) => ({
    geyao: state.handleArray.geyao
  }))
  return (
    <div>
      fanghome
      <p>{number}</p>
      <button onClick={handleChange}>按钮</button>
      <p>{geyao}</p>
      <button onClick={handleArr}>按钮</button>
    </div>
  )
  }

export default Geyao

```
## 测试组件
## fang.tsx
```
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import store from '@/store'

export const Fang = () => {
  const { number } = useSelector((state:RootState) => ({
    number: state.number
  }))
  const dispatch = useDispatch()
  const handleChange = () => {
    dispatch( {type: "add1"})
  }
  return (
    <div>
      fanghome
      <p>{number}</p>
      <button onClick={handleChange}>按钮</button>
    </div>
  )
}

export default Fang

```

# 主reducer文件
## index.ts

```
import { legacy_createStore,combineReducers,compose,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk"
import handleNum from "./Numberstatus/reduce.ts";
import handleArray from "./Arraystatus/reduce.ts";
const reducers=combineReducers({
    handleNum,
    handleArray
})

// const store= legacy_createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())

let composeEnhances=window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE?window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE({}):compose
const store=legacy_createStore(reducers,composeEnhances(applyMiddleware(reduxThunk)))
export default store
```

# 普通number
## index.ts

```
const store = {
    state: {
        number: 20
    },
    actions: {
        add1(newState: { number: number }, action: { type: string }) {
            setTimeout(()=>{
                newState.number++
            },1000)
        },
        add2(newState: { number: number }, action: { type: string, value: number }) {
            newState.number += action.value
        }

    },
    aysncActions:{
        asyncAdd1(dis:Function){
            setTimeout(()=>{
                dis({type:"add1"})
            },1000)
        }
    },
    // add1:"add1",
    // add2:"add2"
    actionNames: {
     
    }
   
}
let actionNames={
        
}
for(let key in store.actions){
    actionNames[key]=key
}
store.actionNames=actionNames
export default store

```

## reduce.ts

```
import HandNumber from "./index"


let reducer=(state={
    ...HandNumber.state,
  
},action:{type:string,value:number})=>{
    console.log("dispatch执行")

    let newState=JSON.parse(JSON.stringify(state))
    console.log(newState,"newState")
    console.log(action,"action")
    // switch(action.type){
    //     case HandNumber.add1:
    //         HandNumber.actions[HandNumber.add1](newState,action)
    //         break;
    //     case HandNumber.add2:
    //         HandNumber.actions[HandNumber.add2](newState,action)
    //         break
    //     default:
    //         break;
    // }
    for(let key in HandNumber.actionNames){
        if(action.type===HandNumber.actionNames[key]){
            HandNumber.actions[HandNumber.actionNames[key]](newState,action)
            break
        }
    }

    return newState
}
export default reducer
```

# 数组number
## index.ts

```
const store= {
    state:{
        geyao:[10,20,30]
    },
    actions:{
        geyaopush(newState:{geyao:number[]},action:{type:string,value:number}){
            newState.geyao.push(action.value)
        }
    },
    actionNames:{}
}
let actionNames={
        
}
for(let key in store.actions){
    actionNames[key]=key
}
store.actionNames=actionNames

export default store
```

## reduce.ts

```
import HandleArr from "./index"


let reducer=(state={
    ...HandleArr.state,
  
},action:{type:string,value:number})=>{
    console.log("dispatch执行")

    let newState=JSON.parse(JSON.stringify(state))
    console.log(newState,"newState")
    console.log(action,"action")

    for(let key in HandleArr.actionNames){
        if(action.type===HandleArr.actionNames[key]){
            HandleArr.actions[HandleArr.actionNames[key]](newState,action)
            break
        }
    }

    return newState
}
export default reducer
```
# 运行结果
![在这里插入图片描述](https://img-blog.csdnimg.cn/8631e1f463ab4a5196efc4f83b645b95.png)

# 备注

> redux-thunk 解决异步问题 最终依赖安装 

# github地址

```
https://github.com/geyaoisnice/React-manage-demo
```
