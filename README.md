Create a directory `preptrack` then create two more directories inside this `backend` and `frontend`

Run `cd backend`

Run `npm init -y`

Install Typescript `npm install typescript @types/node --save-dev`

To create `tsconfig.json` file run `npx tsc --init`

Edit `tsconfig.json` file as below:

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "module": "commonjs",
    "target": "es6",
    "esModuleInterop": true,
    "types": [],
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "strict": true,
    "jsx": "react-jsx",
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true
  }
}
```

Edit `script` inside `package.json`

```json
"scripts": {
    "start": "node dist/app.js",
    "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

Build using `npm run build`

Start using `npm start`

---

## Credits

This project was built with guidance from [innoskrit](https://github.com/innoskrit) by [Aakash Verma](https://www.linkedin.com/in/aakashverma1124/), who teaches full stack development and helps in building this interesting interview preparation platform.
