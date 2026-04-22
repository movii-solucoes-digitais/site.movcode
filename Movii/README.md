# movii

Landing page institucional organizada em HTML, CSS e JavaScript puro.

## Estrutura

```text
.
|-- index.html
|-- assets
|   |-- css
|   |   |-- base.css
|   |   |-- layout.css
|   |   |-- components.css
|   |   |-- sections.css
|   |   `-- responsive.css
|   |-- js
|   |   |-- config.js
|   |   |-- hero.js
|   |   |-- navigation.js
|   |   |-- scroll-reveal.js
|   |   |-- carousel.js
|   |   `-- contact-form.js
|   `-- images
|       |-- icons
|       |-- logos
|       `-- projects
|-- .editorconfig
`-- .gitignore
```

## Onde editar

- Conteúdo da página: `index.html`
- Estilos globais: `assets/css/base.css`
- Layout fixo e estrutura: `assets/css/layout.css`
- Componentes reutilizáveis: `assets/css/components.css`
- Seções da landing page: `assets/css/sections.css`
- Regras responsivas: `assets/css/responsive.css`

## JavaScript

- Configurações centrais: `assets/js/config.js`
- Hero e animações de digitação: `assets/js/hero.js`
- Navegação e ano dinâmico: `assets/js/navigation.js`
- Aparição ao rolar: `assets/js/scroll-reveal.js`
- Carrossel de serviços: `assets/js/carousel.js`
- Formulário e fallback para WhatsApp: `assets/js/contact-form.js`

## Configuração do formulário

Edite `assets/js/config.js` e substitua:

- `SEU_PUBLIC_KEY`
- `SEU_SERVICE_ID`
- `SEU_TEMPLATE_ID`
- `5516000000000`

Enquanto isso não for configurado, o formulário continua usando o fallback para WhatsApp.
