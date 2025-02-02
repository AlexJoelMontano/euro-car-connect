document.addEventListener("DOMContentLoaded", function() {
  // Function to handle edit button click
  function handleEditButtonClick(event) {
    const targetSelector = event.target.getAttribute("data-target");
    const targetElement = document.querySelector(targetSelector);
    const saveButton = targetElement.nextElementSibling;

    targetElement.removeAttribute("readonly");
    targetElement.focus();
    saveButton.style.display = "inline-block";
    event.target.style.display = "none";
  }

  // Function to handle save button click
  function handleSaveButtonClick(event) {
    const targetElement = event.target.previousElementSibling;
    targetElement.setAttribute("readonly", true);
    event.target.style.display = "none";
    document.querySelector(".edit-button[data-target='#" + targetElement.id + "']").style.display = "inline-block";
  }

  // Attach event listeners to edit buttons
  document.querySelectorAll(".edit-button").forEach(button => {
    button.addEventListener("click", handleEditButtonClick);
  });

  // Attach event listeners to save buttons
  document.querySelectorAll(".save-button").forEach(button => {
    button.addEventListener("click", handleSaveButtonClick);
  });
});