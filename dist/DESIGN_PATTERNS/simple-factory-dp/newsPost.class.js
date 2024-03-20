"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsPost = void 0;
const post_class_1 = require("./post.class");
// extended class from post base class
class NewsPost extends post_class_1.Post {
    constructor(title, description, time) {
        super(title, description);
        this.timestamp = time;
    }
    display() {
        super.display();
        console.log("Timestamp of news event: ", this.timestamp);
    }
}
exports.NewsPost = NewsPost;
