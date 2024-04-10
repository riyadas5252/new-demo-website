function validation() {
    var username = document.getElementById("exampleInputName1");
    var email = document.getElementById("exampleInputEmail1");
    var password = document.getElementById("exampleInputpassword1");
  
    if (
      username.value.trim() == "" ||
      email.value.trim() == "" ||
      password.value.trim() == ""
    ) {
      alert("No blank value allowed");
      return false;
    } else return true;
  }
  