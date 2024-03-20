"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
// base class which will be extended by our newsPost and productPost classes
class Post {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
    display() {
        console.log("Title is -", this.title);
        console.log("Description is -", this.description);
    }
}
exports.Post = Post;
