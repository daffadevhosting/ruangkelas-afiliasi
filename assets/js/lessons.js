(async function(){
  const container = document.getElementById('lessonList');
  const db = firebase.firestore();

  // Hanya baca jika login. Rules Firestore juga akan enforce.
  const ensureAuth = () => new Promise(resolve => {
    if (window.__auth?.user) return resolve(window.__auth.user);
    document.addEventListener('auth-ready', () => resolve(window.__auth?.user));
  });
  await ensureAuth();

  const snap = await db.collection('lessons').orderBy('order', 'asc').get();
  if (snap.empty) {
    container.innerHTML = '<div class="text-neutral-500">Belum ada materi.</div>';
    return;
  }

  const html = snap.docs.map(d => {
    const x = d.data();
    const url = `/belajar/${x.slug}/`;
    return `
      <a href="${url}" class="card block">
        <div class="aspect-video rounded-xl border border-black/10 overflow-hidden bg-neutral-100">
          ${x.thumb ? `<img src="${x.thumb}" alt="${x.title}" class="w-full h-full object-cover">` : ''}
        </div>
        <h3 class="font-bold mt-4">${x.title}</h3>
        <p class="text-sm text-neutral-600 line-clamp-2">${x.summary || ''}</p>
        <div class="mt-3 text-xs text-neutral-500">Level: ${x.level || 'Semua'}</div>
      </a>`;
  }).join('');

  container.innerHTML = html;
})();