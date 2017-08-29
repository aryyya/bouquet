# bouquet

## Development

After running `npm install` in both `/client` and `/server`:

```
cd client
npm run dev
```

And in another terminal:

```
cd server
npm run dev
```

The client will run on `http://localhost:8080`, the server will run on `http://localhost:8081`.

## Production

After running `npm install` in both `/client` and `/server`:

```
cd client
npm run build
```

And in another terminal:

```
cd server
npm start
```

The server will run on `http://localhost:8080` and serve the compiled static assets from `/client/dist`.
