import { Component, Input, OnInit } from "@angular/core";
import { Post } from "../post.model";
import { PostService } from "../post.service";

@Component({
    selector: "app-post-list",
    templateUrl: "./post-list.component.html",
    styleUrls: ["./post-list.component.scss"]
})
export class PostListComponent implements OnInit {
    // posts = [
    //     { title: "First Post", content: "This is first post's content" },
    //     { title: "Second Post", content: "This is second post's content" },
    //     { title: "Third Post", content: "This is third post's content" },
    // ];
    @Input() posts: Post[] = [];

    constructor(public postService: PostService) {

    }

    ngOnInit() {
        this.postService.getPosts();
        this.postService.getPostUpdateListener().subscribe((posts) => {
            this.posts = posts;
        });
    }
}