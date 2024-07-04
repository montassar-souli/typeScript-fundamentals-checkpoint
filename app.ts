interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void //{console.log("Engine started");} method in the interface doesn't contain an implementation
}

class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
  }

  start(): void {
      console.log("Car engine started");
  }
}

let car = new Car("Ford", "Mustang", 2024);
car.start();