
// document.getElementById=('button', paragraph);
// addEventListener=('paragraph', red);

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('button');
    const paragraph = document.getElementById('paragraph');

    // Adding event listener to the button
    button.addEventListener('click', function() {
        // Changing text content of the paragraph
        paragraph.textContent = "Hello, World!";
    });
});
