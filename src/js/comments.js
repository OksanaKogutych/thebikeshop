export default class Comments {
    constructor(idBlock) {
        this.idBlock = document.getElementById(idBlock);

    }

    getAllComments() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => { return response.json() })
            .then(data => {
                data.forEach(element => {
                    if (element.id <= 3) {
                        return this.printComment(element);
                    }

                })
            })
    }


    printComment({ name, email, body }) {

        const div = document.createElement('div');
        div.className = 'comments__item';
        const p = document.createElement('p');
        div.innerHTML = `<div class="comments__user-name">    
    <h2>${name}</h2></div>
    <div class="comments__email"><a href="email:${email}">${email}</a></div>
    <div class="comments__text"><p>${body}</p></div>`
        this.idBlock.append(div)

    }

    init() {
        document.addEventListener('DOMContentLoaded', this.getAllComments());
    }
}