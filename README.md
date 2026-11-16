# Dawson Gulasa — engineering portfolio website

Professional website for **PCB design, digital hardware, FPGA/RTL and embedded systems**.

- **Site:** https://dawson-gulasa.github.io/
- **Source:** this repository (public GitHub Pages user site)
- **Project source, reports and media:** https://github.com/Dawson-Gulasa/.Projects
- **Stack:** Static HTML, CSS and JavaScript, without an external build system.

## Site organization

```text
index.html                 Landing page and selected engineering work
about.html                 Professional bio, education and technical interests
experience.html            Industry and research experience, coursework and skills
projects.html              Filterable list of all nine engineering projects
projects/*.html             Nine individual technical case-study pages
resume.html                Resume overview with embedded PDF and download
contact.html               Email, LinkedIn and public GitHub links
assets/style.css            Dark/pastel-red theme, responsive layouts
assets/projects.js          Structured case-study data and references
assets/site.js              Common renderer, navigation, filters and interactions
assets/headshot.jpg         REQUIRED manual binary upload
assets/Dawson_Gulasa_Resume.pdf   REQUIRED manual binary upload
```

## First-time assets

Upload these two files directly to **`assets/` on the website review branch**, keeping the filenames exactly as shown:

1. `headshot.jpg`: the portrait supplied in the ChatGPT conversation; standard JPEG recommended.
2. `Dawson_Gulasa_Resume.pdf`: the user's current one-page resume.

All other imagery is loaded from public paths in the existing `Dawson-Gulasa/.Projects` repository. Do not upload private internship customer schematics or proprietary data.

## Preview and deploy

1. On the review branch, upload the two files in the previous section and inspect the pages in a local server (`python -m http.server 8000`).
2. Review Pull Request changes and merge into `main`.
3. In **Settings → Pages → Build and deployment**, select **Deploy from a branch**, branch **main**, folder **/(root)**, and **Save**.
4. Open https://dawson-gulasa.github.io/ after GitHub finishes its Pages deployment.

`index.html` is the publishing entry. `.nojekyll` disables unnecessary Jekyll processing.

## Updating projects

Project content lives in `assets/projects.js`; individual case-study pages are accessible at `projects/<slug>.html`. The shared renderer (`assets/site.js`) assembles the home, About, Experience, Projects, Resume and Contact pages. Project image paths point to GitHub's public raw-content host; the repo itself stores no duplicate project images.

Use straightforward, evidence-based descriptions. Original academic results are not claimed as newly verified tests. For changes to media paths or project slugs, check the matching case-study page and link from `projects.html`.

## Design notes

Dark navy/charcoal and soft pastel-red accents, accessible navigation and focus styles, responsive mobile menu, reduced-motion support, and meaningful image descriptions. Fonts are loaded from Google Fonts with local system fallbacks. No forms, API keys, analytics or tracking pixels are included by default.
