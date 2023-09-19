const ca_subscribe = document.getElementById('ca-subscribe');
const error_text = document.getElementById('errorText');
const input_email = document.getElementById('email')
const root_theme = document.querySelector(':root');
var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function redirectPage(url) {
  location.href = url;
}

function isEmpty(value){
    if(value == "" || value == null){
        console.log('aqui 1');
        return false;
    }else if(!emailRegex.test(value)){
        console.log('aqui 2');
       return false
    }else{
        return true;
    }
}

function displayEmailError(error){
    error == true? root_theme.style.setProperty('--inputFocus', '#ff6257') : root_theme.style.setProperty('--inputFocus', '#242742'); 
    error == true? error_text.classList.remove('display-none') : error_text.classList.add('display-none'); 
    error == true? input_email.classList.add('input-error') : input_email.classList.remove('input_error');
    document.getElementById("email").value = "";
}
ca_subscribe.addEventListener("click", (e) => {
  var email_subscribed = document.getElementById("email").value;
  if(!isEmpty(email_subscribed)){
    displayEmailError(true);
    return false;
  }else{
    displayEmailError(false);
  }
  localStorage.setItem("email", email_subscribed);
  redirectPage("./subcribed-mobile.html");
});
