const loginemail=document.getElementById("login-email")
const loginpass=document.getElementById("login-password")
const errmsg=document.getElementById("errmsg")
const loginButton=document.getElementById("login")
loginButton.addEventListener("click",(e)=>{
    console.log("button click")
    e.preventDefault()
    // if((loginemail.value=="")||(loginpass.value=="")){
    //      errmsg.innerHTML="fill the input"
    //      errmsg.style.color="red"
    //   }
      //check the user is prent in local storage
    if (localStorage.getItem("users")) {
        
        const users= JSON.parse(localStorage.getItem("users"));
        for(let i=0;i<users.length;i++){
            if(users[i].email==loginemail.value&&users[i].password==loginpass.value){
                let currentitem={
                    userFirstName:users[i].firstname,
                    userLastName:users[i].lastname,
                    Email:loginemail.value,
                    Password:loginpass.value

                }
                console.log(currentitem)
                localStorage.setItem("loginUser",JSON.stringify(currentitem))
                errmsg.innerHTML="succesfully login"
                errmsg.style.color="green"
             window.location.href='../profile/index.html'
            }else{
                if(users[i].email!=loginemail.value||users[i].passworderr!=loginpass.value){
                  errmsg.innerHTML="Detail doesnt match"
                  errmsg.style.color="red"
                }
            }
        }
      }else{
        errmsg.innerHTML="User not present"
        errmsg.style.color="red"
        setTimeout(() => {
            window.location.href="../signup/index.html"
        },1000);
                
      }
})
