// Slider de tracks free
function showTracks(n, trackClass) {
  const tracks = document.querySelectorAll(trackClass);
  tracks.forEach((track) => {
    track.style.opacity = '0';
    track.classList.remove('active');
  });

  if (n >= tracks.length) {
    currentTrack = 0;
  } else if (n < 0) {
    currentTrack = tracks.length - 1;
  } else {
    currentTrack = n;
  }

  tracks[currentTrack].style.opacity = '1';
  tracks[currentTrack].classList.add('active');
}

let currentTrack = 0;
showTracks(currentTrack, '.track');

document.querySelector('#next-track').addEventListener('click', function () {
  currentTrack++;
  showTracks(currentTrack, '.track');
});

document.querySelector('#prev-track').addEventListener('click', function () {
  currentTrack--;
  showTracks(currentTrack, '.track');
});

// Slider de artistas
document.addEventListener('DOMContentLoaded', function () {
  const artistList = document.querySelectorAll('.artist');
  let artistIndex = 0;

  function showArtist(n) {
    artistList.forEach((artist) => {
      artist.style.opacity = '0';
      artist.classList.remove('active');
    });

    if (n >= artistList.length) {
      artistIndex = 0;
    } else if (n < 0) {
      artistIndex = artistList.length - 1;
    } else {
      artistIndex = n;
    }

    artistList[artistIndex].style.opacity = '1';
    artistList[artistIndex].classList.add('active');
  }

  showArtist(artistIndex);

  document.getElementById('prev-artist').addEventListener('click', function () {
    showArtist(artistIndex - 1);
  });

  document.getElementById('next-artist').addEventListener('click', function () {
    showArtist(artistIndex + 1);
  });
});

// Slider de Academy
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button2');
const nextButton = document.querySelector('.next-button2');

let currentSlide = 0;

function hideSlides() {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
}

function showSlide() {
  hideSlides();
  slides[currentSlide].style.display = 'block';
}

showSlide();

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Mostrar testimonios automáticamente cada 3 segundos
document.addEventListener('DOMContentLoaded', function () {
  const testimonials = document.querySelectorAll('.testimonial');

  function hideTestimonials() {
    testimonials.forEach((testimonial, index) => {
      if (index !== 0) {
        testimonial.style.display = 'none';
      }
    });
  }

  function showNextTestimonial() {
    let currentTestimonial = 0;
    testimonials.forEach((testimonial, index) => {
      if (testimonial.style.display !== 'none') {
        currentTestimonial = index;
        testimonial.style.display = 'none';
      }
    });

    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].style.display = 'block';
  }

  hideTestimonials();
  setInterval(showNextTestimonial, 3000);
});

// Mostrar/Ocultar contenido adicional
document.addEventListener('DOMContentLoaded', function () {
  const expandIcon = document.querySelector('.expand-icon');
  const additionalContent = document.querySelector('.additional-content');

  expandIcon.addEventListener('click', function () {
    if (additionalContent.style.maxHeight === '0px' || additionalContent.style.maxHeight === '') {
      additionalContent.style.maxHeight = additionalContent.scrollHeight + 'px';
      additionalContent.style.opacity = '1';
      expandIcon.children[0].style.display = 'none';
      expandIcon.children[1].style.display = 'block';
    } else {
      additionalContent.style.maxHeight = '0';
      additionalContent.style.opacity = '0';
      expandIcon.children[0].style.display = 'block';
      expandIcon.children[1].style.display = 'none';
    }
  });
});

// Mostrar testimonios automáticamente cada 3 segundos (para premium-subscribers)
document.addEventListener('DOMContentLoaded', function () {
  const premiumTestimonials = document.querySelectorAll('.subscriber .swiper-slide');

  function hidePremiumTestimonials() {
    premiumTestimonials.forEach((testimonial, index) => {
      if (index !== 0) {
        testimonial.style.display = 'none';
      }
    });
  }

  function showNextPremiumTestimonial() {
    let currentTestimonial = 0;
    premiumTestimonials.forEach((testimonial, index) => {
      if (testimonial.style.display !== 'none') {
        currentTestimonial = index;
        testimonial.style.display = 'none';
      }
    });

    currentTestimonial = (currentTestimonial + 1) % premiumTestimonials.length;
    premiumTestimonials[currentTestimonial].style.display = 'block';
  }

  hidePremiumTestimonials();
  setInterval(showNextPremiumTestimonial, 3000);
});


// Funciones para gestionar cookies
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname) {
  const name = cname + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function acceptCookies() {
  setCookie('cookies_accepted', 'true', 365); 
  document.getElementById('cookieConsent').style.display = 'none'; 
}

document.addEventListener('DOMContentLoaded', function () {
  const acceptCookiesButton = document.getElementById('acceptCookiesButton');
  acceptCookiesButton.addEventListener('click', acceptCookies);

  if (getCookie('cookies_accepted') === 'true') {
    document.getElementById('cookieConsent').style.display = 'none';
  }
});

// Mostrar testimonios automáticamente cada 3 segundos (para premium-subscribers)
document.addEventListener('DOMContentLoaded', function () {
  const testimonials = document.querySelectorAll('.premium-subscribers .testimonial');

  function hideTestimonials() {
    testimonials.forEach((testimonial, index) => {
      if (index !== 0) {
        testimonial.style.display = 'none';
      }
    });
  }

  function showNextTestimonial() {
    let currentTestimonial = 0;
    testimonials.forEach((testimonial, index) => {
      if (testimonial.style.display !== 'none') {
        currentTestimonial = index;
        testimonial.style.display = 'none';
      }
    });

    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].style.display = 'block';
  }

  hideTestimonials();
  setInterval(showNextTestimonial, 3000);
});


