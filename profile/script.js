// Write your script here
const profilefirstname=document.getElementById("profile-firstname")
console.log(profilefirstname)
const profilelasttname=document.getElementById("profile-lastname")
const savebutton=document.getElementById("save-info")
const oldpass=document.getElementById("old-password")
const newpass=document.getElementById("new-password")
const confirmnewpass=document.getElementById("new-confirm-password")

const changepassbtn=document.getElementById("change-password")
if(localStorage.getItem("loginUser")){
    const user=JSON.parse(localStorage.getItem("loginUser"))
    console.log("hii")
    profilefirstname.value=user.userFirstName
    profilelasttname.value=user.userLastName
  
}
savebutton.addEventListener("click",()=>{
    let user1={
        firstname:profilefirstname.value,
        lastname:profilelasttname.value
    }
let curruser=[]
  curruser.push(user1)
  localStorage.setItem("user1",JSON.stringify(curruser))
    
  window.location.href="../shop/index.html"
})
changepassbtn.addEventListener("click",editPass)

function editPass(){
   if(oldpass.value!=(JSON.parse(localStorage.getItem("loginUser"))).Password){
      document.getElementById("err").innerHTML="password not match"
      document.getElementById("err").style.color="red"
   }
   if(newpass.value!=confirmnewpass.value){
    document.getElementById("matcherr").innerHTML="password not match to new pass"
    document.getElementById("matcherr").style.color="red"
   }else{
    (JSON.parse(localStorage.getItem("loginUser"))).Password=newpass.value
   }

}
document.getElementById("logout").addEventListener("click",()=>{
   localStorage.removeItem("users")
})