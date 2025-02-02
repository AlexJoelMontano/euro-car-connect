// app/assets/javascripts/application.js
import "@hotwired/turbo-rails";
import "controllers";
import 'bootstrap';
import 'popper.js';
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "./edit_user_form"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

document.addEventListener('turbo:load', function() {
  document.querySelectorAll('.toggle-text').forEach(function(button) {
    button.addEventListener('click', function() {
      const accordionBody = this.closest('.accordion-body');
      const truncatedText = accordionBody.querySelector('.truncated-text');
      const fullText = accordionBody.querySelector('.full-text');

      if (fullText.style.display === 'none') {
        fullText.style.display = 'block';
        truncatedText.style.display = 'none';
        this.textContent = 'Less';
      } else {
        fullText.style.display = 'none';
        truncatedText.style.display = 'block';
        this.textContent = 'More';
      }
    });
  });
});

document.addEventListener('turbo:load', function () {
  const loginForm = document.getElementById('login-form');
  const emailField = document.querySelector('input[name="email"]');
  const passwordField = document.querySelector('input[name="password"]');

  if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
      if (emailField.classList.contains('is-invalid')) {
        emailField.focus();
      } else if (passwordField.classList.contains('is-invalid')) {
        passwordField.focus();
      }
    });
  }
});

document.addEventListener('turbo:load', function () {
  let iframe = document.querySelector('iframe');
  if (iframe) {
    iframe.src = iframe.src;
  }
});

document.addEventListener('turbo:load', function () {
  const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
  const dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl);
  });
});

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

