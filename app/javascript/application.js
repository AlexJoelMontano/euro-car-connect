// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
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
  