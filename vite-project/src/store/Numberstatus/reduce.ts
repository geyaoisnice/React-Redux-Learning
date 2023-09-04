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