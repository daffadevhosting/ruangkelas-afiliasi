```sh
├─ _config.yml
├─ package.json
├─ postcss.config.cjs
├─ tailwind.config.cjs
├─ _layouts/
│  ├─ default.html
│  ├─ app.html            # layout untuk halaman protected (butuh login)
│  └─ lesson.html         # layout single lesson
├─ _includes/
│  ├─ head.html
│  ├─ navbar.html
│  └─ footer.html
├─ _data/
│  └─ firebase.yml        # konfigurasi firebase frontend
├─ assets/
│  ├─ css/tailwind.css
│  └─ js/
│     ├─ app.js           # init UI, GSAP, dll
│     ├─ firebase.js      # init Firebase SDK
│     ├─ auth.js          # guard & auth handlers (login, logout)
│     └─ lessons.js       # fetch list lesson dari Firestore & render
├─ index.html             # Landingpage
├─ login.html             # Laman login
├─ belajar/
│  └─ index.html          # Laman list pembelajaran (protected)
└─ lessons/
   └─ {{slug}}.html       # Dibangun via Jekyll collection `lessons` (protected)
```
### ToDo:

```sh
git clone https://github.com/daffadevhosting/ruangkelas-afiliasi.git
cd ruangkelas-afiliasi
```
then run
```sh
npm install
bundle install
npm run build
npm run serve
```
