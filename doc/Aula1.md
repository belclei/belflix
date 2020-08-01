# Imersão React - Aluraflix

Na aula 1, os devs se apresentam:

- Mario Souto (dev Soutinho)
- Juliana Negreiros
- Marco Bruno

## Apresentação do projeto

O projeto que será desenvolvido vai ser a AluxaFlix, que é um site inspiradíssimo no site do NetFlix. As telas são explicadas, e as telas são mostradas na ferramenta de design Figma. O link do projeto é: <https://www.youtube.com/watch?v=-TaHyW4nMtg&feature=youtu.be>

## Geração de logo

O site [font meme](http://fontmeme.com) possui uma ferramenta para geração de logos inspirados em criações famosas, e o Netflix é uma delas. O resultado foram vários logos de BelFlix e TalkFlix.

## [Dicas para utilização do VSCode](https://www.alura.com.br/artigos/visualstudio-code-instalacao-teclas-de-atalho-plugins-e-integracoes)

## Inicio do projeto

Explicam um pouco sobre o `npx`, que serve para executar comandos do gerenciados de pacotes `npm`, de uma maneira que os arquivos necessários para esta execu;ção não permaneçam no computador. Então, o comando para iniciar o projeto é:

``` terminal
npx create-react-app belflix
```

1. Dica:
  
> Para acessar a pasta da área de trabalho, em qualquer sistema operacional, de qualquer pasta do sistema, basta executar `cd Desktop`.

### Remoção dos arquivos desnecessários

Para este projeto, foram removidos os arquivos referentes aos testes, pois não se aplica a este curso.
Também foram removidos os arquivos a seguir, e suas referências:

- App.css
- logo.svg
- servideWorker.js
  
Além disso, o arquivo `App.js` teve todo o conteúdo resetado, sobrando apenas uma `div` dentro dele.

### Executando o projeto

O comando para executar o projeto é `npm start` e ao final da sua execução, no terminal é possível ver a mensagem "Compiled Successfully!"e em seguida 2 links que podem ser acessados para abrir o site. Um deles, inclusive (o que contém o ip da máquina), expõe o site para todos os dispositivos que estiverem conectados na mesma rede.
Útil para aulas presenciais, por exemplo.

### Fazer reset nos estilos padrões do browser

Para isso é necessário substituir o conteúdo de `index.css` por:

``` css
* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

:root {
  --primary: #2A7AE4;
  --black: #000000;
  --blackLighter: #9E9E9E;
  --grayLight: #F5F5F5;
  --grayMedium: #e5e5e5;
  --white: #FFFFFF;
  --frontEnd: #6BD1FF;
  --backEnd: #00C86F;
}

html,
body {
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
}
```

### Fonte

O arquivo acima possui referência a fonte Roboto, que não vem por padrão nos navegadores. O site `Google Fonts` possui um catálogo gigante de fontes para ser utilizado por ti em teus sistemas, inclusive a roboto. Basta clicar na fonte de tua preferência, selecionar os estilos que vai utilizar, e na barra lateral que vai aparecer, selecione `Embed` e copie toda a tag `<link>`. Cole dentro da tag `<head>` do `index.html`.

### Componentes

Quando você cria um componente, ele pode ser incluído no código em formato de `<Tag>`. Isso que foi feito no `App.js` (incluída a tag `<Menu>`), e o componente foi criado em `src/components/Menu`. Dentro desta pasta, o arquivo `index.js` e o css do componente foi colado no arquivo `Menu.css`.
O componente Menu, possui dentro dele um componente de botão, e foi isso que foi criado em seguida. o nome dado foi ButtonLink. Esse componente foi criado genérico, pois se repete em alguns lugares da aplicação. E então foi apresentado o conceito de **props**.

### StyledComponents

Neste momento a aplicação foi parada, a lib foi adicionado à aplicação: `npm install styled-components`. E também foi explicado o funcionamento do package.json (que contém a listagem de todas as dependencias diretas do projeto), e como funciona para portar uma aplicação para outro computador (nunca inclua a pasta `node_modules`; e na pasta onde for rodar a aplicação, é necessário executar `npm install`  para baixar todas as dependências do projeto, recriando a pasta `node_modules`).
Eles explicaram também como criar um componente utilizando Styled Components, que utiliza template string, ou seja, há codificação entre crases.
E então foi criado o componente `src/components/Button`.

### Para não se repetir

No final do vídeo eles deram uma acelerada, e passaram alguns componentes para a gente colar em nosso projeto. Estes componentes seriam apenas repetição de conceitos, por isso eles já nos passaram os componentes prontos.

### Deploy

Para fazer o deploy, o projeto que criamos foi adicionado a um repositório no github. E o deploy em si foi feito utilizando o site da vercel. Basta entrar no site, fazer login utilizando a conta do github mesmo, clicar em `Import Project` e seguir umas poucas instuções, e em seguida o projeto já está no ar. O site ainda permite inúmeras configurações, inclusive direcionando o site para um domínio próprio.

## Por debaixo dos panos

O ponto inicial por onde começa a rodar uma aplicação em React é o arquivo `index.html`. Este arquivo possui uma uma `<div id="root">`. No arquivo `index.js` a div do arquivo html é referenciada, e todo código produzido da transpilação do React é incluída dentro da `<div id="root">`.

## Termos

- Hotload: Quando o código é salvo a automaticamente se reflete no site
- JSX: [J]ava[S]cript [X]ML (A maneira que foi encontrada para escrever código em notação idência ao HTML, mas dentro do Javascript)
