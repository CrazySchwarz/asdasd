window.addEventListener('load', () => {
  const loadingScreen = document.querySelector('.loadingscreen');
  const logo = document.querySelector('.loadingscreenlogo');

  // 1 ila 5 saniye arası rastgele süre
  const duration = Math.floor(Math.random() * 2) + 1;

  setTimeout(() => {
    // Logo küçültme
    logo.style.transition = 'transform 0.3s ease';
    logo.style.transform = 'scale(0.8)';

    setTimeout(() => {
      // Logo büyüme ve opacity fade out eş zamanlı
      logo.style.transition = 'transform 1.5s ease, opacity 1.5s ease';
      loadingScreen.style.transition = 'opacity 1.5s ease';

      logo.style.transform = 'scale(1.5)';
      logo.style.opacity = '0';

      loadingScreen.style.opacity = '0';

      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 300);
    }, 150);
  }, duration * 1000);
});

