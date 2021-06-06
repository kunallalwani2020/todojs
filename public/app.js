var list = document.getElementById('list')

firebase.database().ref('todo').on("child_added",function(data){
    var li = document.createElement("li")
li.setAttribute("class", "li")
var listtext = document.createTextNode(data.val().value)

li.appendChild(listtext)


//create dlt btn
var dltbtn = document.createElement('button')
var textbtn = document.createTextNode("DELETE")
dltbtn.setAttribute("class", "btn" ,)
dltbtn.setAttribute("id",data.val().key)
dltbtn.setAttribute("onclick","dltitem(this)")
dltbtn.appendChild(textbtn)
li.appendChild(dltbtn)
list.appendChild(li)
//edit button
var editbtn=document.createElement("button")
var edittext= document.createTextNode("EDIT")
editbtn.setAttribute("id",data.val().key)
editbtn.appendChild(edittext)
editbtn.setAttribute("class","edit")
editbtn.setAttribute("onclick","editbtn(this)")
li.appendChild(editbtn)

}
)
 
function addtodo(){
    var todo = document.getElementById("todo");
    var key = firebase.database().ref('todo').push().key; 
 var todoItem = {
value : todo.value,
key : key,
 }
 firebase.database().ref('todo').child(key).set(todoItem)


  


todo.value =""

//console.log(list)
}
function dltitem(e){
firebase.database().ref('todo').child(e.id).remove()
 e.parentNode.remove()

}
function editbtn(e){
var a= prompt("Enter ADd TODO",e.parentNode.firstChild.nodeValue)
var todoedit={
    value :a,
    key:e.id
}
firebase.database().ref('todo').child(e.id).set(todoedit)
e.parentNode.firstChild.nodeValue=a
    // var val= e.parentNode.childNode.value
// prompt("enter the new todo",e.parentNode.childNode.Nodevalue)
}
function dlt(){
    
    list.innerHTML=""
}


// var key= firebase.database().ref('todo').push().key;

// function addtodo(){
//     var todo= document.getElementById('todo');

 
