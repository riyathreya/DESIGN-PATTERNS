import { NewsPost } from "./newsPost.class";
import { ProductPost } from "./productPost.class";

// Factory class which instantiates objects of different classes based on  a simple switch based on type input
export class PostFactory {
  static createPost(
    type: string,
    title: string,
    description: string,
    extraInfo: any
  ) {
    switch (type) {
      case "newsPost":
        return new NewsPost(title, description, extraInfo.time);

      case "productPost":
        return new ProductPost(title, description, extraInfo.cost);

      default:
        throw new Error("Type of post undefined");
    }
  }
}
