exist_usernames = ["Harry","Elizabeth","Shana"];

function validateForm(){
  var pass = true;
  var pword1 = document.getElementById("pword").value;
var pword2 = document.getElementById("pword2").value;
    //validates that password entered by the user and reentered password match.
  if (pword1 != pword2) {
    pass = false;
    alert("Passwords do not match")
  } 
  else {
      //validates that username isn't already in use
    if(exist_usernames.includes(document.getElementById("uname").value)){
      pass = false;
      alert("Username Taken")
    }
  }
  return pass;
}