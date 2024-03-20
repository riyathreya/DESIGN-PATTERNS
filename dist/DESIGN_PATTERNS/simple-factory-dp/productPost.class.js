"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPost = void 0;
const post_class_1 = require("./post.class");
class ProductPost extends post_class_1.Post {
    constructor(title, description, cost) {
        super(title, description);
        this.cost = cost;
    }
    display() {
        super.display();
        console.log("Cost of Product is -", this.cost);
    }
}
exports.ProductPost = ProductPost;
