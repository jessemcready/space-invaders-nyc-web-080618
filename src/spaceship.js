class Spaceship {
  constructor(vessel, crew, phasers, shields) {
    this.name = vessel
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"
    if (this.crew.length > 0) {
      this.docked = false
      for (let elem of this.crew) {
        elem.currentShip = this
      }
    } else {
      this.docked = true
    }
  }
}
