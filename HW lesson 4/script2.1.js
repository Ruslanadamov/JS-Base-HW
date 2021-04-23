"use strict"

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = function (text) {
    this.text = text
}
const post1 = new Post("Руслан", "какой-то текст", new Date())
post1.edit("еще текст");
console.log(post1);

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = Post;
AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

let ABC = new AttachedPost("Андрей", "супер отзыв", new Date());
console.log(ABC);
ABC.makeTextHighlighted();
ABC.edit("много текста");
console.log(ABC);