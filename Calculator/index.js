let store=""

let calculate=(value)=>{
    store=store+value;

    let show=document.querySelector("#display").innerHTML=store;

    
    
}

let res=()=>{

    let show=document.querySelector("#display").innerHTML=eval(store);
    store=eval(store);
    store.toString();
}

let ac=()=>{
    
    store=""
    let show=document.querySelector("#display").innerHTML=store;
    
}

let del=()=>{
    store=store.slice(0,-1)
    let show=document.querySelector("#display").innerHTML=store;

}

let sq=()=>{
    store=store*store
    let show=document.querySelector("#display").innerHTML=store;

}