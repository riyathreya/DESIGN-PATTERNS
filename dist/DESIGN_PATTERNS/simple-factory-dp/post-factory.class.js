"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostFactory = void 0;
const newsPost_class_1 = require("./newsPost.class");
const productPost_class_1 = require("./productPost.class");
// Factory class which instantiates objects of different classes based on  a simple switch based on type input
class PostFactory {
    static createPost(type, title, description, extraInfo) {
        switch (type) {
            case "newsPost":
                return new newsPost_class_1.NewsPost(title, description, extraInfo.time);
            case "productPost":
                return new productPost_class_1.ProductPost(title, description, extraInfo.cost);
            default:
                throw new Error("Type of post undefined");
        }
    }
}
exports.PostFactory = PostFactory;
