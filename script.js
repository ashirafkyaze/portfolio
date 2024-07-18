let sections = document.querySelectorAll('section');
let navLinks =document.querySelector('header nav a');
let menuIcon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx bx-menu');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset =sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id +']').classList.add('active');

            });

            sec.classList.add('show-animate');
        }
        else{
            sec.classList.add('show-animate');

        }

    });  

    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.toggle('bx bx-menu');
    navbar.classList.toggle('active');


    let  footer = document.querySelector('footer');
    footer.classList.toggle('show-animate',this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

}