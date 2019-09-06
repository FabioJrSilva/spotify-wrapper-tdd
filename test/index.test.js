const { expect } = require('chai');

describe('Index', () => {
  context('Module A', () => {
    it('initial test', async () => {
      expect(2 + 3).to.equals(5);
    });
  });
});
