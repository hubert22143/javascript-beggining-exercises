function Vehicle(type, wheelsCount) {
    this.type = type;
    this.wheelsCount = wheelsCount;
    return this;
  }
  
  // Function invocation
  const car = new Vehicle('Car', 4);
  car.type; // => 'Car'
  car.wheelsCount // => 4
  car === window // => true
