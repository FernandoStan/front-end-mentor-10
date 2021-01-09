function toggle() {
    var ul = document.getElementById('ul');
    var menu = document.getElementById('menu');
    var fechar = document.getElementById('fechar');

    fechar.classList.toggle('hidden')
    menu.classList.toggle('hidden');
    ul.classList.toggle('active');
}