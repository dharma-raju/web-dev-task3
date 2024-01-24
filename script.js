const itemsArray=localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")):
[]
console.log(itemsArray)
document.querySelector("#enter").addEventListener("click", () => {
    const item=document.querySelector("#item")
    createItem(item)
})
function displayitems(){
    let items=""
    for(let i=0;i<itemsArray.length;i++){
    items +=`<div class="item">
     <div class="input-controler">
        <textarea disabled>${itemsArray[i]}</textarea>
        <div class="edit-controler">
        <i class="fa-solid fa-check deletebtn"></i>
        <i class="fa-solid fa-pen-to-square editbtn"></i>
        </div>
    </div>
    <div class="update-controler">
    <button class="savebtn">Save</button>
    <button class="cancelbtn">Cancel</button>
    </div>
    </div>`
}
document.querySelector(".to-do-list").innerHTML=items
activateDeleteListeners()
activateEditListeners()
activateSaveListeners()
activateCancelListeners()
}

function activateDeleteListeners(){
    let deletebtn=document.querySelectorAll(".deletebtn")
    deletebtn.forEach((db,i) =>  {
        db.addEventListener("click",()=>{ deleteItem(i)})
    } )
}

function activateEditListeners(){
    const editbtn=document.querySelectorAll(".editbtn")
    const updateController=document.querySelectorAll(".update-controller")
    const inputs=document.querySelectorAll(".input-controller textarea")
    editbtn.forEach((eb,i) =>{
        eb.addEventListener("click",() =>{
            updateController[i].style.display ="block"
            inputs[i].disabled=false
         })
    })
}
function activateSaveListeners(){
    const savebtn=document.querySelectorAll(".savebtn")
    const inputs=document.querySelectorAll(".input-controller textarea")
    savebtn.forEach((sb,i) => { 
     sb.addEventListener("click", () =>{
    updateItem(inputs[i].value ,i)

    })
    })
}
function activateCancelListeners(){
    const cancelbtn=document.querySelectorAll(".cancelbtn")
    const updateController=document.querySelectorAll(".update-controller")
    const inputs=document.querySelectorAll(".input-controller textarea")
    cancelbtn.forEach((cb,i) => {
        cb.addEventListener("click",() => {
            updateController[i].style.display="none"
            inputs[i].disabled=true
        })
    })
}

function updateItem(text, i){
    itemsArray[i]=text
    localStorage.setItem("items",JSON.stringify(itemsArray))
    location.reload()
}




function deleteItem(i){
    itemsArray.splice(i,1)
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}


function createItem(item){
    itemsArray.push(item.value)
    localStorage.setItem("items",JSON.stringify(itemsArray))
    location.reload()
}
function displayDate(){
    let date=new Date()
    date=date.toString().split("")
    document.querySelector("#date").innerHTML=date[1]+""+date[2]+""+date[3]
}
window.onload=function(){
    displayDate()
    displayitems()
}