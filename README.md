# Areberebe — Wedding Organizer (Website)

This repository contains the Areberebe Wedding Organizer website, a React application focused on spiritual wedding planning services. The site supports English and Amharic translations and includes pages for Home, Services, About, Contact, and a Gallery component.

Key features
- Multi-language support (English / Amharic) using `react-i18next`
- Responsive navigation with language switcher
- Pages: Home, Services, About, Contact, Gallery
- Reusable components for Footer, Navbar, Gallery, Forms

Quick start
1. Install dependencies
```bash
npm install
```
2. Run the development server
```bash
npm start
```
Open http://localhost:3000

Build for production
```bash
npm run build
```

i18n / translations
- English translations are in `src/i18n/locales/en/translation.json`
- Amharic translations are in `src/i18n/locales/am/translation.json`
- To add or update translations, edit these files and keep keys consistent across locales.

Adding gallery media
- Add images to `src/assets/images/weddings` and videos to `src/assets/videos`.
- The `Gallery` component reads `images` and `videos` props — you can provide media data from a page or API.

Git & deployment
- Initialize the repo and push to GitHub (example):
```bash
git init -b main
git add -A
git commit -m "Initial commit: Areberebe website"
git remote add origin https://github.com/<your-username>/areberebe-wedding-organizer.git
git push -u origin main
```

Contributing
- Open a branch for your changes: `git checkout -b feat/my-change`
- Commit logically and create a pull request for review.

Notes
- This project was bootstrapped with Create React App.
- If you plan to deploy, configure environment variables and adjust build settings as needed.

License
- Add a license file if you intend to open-source this project.

Contact
- For questions or help updating translations, open an issue or contact the maintainer.

Screenshots
--
Add screenshots to the `docs/` folder and reference them here. Example:

![Home page](docs/home.png)

Deployment
--
You can deploy the site to GitHub Pages, Vercel, or Netlify.

- GitHub Pages (using `gh-pages`):

```bash
npm install --save-dev gh-pages
# add to package.json:
# "homepage": "https://<your-username>.github.io/areberebe-wedding-organizer",
# and scripts: "predeploy": "npm run build", "deploy": "gh-pages -d build"
npm run deploy
```

- Vercel: Install the Vercel CLI and run `vercel` in the project root, or connect the GitHub repo in the Vercel dashboard.

Contributing
--
- Fork the repo and create a feature branch: `git checkout -b feat/describe-change`
- Commit changes with clear messages and open a Pull Request for review.
- Keep translations in sync: add new keys to both `en` and `am` locale files.

License
--
This project does not include a license file yet. If you want to open-source it, add a `LICENSE` file (for example, MIT):

```
MIT License
Copyright (c) YEAR Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
```


