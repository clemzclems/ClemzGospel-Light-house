// Smooth scrolling for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let pages = document.querySelectorAll(".page");
    let currentPage = 0;

    function showPage(index) {
        pages.forEach((page, i) => {
            page.style.display = i === index ? "block" : "none";
        });
        document.getElementById("dmPageNumber").textContent = index + 1;
    }

    let dmContainer = document.querySelector("#dm-container");

    // Check if buttons already exist before adding them
    if (!document.getElementById("prevPage") && !document.getElementById("nextPage")) {
        let navContainer = document.createElement("div");
        navContainer.innerHTML = `
            <button id="prevPage">Previous</button>
            <span id="dmPageNumber">1</span>
            <button id="nextPage">Next</button>
        `;
        dmContainer.appendChild(navContainer);
    }

    document.getElementById("prevPage").addEventListener("click", function () {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    });

    document.getElementById("nextPage").addEventListener("click", function () {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    });

    showPage(currentPage);
});

// Markdown Blog Loading
document.addEventListener("DOMContentLoaded", function () {
    let currentBlogPage = 1;
    const totalBlogPages = 5; // Adjust based on actual blog content

    async function loadMarkdown(page) {
        try {
            const response = await fetch(`blog/page${page}.md`);
            if (!response.ok) throw new Error("Markdown file not found");

            const markdownText = await response.text();
            document.getElementById("markdownContent").innerHTML = marked.parse(markdownText);
            document.getElementById("blogPageNumber").textContent = page;
        } catch (error) {
            document.getElementById("markdownContent").innerHTML = "<p>Error loading the blog post.</p>";
            console.error(error);
        }
    }

    loadMarkdown(currentBlogPage);

    let blogNavContainer = document.querySelector("#blog-nav");

    if (!document.getElementById("prevBlog") && !document.getElementById("nextBlog")) {
        let blogPagination = document.createElement("div");
        blogPagination.innerHTML = `
            <button id="prevBlog">Previous</button>
            <span id="blogPageNumber">1</span>
            <button id="nextBlog">Next</button>
        `;
        blogNavContainer.appendChild(blogPagination);
    }

    document.getElementById("prevBlog").addEventListener("click", function () {
        if (currentBlogPage > 1) {
            currentBlogPage--;
            loadMarkdown(currentBlogPage);
        }
    });

    document.getElementById("nextBlog").addEventListener("click", function () {
        if (currentBlogPage < totalBlogPages) {
            currentBlogPage++;
            loadMarkdown(currentBlogPage);
        }
    });
});
