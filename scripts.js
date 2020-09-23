function validation(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;
    
    error_message.style.padding = "10px";
/*using conditional formula for errors*/
    if(name.length < 5){
        text ="Please enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if(subject.length < 5){
        text ="Please enter Correct Subject";
        error_message.innerHTML = text;
        return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
        text ="Please enter Valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if(message.length <= 10){
        text ="Please enter More Than 10 Characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Thanks! Message Submitted Successfully!")
    return true;  
}