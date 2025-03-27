function clear() {
    document.getElementById("markeddown").value="";
    document.getElementById('content').innerHTML="";
    
}

document.getElementById("clear").addEventListener("click",()=>{
    clear();

})
