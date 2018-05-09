function produceDrivingRange(blocks){
  return function(street1, street2){
    route = Math.abs(parseInt(street1) - parseInt(street2))
    if(route > blocks){
      `${route - blocks} out of range`
    } else {
      `within range by ${blocks - route}`
    }
  }
}
