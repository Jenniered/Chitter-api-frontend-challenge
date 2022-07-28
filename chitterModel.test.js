const ChitterModel = require('./chitterModel')

describe('Chitter front end model class', () => {
  it('initialises with an empty array', () => {
    const model = new ChitterModel();
    expect(model.getPeeps()).toEqual([]);
  })
  it('displays a peep added', () => {
    const model = new ChitterModel();
    model.addPeep('The falafel man is still there')
    expect(model.getPeeps()).toEqual(['The falafel man is still there'])
  })
})