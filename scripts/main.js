document.addEventListener('DOMContentLoaded', function () {
    const parallaxElements = document.querySelectorAll('.parallax');

    window.addEventListener('scroll', function () {
        parallaxElements.forEach(element => {
            let scrolled = window.scrollY;
            let rate = scrolled * 0.5; // Adjust rate as needed

            element.style.transform = `translate3d(0px, ${rate}px, 0px)`;
        });
    });
});

function showSidebar()
{
    const sidebar = document.querySelector(".sidebar")
    const topbar = document.querySelector(".top-bar")
    sidebar.style.display = 'flex'
    topbar.style.display = 'none'
}
function hideSidebar()
{
    const sidebar = document.querySelector(".sidebar")
    const topbar = document.querySelector(".top-bar")
    sidebar.style.display = 'none'
    topbar.style.display = 'flex'
}

window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 130) { // Adjust the value to when you want the color to change
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});
