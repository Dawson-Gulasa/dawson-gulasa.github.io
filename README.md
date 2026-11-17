# Dawson Gulasa · Engineering Portfolio Website

A standalone, responsive engineering portfolio built with **HTML, CSS and vanilla JavaScript**. Designed for GitHub Pages, with no build step, backend, package manager or paid hosting required.

## Pages

- **Home**: professional introduction, featured hardware projects and engineering experience
- **About**: engineering interests, education, involvement and technical focus
- **Experience**: work history, research, coursework and skills
- **Projects**: filterable catalog of all ten published GitHub engineering projects
- **Resume**: one-page PDF download and professional summary
- **Contact**: direct email, LinkedIn and GitHub links
- **Ten separate project case-study URLs** in `projects/`: engineering problem, design approach, validation, limitations, photos, source and reports

The project content comes from the public `.Projects` repository and the supplied current resume. All course and group metrics are described as original recorded results rather than newly verified measurements. No company-confidential documents are reproduced.

## Personal files

The current headshot and one-page resume are stored at `assets/headshot.jpg` and `assets/resume.pdf`. Keep `assets/resume.pdf` updated when the resume changes.

## Design system

- Dark slate and navy backgrounds
- White typography and muted pastel-red accents
- Technical grid pattern, bordered engineering cards and restrained motion
- Responsive layouts and mobile menu
- Keyboard focus indicators, image descriptions, reduced-motion preference support, semantic headings
- CSS and JavaScript shared across all pages

## Content maintenance

- `assets/js/projects-data.js` is the primary source for project summaries, technical case studies, dates, links, recorded metrics and image paths.
- `assets/js/projects.js` renders project cards, filters and detail-page content.
- `assets/js/main.js` handles navigation and scroll reveal animations.
- `assets/css/style.css` contains the main theme.
- `projects/*.html` supplies an individual URL and metadata for each engineering case study.

Project media and reports are linked directly from the public GitHub source repository. This avoids duplicating large PDFs/figures and makes project maintenance simpler. The two personal assets are stored locally in `assets/` for reliable GitHub Pages delivery.

## Local preview

A static web server is recommended for a complete browser preview:

```bash
python -m http.server 8000
```

Open `http://localhost:8000` in a browser. No dependencies or compilation required. Check mobile width, all navigation links, the GitHub project media, headshot, and PDF.

## Publishing on GitHub Pages

1. Merge the website review PR into `main` **only after inspecting the draft and uploading the two binary assets**.
2. In GitHub, open **Settings → Pages** for `Dawson-Gulasa/dawson-gulasa.github.io`.
3. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/(root)`, then **Save**.
4. Open **https://dawson-gulasa.github.io/** once GitHub Pages shows the deployment URL and status.
5. Check home, project pages, linked media, contact links and PDF download.

This is a GitHub Pages user website. Files merged into `main` are published automatically after successful deployment.

## Updates

- Edit project facts and details in `assets/js/projects-data.js`.
- Replace the resume file in `assets/resume.pdf` when needed.
- Add new case study metadata to `projects-data.js`, create a matching URL under `projects/`, and the projects catalog will pick it up.
- New projects should link to approved public source and media, not proprietary company materials.

© Dawson Gulasa. Site content authored for a personal engineering portfolio; project code/artifacts retain their respective authorship and source permissions.
