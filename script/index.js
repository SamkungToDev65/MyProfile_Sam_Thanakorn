document.addEventListener('DOMContentLoaded', (event) => {
    const textElement = document.getElementById('animated-text');
    const text = textElement.textContent;
    textElement.textContent = ''; // Clear initial text
    let index = 0;
    const speed = 100; // Speed of typing in milliseconds

    function typeText() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, speed);
        }
    }

    typeText();
});

document.addEventListener('DOMContentLoaded', () => {
    // Select all images in the certificate section
    const certImages = document.querySelectorAll('.cert-card img');
    
    // Add click event listener to each image
    certImages.forEach(image => {
        image.addEventListener('click', () => {
            // Get the source of the clicked image
            const imgSrc = image.getAttribute('src');
            
            // Find the modal and the modal image element
            const modal = new bootstrap.Modal(document.getElementById('imageModal'));
            const modalImage = document.getElementById('modalImage');
            
            // Set the source of the modal image to the clicked image source
            modalImage.setAttribute('src', imgSrc);
            
            // Show the modal
            modal.show();
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const certificateItems = document.querySelectorAll('#certificate .col-md-4');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            // กรองใบรับรองตามประเภทที่เลือก
            certificateItems.forEach(item => {
                if (category === 'all' || item.id === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            // เพิ่ม/ลบ active class จากปุ่ม
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

  document.addEventListener('DOMContentLoaded', function() {
    const filterSelect = document.getElementById('filterSelect');
    const certCards = document.querySelectorAll('#certificate .cert-card');
    
    filterSelect.addEventListener('change', function() {
      const selectedCategory = this.value;

      certCards.forEach(card => {
        // Get the category from the card's parent div
        const cardCategory = card.parentElement.id;

        if (selectedCategory === 'all' || selectedCategory === cardCategory) {
          card.parentElement.style.display = 'block'; // Show card
        } else {
          card.parentElement.style.display = 'none'; // Hide card
        }
      });
    });
  });

