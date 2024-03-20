"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name) {
        this.address = { country: "", city: "" }; // not sure how to avoid this initialization
        this.age = -1;
        this.name = name;
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
        if (!this.name) {
            throw Error("Name is required at any cost");
        }
        return this; // Return the object for method chaining
    }
}
// Example usage
const user = new User("John").setAddress("USA", "New York").setAge(30).build();
console.log("******************************");
console.log("Executing builder pattern to initialize user object");
console.log(user);
console.log("******************************");
