function changeQuantity(button, amount){
    const input = button.parentElement.querySelector('.qty');
    const quantity = parseInt(input.value, 10) || 1;
    
}

function login(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let error=document.getElementById("error");
    if(email==="rohit@gmail.com" && password==="rohit@17"){
        //save login state in localstorage
        localStorage.setItem("isLoggedin","true");
        localStorage.setItem("user",email);

        alert("You have logged in");
        window.location.href="index.html";
    }else{
        error.innerText="Inavalid email or password";

    }
}

function togglePassword(){
    let eye=document.getElementById("eye");
    let password=document.getElementById("password");
    if(password.type==="password"){
        password.type="text";

        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");

    }
    else{
        password.type="password";
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
    }
}
function toggleMenu(){
    let menu=document.getElementById("nav-links");
    let icon=document.getElementById("menuIcon");

    menu.classList.toggle("show");
    if(menu.classList.contains("show")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }else{
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
        
    }

}
