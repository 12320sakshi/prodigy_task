window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#444'; // Change background color on scroll
    } else {
      navbar.style.backgroundColor = '#333';
    }
  });
  
  // Change font color on hover
  var navLinks = document.querySelectorAll('#navbar a');
  navLinks.forEach(function(navLink) {
    navLink.addEventListener('mouseover', function() {
      this.style.color = '#ff00ff'; // Change font color on hover
    });
  
    navLink.addEventListener('mouseout', function() {
      this.style.color = '#fff'; // Restore font color when not hovering
    });
  });