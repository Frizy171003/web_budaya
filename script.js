document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".hero");
  const backgrounds = [
    "url(gambar/hero1.jpg)",
    "url(gambar/hero2.jpg)",
    "url(gambar/hero3.jpg)",
    "url(gambar/Masjid_Raya_Sumbar.jpg)",
  ]; 

  let currentBgIndex = 0;

  function changeBackground() {
    hero.style.backgroundImage = backgrounds[currentBgIndex];
    currentBgIndex = (currentBgIndex + 1) % backgrounds.length; 
    setTimeout(changeBackground, 2000); 
  }

  
  changeBackground();
});


document.querySelector('.cta').addEventListener('click', () => {
    alert('Welcome to Indonesia Kaya!');
});

