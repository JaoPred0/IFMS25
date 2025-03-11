document.querySelectorAll('.nav-mobile .icon').forEach(icon => {
    icon.addEventListener('click', function () {
        document.querySelectorAll('.nav-mobile .icon').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});
