var cutPizzaSlices = (numOfSlices, numOfPeople) => {
    let sharePizza = parseFloat(numOfSlices / numOfPeople);
    return `Each person gets ${sharePizza} slices of pizza`;
  }
  var sharePizza = cutPizzaSlices(8, 2);
  console.log(sharePizza)

