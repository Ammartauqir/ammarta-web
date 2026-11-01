# Frontend

React (CRA) portfolio UI for [www.ammarta.com](https://www.ammarta.com).

Deployed on **Vercel** with Root Directory `frontend`.

```bash
npm install
npm start      # http://localhost:3000
npm run build  # production build → build/
```

API base URL is configured in `src/config/api.js` (localhost in dev, Render in production).

See [LOCAL_SETUP.md](LOCAL_SETUP.md) and the [repo root README](../README.md).

## Portfolio design

The site combines a navy/mint technical homepage, warm ivory research pages,
and a synthetic visible/thermal comparison in the Observatory. Main routes:
`/research`, `/projects`, `/projects/:slug`, `/about`, `/blog`, `/contact`,
and `/sandbox`. Existing blog URLs are preserved.

- Edit profile, projects, research interests, and experience in
  `src/data/portfolio.js`. Keep quantitative claims and personal contributions
  supported by source material. Publication entries remain in `AboutPage.jsx`
  as supplied in the original profile; verify full citations before applications.
- `src/App.css` owns design tokens, responsive layouts, motion, and print styles.
  A shared theme provider persists the light/dark preference. Reduced-motion
  preferences disable reveal/transition effects.
- `/about#cv` offers browser print/save-as-PDF for the current web profile;
  it is not a newly authored academic CV document.
- The native **Portfolio guide** is a deterministic, source-linked guide built
  from site content (`services/portfolioGuide.js`). Questions stay in browser
  memory; the guide makes no external model calls and clears on reload.
  It is explicitly labeled as non-generative. The separate, existing Hugging
  Face AI résumé chat remains available through its own link; its model,
  availability, and data handling are separate from this frontend.
- Observatory artwork is procedural SVG, explicitly synthetic. Replace it
  with properly aligned, permitted sensor images for a real comparison.
- Contact and interest-list forms use the existing Flask API, with timeouts,
  duplicate-submit protection, and accessible response messages. Joining the
  interest list does not promise an automated newsletter delivery workflow.

Run `CI=true npm test -- --watchAll=false --runInBand` for guide, sensor-slider,
and mocked form-flow regression checks. Jest mappings bridge CRA's older test
resolver to React Router 7's published CommonJS entry points.
