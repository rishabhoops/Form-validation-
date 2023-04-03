var user=document.getElementById('username')
var password=document.getElementById("password")
var flag=1
function validateForm(){
    if(user.value==""){
        document.getElementById("userError").innerHTML="User Name is Empty"
        flag=0
    }else if(user.value.length<3){
        document.getElementById("userError").innerHTML="User Name required minimum 3 character" 
        flag=0 
    }else{
        document.getElementById("userError").innerHTML=""
        flag=1
    }

    if(password.value==""){
        document.getElementById("passError").innerHTML="Password Is Empty"
        flag=0
    }
    else{
        document.getElementById("passError").innerHTML="" 
        flag=1  
    }
    
    if(flag){
        return true
    }else{
        return false
    }
}