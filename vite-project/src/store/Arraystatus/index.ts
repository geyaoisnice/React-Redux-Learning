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