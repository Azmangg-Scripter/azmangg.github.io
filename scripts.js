document.addEventListener("DOMContentLoaded", function() {
    const videoItems = document.querySelectorAll(".video-item");

    videoItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.transform = "scale(1.05)";
            item.style.transition = "transform 0.3s ease";
        });

        item.addEventListener("mouseout", () => {
            item.style.transform = "scale(1)";
        });
    });

    // Daha fazla animasyon eklemek için burada JavaScript kullanabilirsiniz
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#000';
            header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.backgroundColor = '#1f1f1f';
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
        }
    });
});
