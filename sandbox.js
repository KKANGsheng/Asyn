const getTodos=(resource,callback)=>{
    const request=new XMLHttpRequest();

    // when we want to get it is mostly used get method.
    
    // 100 200 300 400 500 
    
    request.addEventListener("readystatechange",()=>{
        if(request.readyState===4 &&request.status===200){
            // convert json string into javascript object
            // it is more easier to use
            const data=JSON.parse(request.responseText);
            callback(undefined,request.responseText);
        }else if(request.readyState===4){
            callback("could not fetch data",undefined);
        }
    });
    
    // get data used get 
    // setup request
    request.open('GET',resource);
    request.send();

// track process
}

console.log(1);
console.log(2);

// error first and data
getTodos("todos/todo.json",(err,data)=>{
    console.log("callback fired");
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

// promise have two outcomes either reject or resolve


