document.getElementById('read-more-bio').addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('bio-synopsis').classList.add('hidden');
      document.getElementById('bio-full').classList.remove('hidden');
    });

    document.getElementById('show-more-skills').addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('hidden-skills').classList.remove('hidden');
      this.classList.add('hidden');
    });
    
        // Featured Swiper autoplay
    const featuredSwiper = new Swiper(".featured-swiper", {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
    });

    // Order by functionality
    document.getElementById('orderBy').addEventListener('change', function() {
      const value = this.value;
      const grid = document.getElementById('portfolioGrid');
      const items = Array.from(grid.children);
      
      // Simple shuffle for demo purposes
      if (value === 'popular' || value === 'rating' || value === 'category') {
        items.sort(() => Math.random() - 0.5);
        items.forEach(item => grid.appendChild(item));
      }
    });
    document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const portfolioItems = document.querySelectorAll('.portfolio-item');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active-filter'));
                    
                    // Add active class to clicked button
                    this.classList.add('active-filter');
                    
                    const filterValue = this.getAttribute('data-filter');
                    
                    portfolioItems.forEach(item => {
                        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
        });