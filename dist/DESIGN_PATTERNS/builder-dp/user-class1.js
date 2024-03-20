"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, address, age) {
        this.name = "";
        this.age = 0;
        this.address = { country: "", city: "" };
        this.name = name;
        this.address = address;
        this.age = age;
    }
}
/*static Builder = class { ... } declares a static property named Builder
 on the User class, and assigns it an anonymous class expression. This allows
  you to define the Builder class directly within the Users class, making it an inner class.
  Inner classes have access to the private members of the outer class, which can be useful in certain design patterns like the Builder Pattern.
*/
User.Builder = class {
    constructor() {
        this.name = "";
        this.age = 0;
        this.address = { country: "", city: "" };
    }
    setName(name) {
        this.name = name;
        return this;
    }
    setAddress(country, city) {
        this.address = {
            country,
            city,
        };
        return this;
    }
    setAge(age) {
        this.age = age;
        return this;
    }
    build() {
        return new User(this.name, this.address, this.age);
    }
};
const user = new User.Builder()
    .setName("Riya")
    .setAddress("India", "Bangalore")
    .setAge(26)
    .build();
console.log("******************************");
console.log("Executing builder pattern to initialize user object. Here, we declare builder class as a sub class of a class and set all propertiesusing builder sub class. Build method will then initialize object of our Product class i.e User Class making use of builder's properties");
console.log(user);
console.log("******************************");
