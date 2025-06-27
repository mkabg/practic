//// 1
// function Phone(brand, model)
// {
//     this.brand = brand;
//     this.model = model;

//     this.details = function()
//     {
//         console.log(`Phone: ${this.brand} ${this.model}`);
//     }
// }

// const P = new Phone("Samsung", "S22")
// P.details();

// class phone
// {
//     constructor(brand, model)
//     {
//         this.brand = brand;
//         this.model = model;
//     }

//     details()
//     {
//         console.log(`Phone: ${this.brand} ${this.model}`);
//     }
// }

// const p = new phone("samsung", "s22")
// p.details();

// // 2
// function ractangle(width, hight)
// {
//     this.width = width;
//     this.hight = hight;

//     this.area = function()
//     {
//         return width * hight;
//     }
// }

// const r = new ractangle(10, 15);
// console.log(r.area());

// class Ractangle
// {
//     constructor(width, hight)
//     {
//         this.width = width;
//         this.hight = hight;
//     }

//     area()
//     {
//         return this.width * this.hight;
//     }
// }

// const R = new Ractangle(7, 3);
// console.log(R.area());

// // 3
// function bankAccount(owner, balance)
// {
//     this.owner = owner;
//     this.balance = balance;

//     this.deposit = function(amount)
//     {
//         this.balance += amount;
//     }

//     this.withdraw = function(amount)
//     {
//         if (this.balance > amount)
//         {
//             this.balance -= amount;
//         }
//     }

//     this.checkbalance = function()
//     {
//         console.log(this.balance);
//     }
// }
// const ba = new bankAccount("mordechai", 1000);
// ba.deposit(500);
// ba.checkbalance();
// ba.withdraw(200);
// ba.checkbalance();

// // 4
// function Animal(name)
// {
//     this.Name = name;
// }

// Animal.prototype.Speak = function () 
// {
//     console.log(`${this.Name} makes sound`);
// }

// function Dog(name)
// {
//     Animal.call(this, name);
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.Bark = function ()
// {
//     console.log(`${this.Name} barks`);
// }

// const dog = new Dog("Rocky");
// dog.Speak();
// dog.Bark();

// // 5
// function Vehicle(type)
// {
//     this.Type = type;
// }

// Vehicle.prototype.Describe = function()
// {
//     console.log(`This is a ${this.Type}`);
// }

// function Car(brand)
// {
//     Vehicle.call(this, "car");
//     this.Brand = brand;
// }

// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;

// Car.prototype.Info = function()
// {
//     console.log(`This is a ${this.Brand} ${this.Type}`);
// }

// const car = new Car("BMW");
// car.Describe();
// car.Info();

// // 6
// function Shape(){};

// Shape.prototype.Area = function()
// {
//     return 0;
// }

// function Circle(radius)
// {
//     Shape.call(this);
//     this.Radius = radius;
// }

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

// Circle.prototype.Area = function()
// {
//     return Math.PI * this.Radius ** 2;
// }

// function Square(side)
// {
//     Shape.call(this);
//     this.Side = side;
// }

// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;

// Square.prototype.Area = function()
// {
//     return this.Side ** 2;
// }

// const circle = new Circle(1);
// const square = new Square(4);
// console.log(circle.Area());
// console.log(square.Area());

// // 7
// class Book
// {
//     constructor(title, author)
//     {
//         this.Title = title;
//         this.Author = author;
//     }

//     Info()
//     {
//         console.log(`${this.Title} by ${this.Author}`);
//     }
// }

// const book = new Book("The Hobbit", "Tolkin");
// book.Info();

// // 8
// class Person
// {
//     constructor(name)
//     {
//         this.Name = name;
//     }

//     Greet()
//     {
//         console.log(`Hello, I'm ${this.Name}`);
//     }
// }

// class Student extends Person
// {
//     constructor(name, school)
//     {
//         super();
//         this.Name = name;
//         this.School = school;
//     }

//     Study()
//     {
//         console.log(`${this.Name} is studying at ${this.School}`);
//     }
// }

// const student = new Student("Alice", "Oxford");
// student.Greet();
// student.Study();

// // 9
// class Employee
// {
//     #Salary;
//     constructor(salary)
//     {
//         this.#Salary = salary;
//     }

//     GetSalary = () => this.#Salary;
    
//     Work()
//     {
//         console.log("Employee is working");
//     }
// }

// class Manager extends Employee
// {
//     Work()
//     {
//         console.log("Manager is managing");
//     }
// }

// const employee = new Employee(4000);
// const manager = new Manager(5000);

// console.log(employee.GetSalary());
// employee.Work();
// console.log(manager.GetSalary());
// manager.Work();