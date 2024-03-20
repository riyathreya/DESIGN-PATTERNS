WE BUILD A COMPLEX OBJECT STEP BY STEP (BAsically split the constructor functionality into various oarts).

IT IS A CREATIONAL DESIGN PATTERN

The Builder pattern is a creational design pattern used to construct complex objects step by step. It allows you to create different types and representations of an object using the same construction code. The main idea behind the Builder pattern is to separate the construction of an object from its representation.

Here's the basic structure of the Builder pattern:

Builder: Defines an interface for creating parts of a product.
Concrete Builder: Implements the Builder interface to construct and assemble parts of the product.
Director: Manages the construction process and interacts with the Builder to construct the product. (optional). We assume client using the class will follow specific steps in creation and he himself plays the role of director
Product: Represents the complex object being constructed.
