const bookId = Number(new URL(window.location).toString().split('/')[6]);
let rating;

const getBook = async () => {
    const res = await fetch(`/api/books/${bookId}`);
    const data = await res.json();
    return data.book;
};

const getReviewAndRedirect = async () => {
    const res = await fetch(`/api/reviews/${bookId}`);
    const data = await res.json();
    if (data.review.length) {
        window.location.replace(`http://localhost:8080/reviews/edit/book/${bookId}`);
    }
    return data.review;
}

const getShelves = async () => {
    const res = await fetch('/api/bookshelves/');
    const data = await res.json();
    return data.bookshelves;
}

const populateBookContent = async () => {
    const book = await getBook();

    const header = document.querySelector('.body-header-container__item--text');
    header.innerHTML = `<a class='book-link-header' href='/books/${bookId}'>${book.title}</a> &gt; Review &gt; Edit`;

    const cover = document.querySelector('.book-container__item--cover').src = book.cover;

    const bookTitle = document.querySelector('.book-title__link');
    bookTitle.innerHTML = book.title;
    bookTitle.setAttribute('href', `/books/${book.id}`);

    const authorInfo = document.querySelector('.book-container__text-item--authors');

    let authorStr = book.Authors.map((author) => `${author.firstName} ${author.lastName}`).join(', ');
    authorInfo.innerHTML = `by ${authorStr}`;

};

const populateReviewContent = async () => {
    const review = await getReviewAndRedirect();
    document.querySelector('.review-container__item--content').value = review.content;
    rating = review.rating;
};

const populateCreatedShelves = async () => {
    const bookshelves = await getShelves();
    let shelfStr = '';
    for (const shelf of bookshelves) {
        const bookIds = shelf.Books.map((book) => Number(book.id));
        if (shelf.defaultShelf) {
            const shelfItem = document.getElementById(shelf.name.toLowerCase().split(' ').join('-'));
            shelfItem.value = shelf.id;
            if (bookIds.includes(bookId)) {
                shelfItem.setAttribute('checked', true);
            }
        } else {
            shelfStr += `<li class='created-shelves__list-item created-shelves__list-item--${shelf.name.toLowerCase()}'>
            <label for='${shelf.name.toLowerCase()}'>${shelf.name}</label>`

            if (!bookIds.includes(bookId)) {
                shelfStr += `<input type='checkbox' id='${shelf.name}' name='${shelf.name}'>
                </li>`;
            } else {
                shelfStr += `<input type='checkbox' id='${shelf.name}' name='${shelf.name}' checked>
                </li>`;
            }
        }
    }

    document.querySelector('.shelves__dropdown--created-shelves').innerHTML = shelfStr;
}

document.addEventListener('DOMContentLoaded', event => {
    populateReviewContent();
    populateCreatedShelves();
    populateBookContent();

    const stars = document.querySelector('.stars');
    let clickListener = true;

    const handleStarMouseover = (event) => {
        event.stopPropagation();
        console.log(event.target.id);
        const idNum = event.target.id.split('-')[2];
        if (!/[0-5]$/.test(idNum)) {
            return;
        } else {
            for (let i = 1; i <= idNum; i++) {
                document.querySelector(`#star-path-${i}`).classList.add('star-on');
            }
        }
    }

    const handleStarMouseout = (event) => {
        event.preventDefault();
        console.log(event.target.id);
        const idNum = event.target.id.split('-')[2];
        if (event.target.id === 'star-container') {
            setTimeout(() => {
                for (let i = 1; i <= 5; i++) {
                    document.querySelector(`#star-path-${i}`).classList.remove('star-on');
                }
            }, 200);
        } else {
            for (let i = 5; i >= idNum; i--) {
                document.querySelector(`#star-path-${i}`).classList.remove('star-on');
            }
        }
    }

    stars.addEventListener('mouseover', handleStarMouseover);
    stars.addEventListener('mouseout', handleStarMouseout);

    const handleStarClick = (event) => {
        event.stopPropagation();
        const idNum = Number(event.target.id.split('-')[2]);
        if (!/[0-5]/.test(idNum) || !clickListener) {
            return;
        } else {
            if (clickListener) {
                rating = idNum;
                for (let i = 1; i <= idNum; i++) {
                    document.querySelector(`#star-path-${i}`).classList.add('star-on-permanent');
                }

                stars.removeEventListener('mouseover', handleStarMouseover);
                clickListener = false;
            }
        }
    }

    stars.addEventListener('click', handleStarClick);

    const clearButton = document.querySelector('.clear-rating');
    clearButton.addEventListener('click', event => {
        rating = undefined;
        for (let i = 1; i <= 5; i++) {
            document.querySelector(`#star-path-${i}`).classList.remove('star-on-permanent');
        }

        clickListener = true;
        stars.addEventListener('mouseover', handleStarMouseover);
    });

    document.querySelector('.select-shelves-placeholder').addEventListener('click', event => {
        document.querySelector('.shelve-list-container').classList.toggle('hidden');
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', async event => {
        event.preventDefault();
        const formData = new FormData(form);
        const body = {
            bookId,
            content: formData.get('content'),
            rating
        }
        const res = await fetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const body2 = {};
        for (const key of formData.keys()) {
            if (key !== 'content') {
                body2[key] = formData.get(key);
            }
        }

        const res2 = await fetch(`/api/books/${bookId}`, {
            method: 'POST',
            body: JSON.stringify(body2),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (res.ok && res2.ok) {
            window.location.href = '/my-books'
        }
    });
});