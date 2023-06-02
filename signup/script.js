const firstname=document.getElementById("signup-firstname")
const lastname=document.getElementById("signup-lastname")
const email=document.getElementById("signup-email")
const password=document.getElementById("signup-password")
const confirmpass=document.getElementById("signup-confirm-password")
const signupButton=document.getElementById("signup-button")
const massage=document.getElementById("massage")
signupButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (
      firstname.value === "" ||lastname.value===""||
      email.value === "" ||
      password.value === "" ||
      confirmpass.value === ""
    ) {
        massage.style.color="red"
      massage.innerHTML = `All fields are mandatory`;
      return;
    }
    if(password.value !== confirmpass.value){
        massage.style.color="red"
      massage.innerHTML = `Password doesn't match`;
      confirmpass.focus();
      return;
    }
    massage.innerHTML=``;
    //crating current user
    let curruser={

        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        password:password.value,
        confirmpassword:confirmpass,
        token: generateToken(),
       }
       console.log(curruser)
       //array of users
    const users=[]
    //if someone signup
    users.push(curruser)
   //storng array of user in local storage
    localStorage.setItem('users',JSON.stringify(users));
    massage.innerHTML=`Successfully signed up`;
    massage.style.color="green"
    window.location.href="../login/index.html"
  });
  function generateToken(){
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz0123456789';
    let res = '';
    let length = characters.length;
    for(let i = 1; i<=16; i++){
        res += characters.charAt(Math.floor(Math.random()*length));
    }
    return res;
}