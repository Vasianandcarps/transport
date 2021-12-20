function Transport(name) {
  this.name = name;
  this.speed = 0;
}
Transport.prototype.about = function () {
  alert(`${this.name}`);
};

function Trasport(name) {
  Transport.apply(this, arguments);
}

function Rocket(name) {
  Transport.apply(this, arguments);
}

Rocket.prototype = Object.create(Transport.prototype);
Rocket.prototype.constructor = Rocket;

Rocket.prototype.about = function () {
  Transport.prototype.about.apply(this);
  alert(`${this.name} I am going to be in space!`);
};

let rocket = new Rocket("Rocket");
//-- PLANE --
function Plane(name) {
  Transport.apply(this, arguments);
}

Plane.prototype = Object.create(Transport.prototype);
Plane.prototype.constructor = Plane;

Plane.prototype.about = function () {
  Transport.prototype.about.apply(this);
  alert(`${this.name}  I am flying !`);
};

let plane = new Plane("Plane");
//--  SHIP --
function Ship(name) {
  Transport.apply(this, arguments);
}

Ship.prototype = Object.create(Transport.prototype);
Ship.prototype.constructor = Ship;

Ship.prototype.about = function () {
  Transport.prototype.about.apply(this);
  alert(`${this.name}  I am sailing !`);
};

let ship = new Ship("Ship");
//-- MOTOR SHIP --
function MShip(name) {
  Transport.apply(this, arguments);
}

MShip.prototype = Object.create(Transport.prototype);
MShip.prototype.constructor = MShip;

MShip.prototype.about = function () {
  Transport.prototype.about.apply(this);
  alert(`${this.name}  I am sailing faster !`);
};

let mship = new MShip("Ship");
//-- CAR --
function Car(name) {
  Transport.apply(this, arguments);
}

Car.prototype = Object.create(Transport.prototype);
Car.prototype.constructor = Car;

Car.prototype.about = function () {
  Transport.prototype.about.apply(this);
  alert(`${this.name}  I am driveing !`);
};
let car = new Car("Car");
//--  BIG CAR --
function BCar(name) {
  Transport.apply(this, arguments);
}

BCar.prototype = Object.create(Transport.prototype);
BCar.prototype.constructor = BCar;

BCar.prototype.about = function () {
  Transport.prototype.about.apply(this);
  alert(`${this.name}  I am carrying aload !`);
};
let bcar = new BCar("Big Car");

let arr = [rocket, plane, ship, mship, car, bcar];
for (let i = 0; i < arr.length; i++) {
  arr[i].about();
}
