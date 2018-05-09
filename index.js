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
