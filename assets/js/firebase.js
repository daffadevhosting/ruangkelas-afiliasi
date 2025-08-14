(function(){
  const cfg = {
    apiKey: '{{ site.data.firebase.apiKey }}',
    authDomain: '{{ site.data.firebase.authDomain }}',
    projectId: '{{ site.data.firebase.projectId }}',
    storageBucket: '{{ site.data.firebase.storageBucket }}',
    messagingSenderId: '{{ site.data.firebase.messagingSenderId }}',
    appId: '{{ site.data.firebase.appId }}'
  };
  firebase.initializeApp(cfg);
})();