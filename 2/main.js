const div = document.createElement('div');
const h2 = document.createElement('h2');
const a = document.createElement('a');
const text = document.createTextNode('Go to profile');

a.setAttribute('href', '#');
a.appendChild(text);
h2.appendChild(a);
div.appendChild(h2);
document.body.appendChild(div);
