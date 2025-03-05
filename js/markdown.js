document.addEventListener("DOMContentLoaded", function () {
    const blogContent = document.getElementById("blog-content");
    const links = blogContent.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            const mdFile = this.getAttribute("href");

            fetch(mdFile)
                .then(response => response.text())
                .then(mdText => {
                    blogContent.innerHTML = marked.parse(mdText); // Convert Markdown to HTML
                })
                .catch(error => {
                    console.error("Error loading the Markdown file:", error);
                    blogContent.innerHTML = "<p>Failed to load content.</p>";
                });
        });
    });
});
