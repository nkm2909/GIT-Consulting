# GIT Consulting Pty Ltd – Website v3

Static website for [gitconsulting.com.au](https://gitconsulting.com.au). GitHub Pages compatible.

## Pages

| File | Description |
|------|-------------|
| `index.html` | Home – with AI Banner section |
| `about.html` | About GIT Consulting |
| `services.html` | Services – Now Assist + Agentic AI featured first |
| `servicenow-ai.html` | **NEW** ServiceNow Now Assist & Agentic AI practice page |
| `solutions.html` | Industry solutions |
| `leadership.html` | **NEW** Leadership – Neeraj Kumar Mishra executive bio |
| `careers.html` | Career opportunities |
| `contact.html` | Contact form (Formspree: maqpbkoz) |

## Deploy to GitHub Pages

1. Push contents of this folder to your repo `main` branch (root)
2. Settings → Pages → Source: main / root → Save
3. Add `CNAME` file containing `gitconsulting.com.au` for custom domain
4. Point DNS A records to GitHub Pages IPs

## Contact Form
- Endpoint: `https://formspree.io/f/maqpbkoz`
- AJAX submission – no redirect, inline success message
- Honeypot spam filter included
