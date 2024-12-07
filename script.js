document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".hero");
  const backgrounds = [
    "url(gambar/hero1.jpg)",
    "url(gambar/hero2.jpg)",
    "url(gambar/hero3.jpg)",
    "url(gambar/Masjid_Raya_Sumbar.jpg)",
  ]; // Daftar background yang akan digunakan, tambahkan lebih jika diperlukan

  let currentBgIndex = 0;

  function changeBackground() {
    hero.style.backgroundImage = backgrounds[currentBgIndex];
    currentBgIndex = (currentBgIndex + 1) % backgrounds.length; // Berganti ke background berikutnya dalam daftar
    setTimeout(changeBackground, 2000); // Mengulang setiap 3 detik
  }

  // Memanggil fungsi untuk memulai perubahan background
  changeBackground();
});

// Add interactivity if needed
document.querySelector('.cta').addEventListener('click', () => {
    alert('Welcome to Indonesia Kaya!');
});

