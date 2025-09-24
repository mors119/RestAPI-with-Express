#### npm init -y

#### npm i -D typescript ts-node nodemon @type/node

### tsconfig.json

{
"compilerOptions": {
// Node 런타임의 ESM 규칙을 그대로 따르겠다
"module": "NodeNext",
// NodeNext를 쓰면 moduleResolution은 생략하거나 "NodeNext"로
"moduleResolution": "NodeNext",

    "baseUrl": "src",
    "outDir": "dist",
    "sourceMap": true,
    "noImplicitAny": true,

    // ESM에서 DX 좋아지는 옵션들
    "target": "ES2022", // Node 18+ 권장
    "lib": ["ES2022"],

    "strict": true,
    "esModuleInterop": true, // CJS 호환 import 편의
    "skipLibCheck": true,
    "verbatimModuleSyntax": true // TS가 import/export를 임의 변환하지 않음

},
"include": ["src/**/*"]
}

### nodemon.json

{
"watch": ["src"],
"ext": "ts,js",
"exec": "node --loader ts-node/esm --enable-source-maps ./src/index.ts"
}

### package.json

{
"name": "express-type",
"version": "1.0.0",
"main": "dist/index.js",
"type": "module",
"scripts": {
"dev": "nodemon",
"start": "tsx watch src/index.ts",
"build": "tsc",
"start:prod": "node dist/index.js",
"typecheck": "tsc --noEmit"
},
"keywords": [],
"author": "",
"license": "ISC",
"description": "",
"devDependencies": {
"@types/node": "^24.5.2",
"nodemon": "^3.1.10",
"tsx": "^4.20.5",
"typescript": "^5.9.2"
}
}

##### npm run start로 nodemon 없이 변경 적용도 가능 둘 중 하나만 사용하면 됨.

#### npm run start // npm run dev

#### npm i express body-parser cookie-parser compression cors

#### npm i -D @types/express @types/body-parser @types/cookie-parser @types/compression @types/cors

### npm i mongoose

현재 타입 설치는 불필요

#### post test user

{
"email": "1@1.com",
"password": "808",
"username" : "여명"
}

#### npm i lodash

#### npm i -D lodash
