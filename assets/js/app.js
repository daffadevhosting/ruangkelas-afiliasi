(function(){
  document.addEventListener('DOMContentLoaded', () => {
    // Navbar auth state UI
    firebase.auth().onAuthStateChanged((user) => {
      const btnLogin = document.getElementById('btnLogin');
      const btnLogout = document.getElementById('btnLogout');
      if (user) {
        btnLogin?.classList.add('hidden');
        btnLogout?.classList.remove('hidden');
      } else {
        btnLogin?.classList.remove('hidden');
        btnLogout?.classList.add('hidden');
      }
      window.__auth = { user };
      document.dispatchEvent(new CustomEvent('auth-ready'));
    });

    document.getElementById('btnLogout')?.addEventListener('click', async () => {
      await firebase.auth().signOut();
      location.href = '/';
    });
  });
})();