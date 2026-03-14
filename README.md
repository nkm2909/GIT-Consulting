# GIT Consulting Pty Ltd – Website

Static website for [gitconsulting.com.au](https://gitconsulting.com.au), fully compatible with GitHub Pages.

## File Structure

```
/
├── index.html         Home
├── about.html         About Us
├── services.html      Services
├── solutions.html     Industry Solutions
├── careers.html       Careers
├── contact.html       Contact (Formspree: maqpbkoz)
├── _config.yml        GitHub Pages config
├── css/style.css      All styles
├── js/main.js         JS (nav, animations, AJAX form)
└── images/logo.jpg    GIT Consulting logo
```

## Deploy to GitHub Pages

1. Push all files to a GitHub repository (`main` branch, root folder)
2. Go to **Settings → Pages → Source: Deploy from branch → main / root**
3. Click **Save**

### Custom Domain (gitconsulting.com.au)

1. In GitHub Pages settings add custom domain: `gitconsulting.com.au`
2. Create a file named `CNAME` in the repo root containing: `gitconsulting.com.au`
3. At your DNS provider set these A records:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
4. Add CNAME: `www` → `<username>.github.io`
5. Enable **Enforce HTTPS** in GitHub Pages settings

## Contact Form

- Endpoint: `https://formspree.io/f/maqpbkoz`
- Submissions are sent via AJAX — user never leaves the page
- On success the form is replaced with a confirmation message
- Honeypot spam filter included (`_gotcha` field)
