# React-webpack-boilerplate-lite

If anyone want very lightweight boilerplate similar to create-react-app you can try this repo.

## Usage

1.  `git clone https://github.com/redgitnum/react-webpack-boilerplate.git`
2.  `npm install` to insall dependencies
3.  `npm start` to run live server on port 3000
4.  `npm run build` to build for production

## Supported files

`.html` for index template,
`.css` for styles,
`.png, .jp(e)g, .gif, .svg` for images
`.js` for react components and other files

add more loaders/plugins if needed

### Output folder structure

- /build
  - /js
    - /main.[hash].bundle.css
    - /main.[hash].bundle.css.map
  - /css
    - /styles.[hash].bundle.css
    - /styles.[hash].bundle.css.map
  - /assets
    - /[hash].(jpeg|png|gif|svg)
  - /index.html
