const input_box=document.getElementById("inp-box");
const list_cont=document.getElementById("list-cont");

function add_task()
{
    if(input_box==='')
    {
        alert("Oh can't save,task field is empty!");
    }
    else {
        let li=document.createElement("li");
        li.innerHTML=input_box.value;
        list_cont.appendChild(li);
        let span=document.createElement("span") ;
        // add code
        span.innerHTML="\u00d7";
        // to dispaly span
        li.appendChild(span); 
    }
    input_box.value=" ";
    saveData();
}
list_cont.addEventListener("click",function(e)
{
    if(e.target.tagName=="LI")
    {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);
function saveData()
{
    localStorage.setItem("data",list_cont.innerHTML);
}
function showtask()
{
    list_cont.innerHTML=localStorage.getItem("data");
}
showtask();