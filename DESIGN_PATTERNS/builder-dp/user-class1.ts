import { Address } from "./interfaces/address";
class User {
  name: string = "";
  age: number = 0;
  address: Address = { country: "", city: "" };

  constructor(name: string, address: Address, age: number) {
    this.name = name;
    this.address = address;
    this.age = age;
  }

  /*static Builder = class { ... } declares a static property named Builder
   on the User class, and assigns it an anonymous class expression. This allows
    you to define the Builder class directly within the Users class, making it an inner class. 
    Inner classes have access to the private members of the outer class, which can be useful in certain design patterns like the Builder Pattern.
  */
  static Builder = class {
    name: string = "";
    age: number = 0;
    address: Address = { country: "", city: "" };

    setName(name: string) {
      this.name = name;
      return this;
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

    build() {
      return new User(this.name, this.address, this.age);
    }
  };
}

const user = new User.Builder()
  .setName("Riya")
  .setAddress("India", "Bangalore")
  .setAge(26)
  .build();

console.log("******************************");
console.log(
  "Executing builder pattern to initialize user object. Here, we declare builder class as a sub class of a class and set all propertiesusing builder sub class. Build method will then initialize object of our Product class i.e User Class making use of builder's properties"
);
console.log(user);
console.log("******************************");
