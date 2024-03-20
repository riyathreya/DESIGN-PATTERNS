import { Address } from "./interfaces/address";
class User {
  // settings some defaults to avoid typescript issues
  name: string;
  address: Address = { country: "", city: "" }; // not sure how to avoid this initialization
  age: number = -1;

  constructor(name: string) {
    this.name = name;
  }

  setAddress(country: string, city: string) {
    this.address = {
      country,
      city,
    };
    return this;
  }

  setAge(age: number) {
    this.age = age;
    return this;
  }

  build(): User {
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
