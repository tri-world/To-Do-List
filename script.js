const input = document.getElementById("input");
const btn = document.getElementById("btn");


btn.addEventListener("click",function(){

    let body =document.body;
    let newElement= document.createElement("li");
    if(input.value==""){
        return;
    }
    newElement.textContent=input.value;
    input.value="";
    let DeleteBtn =document.createElement("button");
    DeleteBtn.textContent="DELETE";
    
    let CompleteTaskBtn =document.createElement("button");
    CompleteTaskBtn.textContent="IS COMPLETED?";
    let timerBox = document.createElement("p");
    let myDate = new Date();
    timerBox.innerHTML=myDate;
    body.appendChild(newElement);
    body.appendChild(DeleteBtn);
    body.appendChild(CompleteTaskBtn);
    body.appendChild(timerBox);
    DeleteBtn.addEventListener("click",function(){
       try{
        body.removeChild(newElement);
        body.removeChild(timerBox);
        body.removeChild(DeleteBtn);
        body.removeChild(CompleteTaskBtn);
       }
       catch(e){
           console.log(e);
       } 
       finally{
        body.removeChild(newBreakElement);
        body.removeChild(newDeleteTag);
        body.removeChild(DeleteBtn);
        body.removeChild(CompleteTaskBtn);
        body.removeChild(timerBox);
       }

       
    })

    CompleteTaskBtn.addEventListener("click",function(){
       
        newDeleteTag = document.createElement("del");
        newBreakElement = document.createElement("br");
        newDeleteTag.innerHTML = newElement.innerText;
        console.log(newElement.innerText);
        body.removeChild(newElement);
        body.removeChild(timerBox);
        body.removeChild(DeleteBtn);
        body.removeChild(CompleteTaskBtn);
        body.appendChild(newBreakElement);
        body.appendChild(newDeleteTag);
        body.appendChild(DeleteBtn);
        body.appendChild(CompleteTaskBtn);
        body.appendChild(timerBox);

        DeleteBtn.addEventListener("click",function(){
            try{
             body.removeChild(newElement);
             body.removeChild(timerBox);
             body.removeChild(DeleteBtn);
             body.removeChild(CompleteTaskBtn);
            }
            catch(e){
                console.log(e);
            } 
            finally{
             body.removeChild(newBreakElement);
             body.removeChild(newDeleteTag);
             body.removeChild(DeleteBtn);
             body.removeChild(CompleteTaskBtn);
             body.removeChild(timerBox);
            }
     
            
         })
       

        
    })

})

