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