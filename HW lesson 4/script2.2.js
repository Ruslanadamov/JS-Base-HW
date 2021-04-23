"use strict"

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit = function (text) {
        this.text = text
    }

}

const post1 = new Post("Руслан", "какой-то текст", new Date())
post1.edit("еще текст");
console.log(post1);


class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date)
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const ABC = new AttachedPost("Андрей", "супер отзыв", new Date());
console.log(ABC);
ABC.makeTextHighlighted();
ABC.edit("много текста");
console.log(ABC);