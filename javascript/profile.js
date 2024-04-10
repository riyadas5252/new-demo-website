document.addEventListener("DOMContentLoaded", function() {
  // Get the elements
  const locationInput = document.getElementById("location");
  const inputFile = document.getElementById("inputfile");
  const nextButton = document.querySelector(".next input[type='submit']");

  // Add event listener to the Next button
  nextButton.addEventListener("click", function(event) {
      // Check if location is empty or image is not selected
      if (locationInput.value.trim() === "" || !inputFile.files.length) {
          event.preventDefault(); // Prevent the default behavior of the button
          alert("Please fill in the location and upload an image.");
      }
  });
});


let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("inputfile");


inputFile.onchange = function(){
profilePic.src = URL.createObjectURL(inputFile.files[0]);

}