// base class which will be extended by our newsPost and productPost classes
export class Post {
  title: string;
  description: string;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }

  display() {
    console.log("Title is -", this.title);
    console.log("Description is -", this.description);
  }
}
