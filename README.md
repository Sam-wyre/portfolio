
# Samuel Agbanagba — Portfolio (Multi‑page)

Dark, professional, and responsive portfolio with separate tracks for **Cybersecurity** and **AI/ML**, plus pages for Blog, Events, Reading List, Certifications, Education, and Contact.

## Structure
```
.
├── index.html
├── ai.html
├── cybersecurity.html
├── events.html
├── reading-list.html
├── certifications.html
├── education.html
├── contact.html
├── blog/
│   ├── index.html
│   └── posts/
│       └── first-post.html
└── assets/
    ├── css/styles.css
    ├── js/main.js
    └── img/
```

## Usage
- Edit each page content directly in HTML.
- Blog posts live in `blog/posts/` — copy `first-post.html` to start a new post.
- Deploy via GitHub Pages by pushing this folder to your `sam-wyre.github.io` repo.

## Custom Domain
- Add a `CNAME` file in the repo root containing `samsiri.xyz`.
- Set GoDaddy DNS to GitHub Pages A records, and `www` CNAME to `sam-wyre.github.io`.

## License
MIT (optional — add `LICENSE` to repo).
