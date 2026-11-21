<h1 align="center">Portfolio 3D</h1>

<p align="center">A website for hosting my other Webdev projects. Taken as an opportunity to experiment with the React Three Fiber library.</p>

## Links

- [Deployment](https://patricklangcoding.onrender.com/)
- [Repo](https://github.com/patricklang87/portfolio_3D_new)

## 3D models

The `.glb` files in `client/src/assets/models` are compressed with [glTF Transform](https://gltf-transform.dev/) (meshopt geometry compression, WebP textures). `Model.jsx` registers three.js's bundled meshopt decoder so the loader can read them.

To add or replace a model, export it from Blender as `.glb` and compress it:

```bash
npx @gltf-transform/cli@4.5.1 optimize input.glb client/src/assets/models/output.glb --compress meshopt --texture-compress webp --texture-size 1024 --simplify false --instance false
```

`--simplify false` and `--instance false` keep the geometry exactly as exported. Simplification and GPU instancing both visibly broke the dome on `capitol.glb`.


## Built with

- JavaScript
- Node
- NPM
- HTML
- CSS
- React
- React Three Fiber
- Nodemailer
 
## Author

**Patrick Lang**

- [Profile](https://github.com/patricklang87 "Patrick Lang")
- [Email](mailto:patricklang87@gmail.com?subject=portfolio_3D "portfolio 3D")
