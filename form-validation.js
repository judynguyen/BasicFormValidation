function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var userLength = userEntered.length;
  console.log("Username length is " +   userLength);
  
  if(userLength>=6)
  {
    document.getElementById("usernameError").innerHTML="Good username.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //turns elements green
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  else {
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Bad username.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }

  //Show message that there is an error with the password...
  document.getElementById("passwordError").innerHTML="Bad password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-error");
}
