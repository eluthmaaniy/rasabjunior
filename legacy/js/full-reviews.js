  // Init featured reviews Swiper
    const featured = new Swiper('.featured-swiper', {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      },
      breakpoints: {
        768: { slidesPerView: 1.2 }
      }
    });

    const additionalReviews = [
      {
        avatar: "https://i.pravatar.cc/60?img=16",
        username: "danish_design",
        country: "Denmark",
        flag: "https://flagcdn.com/24x18/dk.png",
        timeAgo: "5 months ago",
        isRepeated: false,
        rating: 5,
        review: "Rasab Agency created a minimalist furniture store that perfectly represents our Scandinavian design philosophy. The user experience is clean and intuitive, and the inventory management system handles our complex product variations seamlessly.",
        gigImage: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609402/IMG-20250921-WA0039_htnlsc.jpg",
        gigDetails: "$520 • 11 days • Furniture Store Build",
        hasResponse: true,
        response: "Thank you! Your furniture designs are truly inspiring. Happy to help bring them online!"
      },
      {
        avatar: "https://i.pravatar.cc/60?img=24",
        username: "irish_organic",
        country: "Ireland",
        flag: "https://flagcdn.com/24x18/ie.png",
        timeAgo: "5 months ago",
        isRepeated: true,
        rating: 5,
        review: "Exceptional work on our organic food marketplace! The multi-vendor system works perfectly and the subscription box feature has been a huge hit with customers. The SEO optimization has improved our visibility significantly.",
        gigImage: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609389/IMG-20250921-WA0033_crg1lz.jpg",
        gigDetails: "$680 • 14 days • Multi-vendor Marketplace",
        hasResponse: false
      },
      {
        avatar: "https://i.pravatar.cc/60?img=41",
        username: "greek_pottery",
        country: "Greece",
        flag: "https://flagcdn.com/24x18/gr.png",
        timeAgo: "6 months ago",
        isRepeated: false,
        rating: 5,
        review: "Rasab Agency built a beautiful store for our traditional Greek pottery. The cultural storytelling elements and product customization features work wonderfully. International shipping integration has opened up new markets for us.",
        gigImage: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609382/IMG-20250921-WA0029_dcgxl0.jpg",
        gigDetails: "$360 • 9 days • Cultural Artisan Store",
        hasResponse: true,
        response: "Your pottery is absolutely beautiful! Honored to help share Greek culture with the world."
      },
      {
        avatar: "https://i.pravatar.cc/60?img=19",
        username: "polish_amber",
        country: "Poland",
        flag: "https://flagcdn.com/24x18/pl.png",
        timeAgo: "6 months ago",
        isRepeated: false,
        rating: 5,
        review: "Outstanding execution on our amber jewelry store! The product authentication system and certificate generation feature give customers confidence in our genuine Baltic amber. The store design is elegant and professional.",
        gigImage: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609381/IMG-20250921-WA0028_bwhztb.jpg",
        gigDetails: "$440 • 10 days • Jewelry Authentication Store",
        hasResponse: false
      },
      {
        avatar: "https://i.pravatar.cc/60?img=27",
        username: "czech_crystal",
        country: "Czech Republic",
        flag: "https://flagcdn.com/24x18/cz.png",
        timeAgo: "7 months ago",
        isRepeated: true,
        rating: 5,
        review: "Rasab Agency delivered an exceptional crystal and glassware store with stunning product galleries and 360-degree view functionality. The B2B wholesale section has streamlined our dealer relationships significantly.",
        gigImage: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609395/IMG-20250921-WA0036_pd32aq.jpg",
        gigDetails: "$590 • 12 days • Crystal Gallery + B2B Portal",
        hasResponse: true,
        response: "Your crystal work is absolutely stunning! Thank you for the opportunity to showcase such artistry."
      },
      {
        avatar: "https://i.pravatar.cc/60?img=36",
        username: "hungarian_wine",
        country: "Hungary",
        flag: "https://flagcdn.com/24x18/hu.png",
        timeAgo: "7 months ago",
        isRepeated: false,
        rating: 5,
        review: "Perfect wine e-commerce solution! The vintage tracking system, cellar management features, and age verification process work flawlessly. The tasting notes integration and wine pairing suggestions have enhanced customer experience.",
        gigImage: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609402/IMG-20250921-WA0039_htnlsc.jpg",
        gigDetails: "$650 • 13 days • Wine E-commerce + Features",
        hasResponse: false
      },
      {
        avatar: "https://i.pravatar.cc/60?img=43",
        username: "portuguese_tiles",
        country: "Portugal",
        flag: "https://flagcdn.com/24x18/pt.png",
        timeAgo: "8 months ago",
        isRepeated: false,
        rating: 5,
        review: "Rasab Agency created a magnificent store for our traditional Portuguese tiles (azulejos). The pattern visualization tool and custom design service integration have revolutionized how customers interact with our products.",
        gigImage: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609389/IMG-20250921-WA0033_crg1lz.jpg",
        gigDetails: "$480 • 11 days • Tile Design Studio",
        hasResponse: true,
        response: "Your azulejos are works of art! Happy to help preserve and share this beautiful Portuguese tradition."
      },
      {
        avatar: "https://i.pravatar.cc/60?img=14",
        username: "austrian_alpine",
        country: "Austria",
        flag: "https://flagcdn.com/24x18/at.png",
        timeAgo: "8 months ago",
        isRepeated: true,
        rating: 5,
        review: "Exceptional alpine sports equipment store! The gear compatibility checker and mountain weather integration provide incredible value to our customers. The seasonal inventory management system handles our complex product cycles perfectly.",
        gigImage: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609382/IMG-20250921-WA0029_dcgxl0.jpg",
        gigDetails: "$720 • 15 days • Alpine Sports Store + Weather API",
        hasResponse: false
      },
      {
        avatar: "https://i.pravatar.cc/60?img=48",
        username: "slovenian_honey",
        country: "Slovenia",
        flag: "https://flagcdn.com/24x18/si.png",
        timeAgo: "9 months ago",
        isRepeated: false,
        rating: 5,
        review: "Beautiful organic honey store with educational content about beekeeping and sustainability. The subscription service for regular honey deliveries and the bee adoption program integration have created a loyal customer community.",
        gigImage: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609381/IMG-20250921-WA0028_bwhztb.jpg",
        gigDetails: "$380 • 8 days • Organic Honey Store + Subscriptions",
        hasResponse: true,
        response: "Your commitment to sustainable beekeeping is inspiring! Happy to help spread awareness about bee conservation."
      },
      {
        avatar: "https://i.pravatar.cc/60?img=21",
        username: "estonian_digital",
        country: "Estonia",
        flag: "https://flagcdn.com/24x18/ee.png",
        timeAgo: "9 months ago",
        isRepeated: false,
        rating: 5,
        review: "Cutting-edge digital services marketplace with blockchain integration for secure transactions. The smart contract system for service delivery and the reputation scoring algorithm work flawlessly. Truly innovative solution!",
        gigImage: "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609395/IMG-20250921-WA0036_pd32aq.jpg",
        gigDetails: "$850 • 18 days • Blockchain Marketplace",
        hasResponse: true,
        response: "Your vision for blockchain integration was ahead of its time! Exciting to work on such innovative projects."
      }
    ];

    let currentlyShown = 10;
    let loadedReviews = 0;

    document.getElementById('loadMoreBtn').addEventListener('click', function() {
      const reviewsContainer = document.getElementById('reviewsContainer');
      const reviewCount = document.getElementById('reviewCount');
      const loadMoreBtn = document.getElementById('loadMoreBtn');
      
      // Load 5 more reviews each time
      const reviewsToLoad = Math.min(5, additionalReviews.length - loadedReviews);
      
      for (let i = 0; i < reviewsToLoad; i++) {
        const review = additionalReviews[loadedReviews + i];
        
        const reviewHTML = `
          <article class="bg-white rounded-lg p-4 shadow-md">
            <div class="flex justify-between items-start">
              <div class="flex items-center gap-3">
                <img src="${review.avatar}" alt="avatar" class="w-12 h-12 rounded-full" />
                <div>
                  <div class="flex items-center gap-2">
                    <p class="font-medium">${review.username}</p>
                    <img src="${review.flag}" alt="${review.country}" />
                    ${review.isRepeated ? '<span class="repeated-client-badge">Repeated Client</span>' : ''}
                  </div>
                  <p class="text-xs text-gray-500">${review.timeAgo}</p>
                </div>
              </div>

              <div class="text-sm text-black">
                ${'<i class="ri-star-fill"></i>'.repeat(review.rating)}
              </div>
            </div>

            <p class="mt-3 text-gray-700">${review.review}</p>

            <div class="mt-3 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <img src="${review.gigImage}" alt="gig" class="gig-thumb" />
                <div class="text-xs text-gray-500">${review.gigDetails}</div>
              </div>

              ${review.hasResponse ? `
                <div class="text-xs text-gray-500">
                  <div class="font-medium text-heading">Seller's Response</div>
                  <div class="mt-1">${review.response}</div>
                </div>
              ` : `
                <div class="text-xs text-gray-500">Helpful? <a href="#" class="text-gray-700 hover:underline">Yes</a> <span class="mx-2">|</span> <a href="#" class="text-gray-700 hover:underline">No</a></div>
              `}
            </div>
          </article>
        `;
        
        reviewsContainer.insertAdjacentHTML('beforeend', reviewHTML);
      }
      
      loadedReviews += reviewsToLoad;
      currentlyShown += reviewsToLoad;
      
      // Update counter
      reviewCount.textContent = `Showing ${currentlyShown} of 942 reviews`;
      
      // Hide button if all additional reviews are loaded
      if (loadedReviews >= additionalReviews.length) {
        loadMoreBtn.style.display = 'none';
        reviewCount.textContent = `Showing ${currentlyShown} of 942 reviews • Load more by refreshing the page`;
      }
    });