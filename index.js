function produceDrivingRange(blocks){
  return function(street1, street2){
    route = Math.abs(parseInt(street1) - parseInt(street2))
    if(route > blocks){
      return `${route - blocks} blocks out of range`
    } else {
      return `within range by ${blocks - route}`
    }
  }
}

function produceTipCalculator(p){
  return function(bill){
    return p * bill
  }
}

function createDriver(){
  let driverId = 0
  class {
    this.id = ++driverId
  }
}
