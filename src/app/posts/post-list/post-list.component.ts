import { Component } from "@angular/core";

interface Post {
    title: string;
    content: string
}

@Component({
    selector: "app-post-list",
    templateUrl: "./post-list.component.html",
    styleUrls: ["./post-list.component.scss"]
})
export class PostListComponent {
    // posts = [
    //     { title: "First Post", content: "This is first post's content" },
    //     { title: "Second Post", content: "This is second post's content" },
    //     { title: "Third Post", content: "This is third post's content" },
    // ];
    posts: Post[] = [];
}