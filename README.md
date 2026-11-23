<h1 align="center">Portfolio 3D</h1>

<p align="center">My personal coding portfolio: an interactive 3D scene where each project is a Blender-modeled "charm" you can click to learn more. Built with React Three Fiber, with a small Express backend that powers the contact form.</p>

## Links

- [Deployment](https://patricklangcoding.onrender.com/)
- [Repo](https://github.com/patricklang87/portfolio_3D_new)

## Project structure

```
├── server.js          # Express server: serves dist/ and mounts the API
├── routes/api/mail.js # POST /api/mail — sends contact form messages via Gmail (Nodemailer + OAuth2)
├── dist/              # Production build of the client, served by server.js (committed; Render serves it as-is)
└── client/            # Vite + React + React Three Fiber front end
    └── src/
        ├── Three/       # 3D scene: terrain, models, lighting, camera
        └── Components/  # Page sections (Hero, Projects, About, Skills, Contact…)
```

Project cards are defined in `client/src/Components/Projects/projectsState.js`.

## Run the project

1. Install dependencies:
   ```bash
   npm install
   npm install --prefix client
   ```
2. To use the contact form, create a `.env` file in the root with Gmail OAuth2 credentials:
   ```
   MAIL_USERNAME=
   OAUTH_CLIENTID=
   OAUTH_CLIENT_SECRET=
   OAUTH_REFRESH_TOKEN=
   ```
3. Start the client dev server (`npm run dev --prefix client`) for front-end work, or `npm start` to run the Express server on port 4000 with the built site.

## Deploy

Render runs `server.js` and serves the committed `dist/` folder. After changing the client, rebuild and commit `dist/`:

```bash
npm run build
```

## Run the tests

```bash
npm test
```

- **Server** (Jest + Supertest): the `/api/mail` route builds the right email and reports success or failure.
- **Client** (Jest + React Testing Library): contact form validation, sending, and success and error states, plus a check that every project card has the data it needs.

Tests run on every push and pull request via GitHub Actions.

## 3D models

The `.glb` files in `client/src/assets/models` are compressed with [glTF Transform](https://gltf-transform.dev/) (meshopt geometry compression, WebP textures). `Model.jsx` registers three.js's bundled meshopt decoder so the loader can read them.

To add or replace a model, export it from Blender as `.glb` and compress it:

```bash
npx @gltf-transform/cli@4.5.1 optimize input.glb client/src/assets/models/output.glb --compress meshopt --texture-compress webp --texture-size 1024 --simplify false --instance false
```

`--simplify false` and `--instance false` keep the geometry exactly as exported. Simplification and GPU instancing both visibly broke the dome on `capitol.glb`.

## Built with

- JavaScript, HTML, CSS
- React, Vite
- React Three Fiber / Three.js, Blender
- Node, Express, Nodemailer
- Jest, React Testing Library, Supertest

## Author

**Patrick Lang**

- [Profile](https://github.com/patricklang87 "Patrick Lang")
- [Email](mailto:patricklang87@gmail.com?subject=portfolio_3D "portfolio 3D")
