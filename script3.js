
document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('nav ul li a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 50, 
                behavior: 'smooth'
            });
        });
    });
});
