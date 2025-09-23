console.log('hello world');

// retrieve single elements

const headline = document.querySelector('h1');
console.log(headline);

const gallery = document.getElementById('gallery');

const subtitle = document.querySelector('h2');

const secondImage = gallery.querySelector('[data-id="2"]');

const newsLetterForm = document.getElementById('newsletter-form');

headline.style.fontFamily = 'serif';

// subtitle.hidden = true;

// headline.remove();

console.log(secondImage);

// retrieve multiple elements

const cards = document.getElementsByClassName('card');
console.log(
    (cards[0].childNodes[1].src =
        'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0JTIwYXJ0fGVufDB8fDB8fHww')
);

const images = document.querySelectorAll('img');

// create an element

const newCard = document.createElement('div');
newCard.classList.add('card');
const newImg = document.createElement('img');
const newPara = document.createElement('p');
newImg.dataset.id = cards.length + 1;

newImg.src =
    'https://upload.wikimedia.org/wikipedia/commons/1/16/Heroic_Roses.JPG';
newPara.textContent = 'Lorem Ipsum';
console.log(newImg);
console.log(newPara);
console.log(newCard);

newCard.appendChild(newImg);
newCard.appendChild(newPara);
gallery.appendChild(newCard);

for (const card of cards) {
    card.style.backgroundColor = 'lightseagreen';
}

images.forEach((img) => {
    img.src =
        'https://images.unsplash.com/photo-1501423206691-be43ae609491?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0JTIwYXJ0fGVufDB8fDB8fHww';
});

const colorArray = ['green', 'red', 'blue', 'yellow', 'purple'];

headline.onclick = () => {
    headline.style.color =
        colorArray[Math.floor(Math.random() * colorArray.length)];
};

headline.onclick = () => {
    headline.style.fontSize = '50px';
};

subtitle.addEventListener('click', () => {
    subtitle.style.textTransform = 'uppercase';
});

subtitle.addEventListener('click', () => {
    images.forEach((img) => img.remove());
});

images.forEach((img) => {
    img.addEventListener('click', () => {
        img.classList.toggle('active');
    });
});

gallery.addEventListener('click', (event) => {
    console.log(event.target);
    // console.log(event.currentTarget);

    if (event.target.matches('img')) {
        console.log(event.target.dataset.id);
    }
});

newsLetterForm.addEventListener('input', (event) => {
    event.preventDefault();
    console.log(newsLetterForm.elements[1].value);
    console.log(newsLetterForm.elements.email.value);
    // console.log(event.target.elements[1].value);
});

newsLetterForm.elements.email.addEventListener('change', (e) => {
    console.log(e.target.value);
});
