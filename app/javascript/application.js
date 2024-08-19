// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "popper"
import "bootstrap"

//= require rails-ujs



document.addEventListener('DOMContentLoaded', function() {
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

  document.addEventListener('DOMContentLoaded', function () {
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

  document.addEventListener('DOMContentLoaded', function () {
    let iframe = document.querySelector('iframe');
    if (iframe) {
      iframe.src = iframe.src;
    }
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    const dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
      return new bootstrap.Dropdown(dropdownToggleEl);
    });
  });
  
  