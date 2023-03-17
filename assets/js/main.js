function handleColorChange() {
    var link = document.querySelector('.copyright > a')
    var angles = 0

    setInterval(() => {
        link.style.filter = `hue-rotate(${angles}deg)`
        angles += 20
        if (angles > 360) angles = 0
    }, 500)
}

handleColorChange();
const btnBars = document.querySelector('.btn-bars');
const btnBarsIcon = document.querySelector('.btn-bars i');
const btnBarsMenu = document.querySelector('.nav-tablet');
// console.log(btnBars);
// console.log(btnBarsIcon);
// console.log(btnBarsMenu);
btnBars.onclick = function() {
    btnBarsMenu.classList.toggle('open');
    const isOpen = btnBarsMenu.classList.contains('open');

    btnBarsIcon.classList = isOpen ?
        'fa-solid fa-xmark btn-socials' : 'fa-sharp fa-solid fa-bars btn-socials';

}