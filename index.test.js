const exampleTransmuter = require('./index');

describe('exampleTransmuter', () => {
  it('calls done with arguments', () => {
    const done = jest.fn();
    const file = { ext: '.md' };
    const transmuter = exampleTransmuter();
    transmuter(file, done);
    expect(done).toBeCalledWith({
      content: 'Goodbye world!',
      data: { layouts: 'article.ejs' },
      ext: '.html',
    });
  });
  it('calls done without arguments', () => {
    const done = jest.fn();
    const file = { ext: '.html' };
    const transmuter = exampleTransmuter();
    transmuter(file, done);
    expect(done).toBeCalledWith();
  });
});
