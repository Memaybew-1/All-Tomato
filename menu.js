const btn = document.createElement('a');
link_um.id = 'link_um';
link_um.textContent = 'Người Um';

document.body.appendChild(link_um);

btn.addEventListener('click', () => {
    console.log('Button clicked');
});
