if(localStorage.getItem("contacts") == null)
    localStorage.setItem("contacts",JSON.stringify([]));
var tempIndex=-1;


veiwData();

function addContacts(){
 contact=getContact();
    var contacts=getDataFromLocalStorage();
    contacts.push(contact);
    
    updateDataToLocalStorage(contacts);
    
    clearForm();
    
    veiwData();
}
function veiwData(){
   var contacts=getDataFromLocalStorage(); 

   var data="";
    if(contacts.length==0)
        {
            data="contacts not yet added..."
        }else{
            
        
    data+="<table id='contacts'>"
            

   for(var i=0;i<contacts.length;i++){
    data +="<tr>";
    data +="<td>"+contacts[i].name+"</td>";
    data +="<td>"+contacts[i].email+"</td>";
    data +="<td>"+contacts[i].mobile+"</td>";
    data+="<td><button onclick=deleteContact("+i+")>deleteContact</button>";
    data+="<td><button onclick=editContact("+i+")>editContact</button>";
    data +="</tr>";
}
    data+="</table>";
        }
    document.getElementById("content").innerHTML=data;
}
function deleteContact(index){
    var contacts=getDataFromLocalStorage();
    contacts.splice(index,1);
    updateDataToLocalStorage(contacts);
    veiwData();
    
}
function editContact(index){
    var contacts=getDataFromLocalStorage();
    contact=contacts[index];
    tempIndex=index;
    document.getElementById("cname").value=contact.name;
        document.getElementById("email").value=contact.email;
        document.getElementById("mobile").value=contact.mobile;


    document.getElementById("add").style.display="none";
    document.getElementById("update").style.display="block";
    
    
}
function updateContacts(){
    var contacts=getDataFromLocalStorage();
    contact=getContact();
  
     contacts.splice(tempIndex,1,contact);
    updateDataToLocalStorage(contacts);
    clearForm();
    
    document.getElementById("add").style.display="block";
    document.getElementById("update").style.display="none";
    veiwData();
    
    
}
function clearForm(){
    document.getElementById("cname").value="";
    document.getElementById("email").value="";
   document.getElementById("mobile").value="";
    
}
function getContact(){
    var name=document.getElementById("cname").value;
    var email=document.getElementById("email").value;
    var mobile=document.getElementById("mobile").value;
    contact={
        "name":name,
        "email":email,
        "mobile":mobile
    };
    return contact
}
function getDataFromLocalStorage(){
    contacts=JSON.parse(localStorage.getItem("contacts"));
    return contacts;
}
function updateDataToLocalStorage(updatedData){
    localStorage.setItem("contacts",JSON.stringify(updatedData));
}




