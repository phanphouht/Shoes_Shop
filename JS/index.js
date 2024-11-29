function createPolygon(sides) {
    const points = [];
    const angle = (2 * Math.PI) / sides;
    for (let i = 0; i < sides; i++) {
      const x = 50 + 50 * Math.cos(i * angle);
      const y = 50 + 50 * Math.sin(i * angle);
      points.push(`${x}% ${y}%`);
    }
    return `polygon(${points.join(', ')})`;
  }
  
  // Example: Apply a polygon with 8 sides
  document.getElementById('polygon').style.clipPath = createPolygon(8);
  
  $(document).ready(function(){
    // Toggle the search modal
    $("#search-switch").click(function(){
      $(".search-model").toggleClass('active-search');
    });
    
    // Close search modal on '+' click
    $(".search-close-switch").click(function(){
      $(".search-model").removeClass('active-search');
    });
    
    // Optional: Add smooth scrolling for anchor links (optional)
    $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      var target = this.hash;
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 800);
    });
  });
  
  document.getElementById("open-search-modal").addEventListener("click", () => {
    document.getElementById("search-modal").classList.add("active-search");
  });
  
  document.getElementById("close-search-modal").addEventListener("click", () => {
    document.getElementById("search-modal").classList.remove("active-search");
  });
  
  document.getElementById("search-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const fileInput = document.getElementById("image-upload");
    if (fileInput.files.length > 0) {
      alert("File uploaded: " + fileInput.files[0].name);
    } else {
      alert("No file selected!");
    }
  });
  console.log('Search modal:', searchModal); // Check modal element
  const image = document.querySelector('.animated-image');
  
  image.addEventListener('click', () => {
    // Add the pop-in class
    image.classList.add('pop-in');
  
    // Remove the class after animation ends to allow re-triggering
    setTimeout(() => {
      image.classList.remove('pop-in');
    }, 500); // Match the animation duration
  });
  