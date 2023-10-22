const navItems = document.querySelectorAll('#navbar a');

navItems.forEach(item => {
    item.addEventListener('click', function() {
        navItems.forEach(item => item.classList.remove('active'));

        item.classList.add('active');
    });
});