
function validate(){

    let fullname = document.getElementById("fullname").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let error_message = document.getElementById("error_message")

    error_message.style.padding ='10px'
    
    
    if (fullname.length < 4) {
        text = 'Please enter a valid Name'
        error_message.innerHTML = text;
        return false;
    }
    if (isNaN(phone) || phone.length != 11) {
        text = 'Please enter a valid Phone number'
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf('@') == -1 || email.length < 6) {
        text = 'Please enter a valid Email'
        error_message.innerHTML = text;
        return false;
    }
    if (password.length < 6 || password.search(/[0-9]/) < 0) {
        text = 'Your password must have a digit and be above 6 letters'
        error_message.innerHTML = text;
        return false;
    }
    alert('Form Submitted Successfully');
    return true;
}