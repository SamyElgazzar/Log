var logForm =document.getElementById("loginForm")
var allUsers =[];
var mailElament = document.getElementById("email")
var passwordElament = document.getElementById("password")
var alElemant=document.getElementById("alert")

if (localStorage.getItem('allUsers') !=null) {
    allUsers =JSON.parse(localStorage.getItem('allUsers'))
}

console.log(allUsers);

logForm.addEventListener('submit', function(e) {
    e.preventDefault();
    login();
})


function login() {
    var userData ={
        email:mailElament.value,
        password:passwordElament.value
    }
if (loginValid(userData) == true) {
    window.location.href="welcome.html"
}else{
    alElemant.classList.replace('d-none','d-flex')
}
}

function loginValid(userData) {
    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email.toLowerCase()==userData.email.toLowerCase() && allUsers[i].password ==userData.password ) {
            alElemant.classList.replace('d-flex','d-none')
            return true
        }
        
    }
}
