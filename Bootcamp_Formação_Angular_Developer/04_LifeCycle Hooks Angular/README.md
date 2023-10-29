# Requisitos 

- Node (nodejs.org)

- Visual Studio code
  - Angular Language Service
  - Auto Close Tag
  - Tema (*opcional) Aura Theme
  - Icones (*opcional) Material Icon Theme
  editorConfig, Prettier, eslint
ctrl + shift + p. e alterar setting.json

- Angular
  - npm install -g @angular/cli@14.1.2

para verificar se estar tudo ok: ng help
para habilitar scripst:
execute o power shell como adm e faça, para verificar como estar:
 Get-ExecutionPolicy -List

volte ao terminal do vscode e faça:
npm uninstall -g @angular/cli

depois limpe o cache com : npm cache clean --force

volte ao powe shell e faça:
Set-ExecutionPolicy -ExecutionPolicy remoteSigned -Scope CurrentUser
e
npm install -g @angular/cli@14.1.2

depois faça ng help para verificar se esta tudo ok.

# Criando novo projeto:
no terminal vs code:
ng new life-cycle

# Para roda o projeto
ng serve

#para gerar component completo
ng generate component title
