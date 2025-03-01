document.addEventListener("DOMContentLoaded", function() {
    fetch("blog/post1.md")
    .then(response => response.text())
    .then(text => {
        document.getElementById("blog-content").innerHTML = marked.parse(text);
    })
    .catch(error => console.error("Error loading blog post:", error));
});