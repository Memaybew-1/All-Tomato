const btn = document.createElement('button');
btn.id = 'btn-lay';
btn.textContent = 'Click';

document.body.appendChild(btn);

btn.addEventListener('click', () => {
    console.log('Button clicked');
});
