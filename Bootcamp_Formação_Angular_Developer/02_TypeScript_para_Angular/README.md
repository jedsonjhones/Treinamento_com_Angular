npm init -y   
npm install typescript -d
npx tsc src/index.ts (isso isso para rodar)
npx tsc --init {
no ts.config ative:
"rootDir": "./src",    
"outDir": "./build", }
npx tsc (passe a usar isso para rodar mais facilmente)

para rodar mais facilmente ainda:
no seguinte trecho do package.json:
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
adcione: "start": "npx tsc && node build/index.js",

ficando assim:
  "scripts": {
    "start": "npx tsc && node build/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
depois para rodar basta usar o: npm run start


Para cria um servido que entende TS, e facilar para rodar faça:
npm install ts-node-dev -D
e adcione a seguinte linha no pack.json, no mesmo local anterior:
"start:dev": "ts-node-dev --respawn --transpile-only src/index.ts",

depois pode roda com npm run start:dev



                               

