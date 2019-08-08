const exampleTransmuter = options => (file, done) => {
  const { ext } = file;
  if (ext === '.md') {
    return done({
      content: 'Goodbye world!',
      data: { layouts: 'article.ejs' },
      ext: '.html',
    });
  }
  return done();
};

module.exports = exampleTransmuter;
