console.log('Chitter is running')

const ChitterModel = require('./chitterModel')

const model = new ChitterModel();

console.log(model.getPeeps());