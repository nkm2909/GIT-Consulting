# GIT Consulting Pty Ltd – Website

Static website for [gitconsulting.com.au](https://gitconsulting.com.au), deployable on GitHub Pages.

## Pages

| File | Description |
|------|-------------|
| `index.html` | Home page |
| `about.html` | About GIT Consulting |
| `services.html` | Service offerings |
| `solutions.html` | Industry solutions |
| `careers.html` | Career opportunities |
| `contact.html` | Contact form & details |

## Deploy to GitHub Pages

1. Create a GitHub repository (e.g., `gitconsultingptyltd.github.io` or any name)
2. Push all files to the `main` branch
3. Go to **Settings → Pages**
4. Under **Source**, select `main` branch and `/ (root)` folder
5. Click **Save** — your site will be live at `https://<username>.github.io/<repo>`

### Custom Domain (gitconsulting.com.au)

1. In GitHub Pages settings, enter `gitconsulting.com.au` as the custom domain
2. Create a `CNAME` file in the repo root containing: `gitconsulting.com.au`
3. At your DNS provider, add:
   - `A` records pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - `CNAME` record: `www` → `<username>.github.io`
4. Enable **Enforce HTTPS** in GitHub Pages settings

## Structure

```
gitconsulting/
├── index.html
├── about.html
├── services.html
├── solutions.html
├── careers.html
├── contact.html
├── _config.yml
├── README.md
├── css/
│   └── style.css
└── js/
    └── main.js
```

## Contact Form

The contact form uses a `mailto:` link as a static fallback (appropriate for GitHub Pages hosting).  
For a fully functional server-side form, consider integrating:
- [Formspree](https://formspree.io) — free tier available, just update the form `action` attribute
- [Netlify Forms](https://www.netlify.com/products/forms/) — if migrating to Netlify hosting

## Tech Stack

- Pure HTML5, CSS3, JavaScript (no frameworks, no build step required)
- Google Fonts: Syne + DM Sans
- Fully responsive — mobile, tablet, desktop
- GitHub Pages compatible (no Jekyll themes, no plugins)
