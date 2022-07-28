/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const { isTypedArray } = require('util/types');
const View = require('./view');

describe('chitter View', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays a title', () => {
    const view = new ChitterView();
    expect(document.querySelector(('h1').innerText)).toBe("Welcome to Chitter")

  })
})