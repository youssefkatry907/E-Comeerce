let clientData = io("http://localhost:8888")

let addBlogBtn = document.getElementById("addBlog");
addBlogBtn.addEventListener("click",()=>{

    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;

    clientData.emit("addBlog",{title,desc})
    // clientData.emit("test","hello from test")
})
clientData.on("reply",(data)=>{
    console.log(data);
})
// clientData.on("fromServer",(data)=>{
//     console.log(data);
// });