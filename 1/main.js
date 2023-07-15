const div = document.createElement('div');
const btn = document.createElement('button');

div.setAttribute('id', 'myId');
btn.setAttribute('id', 'myBtn');
btn.textContent = 'button'; 
div.append(btn);
document.body.append(div);

btn.addEventListener('click', (e) => {
    div.remove();
});


