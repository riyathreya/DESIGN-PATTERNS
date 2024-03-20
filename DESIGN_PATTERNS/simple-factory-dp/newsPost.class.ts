import { Post } from "./post.class";

// extended class from post base class
export class NewsPost extends Post {
  timestamp: Date;

  constructor(title: string, description: string, time: Date) {
    super(title, description);
    this.timestamp = time;
  }

  display() {
    super.display();
    console.log("Timestamp of news event: ", this.timestamp);
  }
}
