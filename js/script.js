document.addEventListener("DOMContentLoaded", function () {
    const pagesContainer = document.getElementById("pages");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;

    // Create 25 pages dynamically
    for (let i = 1; i <= 25; i++) {
        let page = document.createElement("div");
        page.classList.add("page");
        page.textContent = `Page ${i}`;
        pagesContainer.appendChild(page);
    }

    // Navigation Function
    function updatePage() {
        let offset = -currentIndex * 100;
        pagesContainer.style.transform = `translateX(${offset}vw)`;
    }

    nextBtn.addEventListener("click", function () {
        if (currentIndex < 24) {
            currentIndex++;
            updatePage();
        }
    });

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updatePage();
        }
    });
});
