var signForm = document.getElementById("SignUpForm");
var userNameInput = document.getElementById("name"); 
var userEmailInput = document.getElementById("email"); 
var userpasswordInput = document.getElementById("password"); 
var nameAlert = document.getElementById("NameAlert");
var mailAlert = document.getElementById("emailAlert");
var passAlert = document.getElementById("PasswordAlert");
var ExistAlertElement =document.getElementById("ExistAlert")
var allUsers = [];

if (localStorage.getItem('allUsers')!=null) {
    allUsers=JSON.parse(localStorage.getItem('allUsers'))
}

signForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if(checkAllInputs()){
        addUser();
    }
});

function addUser() {
    var newUser = {
        name: userNameInput.value,
        email: userEmailInput.value,
        password: userpasswordInput.value
    }
    if (UserHere(newUser)) {
        ExistAlertElement.classList.replace('d-none','d-flex')
    }else{
    ExistAlertElement.classList.replace('d-flex' ,'d-none')
    window.location.href="SignIn.html"   
    allUsers.push(newUser);
    localStorage.setItem('allUsers', JSON.stringify(allUsers));
    }
}

function UserHere(newUser) {
    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email.toLowerCase() === newUser.email.toLowerCase()) {
            return true;
        }
    }
   
}

function validInput(rejex, element, elementalert) {
    var pattern = rejex;
    if (pattern.test(element.value)) {
        elementalert.classList.add('d-none');
        return true;
    } else {
        elementalert.classList.replace('d-block', 'd-none');
        elementalert.classList.replace('d-none', 'd-flex'); 
        return false;
    }
}

function checkAllInputs() {
    if (validInput(/^[a-zA-Z0-9$_]{2,}$/, userNameInput, nameAlert) &&
        validInput(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, userEmailInput, mailAlert) &&
        validInput(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, userpasswordInput, passAlert)) {
        return true;
    } else {
        return false;
    }
}
