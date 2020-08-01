# Aula extra de CSS

Esta aula foi gravada pela Juliana Negreiros, para ensinar a parte de estilização, cujo tema foi explicado bastante superficialmente na primeira aula do curso.

## Index.css

O arquivo de estilização global foi recriado. Ele foi utilizado para resetar as estilizações padrões que os navegadores costumam adicionar automaticamente. Seguem explicações:

- Algumas configurações foram adicionadas à todos os elementos que compuserem o nosso site. Elas foram adicionadas dentro de `* {}`;
- `box-sizing: border-box` significa que o tamanho do elemento vai ser exatamente aquele informado em `width` e `height`, independente dos valores de borda, e padding utilizados;
- `font-family`, para informar o tipo da fonte para todos os textos;
- Fora do `*{}`, foram adicionadas variáveis dentro de `:root`, para a referência das cores que for utilizada na aplicação seja a destas variáveis, em vez de repetir o código da cor por todos os arquivos de estilos que isto for necessário.
- Foi configurado também para que a cor do link, na tag `<a>` seja herdada do componente pai.

E assim ficou o código final:

```css
* {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

:root {
  --primary: #2a7ae4;
  --black: #000000;
  --blackLighter: #9e9e9e;
  --grayLight: #f5f5f5;
  --grayMedium: #e5e5e5;
  --white: #ffffff;
  --frontEnd: #6bd1ff;
  --backEnd: #00c86f;
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

## App.js

Dentro deste arquivo, utilizando styled component, foi alterado o background de todo site;

## style.js (`/src/components/Menu`)

O código iniciou assim:

``` javascript
import styled from 'styled-components'
import Button from '../Button'

export const LogoImage = styled.img``;
export const MenuWrapper = styled.nav``;
export const ButtonLink = styled(Button)``;
```

O componente LogoImage recebeu os atributos:

- max-width para controlar o tamanho máximo que o logo pode ter;
- mediaQuery. Entre parenteses há a condição para que os parâmetros sejam aplicados. No caso, o width da tela não pode ser superior a 800px.

MenuWrapper:

- altura fixada em pixels, e largura sempre preenche todo o componente pai;
- A posição foi fixada à 0px do topo e da esquerda;
- Os componentes internos foram alinhados ao centro no eixo horizontal, e separados ao máximo na linha utilizando `space-between`;
- Recebeu uma borda inferior em uma cor diferente do resto do conteúdo;

ButtonLink:

- Configurações normais de borda, arredondamento de borda, cor, fonte, etc;
- Recebeu `text-decoration: none` para remover o comportamento padrão do link, que fica sempre sublinhado;
- Quando recebe foco, ou o mouse está sobre ele, fica 50% opaco, e essa alteração de opacidade demora 0.3 segundos, pelo uso da configuração `transition`;

Ao final desta aula, foi também incluído mediaQuery para os componentes de MenuWrapper e ButtonLink. Então, se o usuário estiver abrindo o site por um celular, por exemplo, o botão troca de cor, perde borda (`border` e `outline`) e também deixa de ser arredondado, além de passar para o bottom da página (utilizando position fixed, com bottom, left e right zerado).
