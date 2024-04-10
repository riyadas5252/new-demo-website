document.addEventListener("DOMContentLoaded", function() {
  // Get the checkboxes and the Finish button
  const checkboxes = document.querySelectorAll(".checkbox");
  const finishButton = document.querySelector(".finish input[type='submit']");

  // Add event listener to the Finish button
  finishButton.addEventListener("click", function(event) {
      // Check if at least one checkbox is checked
      let isChecked = false;
      checkboxes.forEach(function(checkbox) {
          if (checkbox.checked) {
              isChecked = true;
          }
      });

      if (!isChecked) {
          event.preventDefault(); // Prevent the default behavior of the button
          alert("Please select at least one option.");
      }
  });
});
