const {html} = requrie('common-tags');

function book(image, title, author) {
    return html`
        <li class="book-item">
            <div class="book-img">
                <div class="reading-tag"><p><span></span></p></div>
                <img src="${ image }" alt="${ title } ${ author }">
            </div>
            <div class="book-info">
                <p class="book-title">${ title }</p>
                <p class="book-author">${ author }</p>
            </div>
        </li>
    `;
}

MediaSourceHandle.exports = book;