const ajax = new XMLHttpRequest();
const NEWX_URL = 'https://api.hnpwa.com/v0/news/1.json';
ajax.open('GET', NEWX_URL, false);
ajax.send();

const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');

console.log(newsFeed);

for (let i = 0; i < 10; i++) {
  const li = document.createElement('li');
  li.innerHTML = newsFeed[i].title;
  ul.appendChild(li);
}

document.getElementById('root').appendChild(ul);
