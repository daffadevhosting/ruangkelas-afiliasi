(function(){
  const redirectIfNeeded = () => {
    const user = window.__auth?.user;
    if (!user) {
      // Jika belum siap, tunda sebentar
      setTimeout(() => {
        if (!window.__auth?.user) location.href = '/login';
      }, 300);
    }
  };

  if (document.readyState === 'complete') redirectIfNeeded();
  else window.addEventListener('load', redirectIfNeeded);
})();