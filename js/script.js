// Smooth scrolling for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Digital Magazine Pagination
let currentPage = 1;
const pages = document.querySelectorAll('.page');

function updatePages() {
    pages.forEach((page, index) => {
        page.classList.toggle('active', index + 1 === currentPage);
    });
}

document.getElementById('prevPage').addEventListener('click', function () {
    if (currentPage > 1) {
        currentPage--;
        updatePages();
    }
});

document.getElementById('nextPage').addEventListener('click', function () {
    if (currentPage < pages.length) {
        currentPage++;
        updatePages();
    }
});

updatePages();

// Markdown Blog Loading
async function loadMarkdown(file) {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error("Markdown file not found");

        const markdownText = await response.text();
        document.getElementById('markdown-container').innerHTML = marked.parse(markdownText);
    } catch (error) {
        document.getElementById('markdown-container').innerHTML = "<p>Error loading the blog post.</p>";
    }
}
