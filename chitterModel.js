class ChitterModel {
  constructor() {
    this.peeps = []
  }

  addPeep(peep) {
    this.peeps.push(peep)
  }

  getPeeps() {
    return this.peeps;
  }
}

module.exports = ChitterModel