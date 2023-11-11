document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const container = document.getElementById('container');
    const menuButton = document.getElementById('menu');
    const links = document.querySelectorAll('a[href^="#"]');

    //Function buat scroll2

    function handleScroll(){
        container.classList.remove('menu-open');
        header.classList.toggle('stick', window.scrollY >= 100);
    }

    //Function buat menu button pas di klik
    function handleMenuButtonClick(){
        header.classList.remove('stick');
        container.classList.toggle('menu-open');
    }

    //function buat anchor link di klik
    function handleLinkClick(event){
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if(targetElement){
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    // Function buat nutup menu pas diklik di luar ama munculin class stick
    
    function handleCloseOutside(event){
        if(!menuButton.contains(event.target)){
            //ngecek yang diklik tuh bukan menu button
            container.classList.remove('menu-open');
            header.classList.add('stick');
        }
    }

    window.addEventListener('scroll', handleScroll);
    menuButton.addEventListener('click', handleMenuButtonClick);
    links.forEach(link => link.addEventListener('click', handleLinkClick));

    // buat nutup menu pas diklik di luar
    document.addEventListener('click', handleCloseOutside);
});