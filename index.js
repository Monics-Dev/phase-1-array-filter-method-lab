function findMatching(drivers,stringarg){
return drivers.filter(function (driver) { return driver.toLowerCase() === stringarg.toLowerCase() })
  }
  function fuzzyMatch(drivers,stringarg){
    return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, stringarg.length) === stringarg.toLowerCase() })
  }
  function matchName(drivers, argument) {
    return drivers.filter(function (driver) { return driver.name === argument })
  } 