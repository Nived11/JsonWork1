function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json()).then((data)=>{
    console.log(data);
    str=``
    data.map((dt)=>{
        str+=`<tr>
        <td>${dt.userId}</td>
        <td>${dt.id}</td>
        <td>${dt.title}</td>
        <td>${dt.body}</td>
        </tr>`
       
    })
    document.getElementById("posts").innerHTML=str
    })
}

fetchData()