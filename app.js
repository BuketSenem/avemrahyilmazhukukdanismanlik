function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}
document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');

    dropdown.addEventListener('click', function() {
        this.classList.toggle('clicked');
    });

    // Sayfa dışında bir yere tıklanırsa dropdown'ı kapat
    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('clicked');
        }
    });
});