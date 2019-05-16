# Freyja React

This project contains the source code of the freyja-react UI component library.

## Build and publish

Run `npm run build-freyja` to build the library. The build artifacts will be stored in the `dist/` directory.

To publish to npm change directory to `/dist/freyja.bundle.js` bump the version using `npm version patch | minor | major` or by changing it directly in `package.json` and the run `npm publish`.

## Development server

Run `npm run serve` for a dev server. Navigate to `http://localhost:5000/`. The app will automatically reload if you change any of the source files.
