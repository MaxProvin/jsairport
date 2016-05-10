'use strict'

function Airport(){
  this._hangar = []
}

Airport.prototype.planes = function(){ return this._hangar }

Airport.prototype.clearForLanding = function(plane) {
  this._hangar.push(plane)
}

Airport.prototype.clearForTakeOff = function(plane, weather) {
  if( weather.isStormy() === true) { throw Error("Plane can't take off in Stormy weather")}
  this._hangar = []
}
