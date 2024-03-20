import { Post } from "./post.class";

export class ProductPost extends Post {
  cost: number;

  constructor(title: string, description: string, cost: number) {
    super(title, description);
    this.cost = cost;
  }

  display() {
    super.display();
    console.log("Cost of Product is -", this.cost);
  }
}
