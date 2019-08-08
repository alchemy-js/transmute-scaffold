# Transmute Scaffold
Transmuter Scaffold for the [Alchemy static site generator](https://github.com/alchemy-js/alchemy).

This read me can serve as a sort of template for future transmuters. Please see other transmuters for examples and ideas on documentation.

- List what it does here

## Installation
`npm i @alchemy/transmute-scaffold`

## API
Describe your API here, usually it's a wrapper around another node_module.

```javascript
const Alchemy = require('@alchemy-js/alchemy');
const scaffold = require('@alchemy-js/transmute-scaffold');

Alchemy({
  /* file paths */
}).clean()
  .transmute(scaffold({
    /* comments and examples here if applicable */
  })
  .build()
```

## License
MIT
