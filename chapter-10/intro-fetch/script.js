console.log('fetch api');

console.log(1);
console.log(2);
// function that sends request and takes 10 minutes

console.log(10);

const mainContainer = document.querySelector('main');

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => {
//         if (!res.ok) throw Error('Request failed');
//         res.json();
//     })
//     .then((data) =>
//         data.forEach((datum) => {
//             createPost(datum);
//         })
//     )
//     .catch((error) => console.log(error.message));

function createPost(post) {
    const div = document.createElement('div');
    const title = document.createElement('p');
    const content = document.createElement('p');

    title.textContent = post.title;
    content.textContent = post.body;

    div.appendChild(title);
    div.appendChild(content);
    mainContainer.appendChild(div);
}

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'CONTENT-TYPE': 'application/json',
    },
    body: JSON.stringify({ title: 'hello world', body: 'this is the content' }),
})
    .then((res) => {
        if (!res.ok) throw Error('Request failed');
        return res.json();
    })
    .then((data) => {
        console.log(data);
        createPost(data);
    })
    .catch((error) => console.log(error.message));

async function fetchData(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) throw Error('Request failed');
        const data = await res.json();
        data.forEach((datum) => createPost(datum));
    } catch (error) {
        console.log(error.message);
    }
}


fetchData("https://jsonplaceholder.typicode.com/posts")