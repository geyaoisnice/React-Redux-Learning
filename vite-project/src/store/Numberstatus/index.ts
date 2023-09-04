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
