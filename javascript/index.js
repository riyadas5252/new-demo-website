function validation() {
    var name = document.getElementById("exampleInputName1");
    var username = document.getElementById("exampleInputName1");
    var email = document.getElementById("exampleInputEmail1");
    var password = document.getElementById("exampleInputpassword1");
    var checkbox = document.getElementById("exampleInputcheckbox1");
  
    if (
      name.value.trim() == "" ||
      username.value.trim() == "" ||
      email.value.trim() == "" ||
      password.value.trim() == "" ||
      checkbox.value.trim() == ""
    ) {
      alert("No blank value allowed");
      return false;
    } else return true;
  }
  