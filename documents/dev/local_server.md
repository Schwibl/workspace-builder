# Local server

```bash
npm install
npm run dev
```

The dev script binds `0.0.0.0:4317` so it is not on 3000, 5173, or 8080. `allowedDevOrigins` includes `127.0.0.1` and `localhost`, otherwise Next.js treats that host as cross-origin and the page never hydrates.

Then open http://127.0.0.1:4317

`npm run build` and `npm start` use the same port.

No `.env` file is required. The catalog is compiled in, and the rental route does not call an outside service.
