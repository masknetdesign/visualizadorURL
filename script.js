document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const urlInput = document.getElementById('urlInput').value;
    const urlOutput = document.getElementById('urlOutput');
    urlOutput.src = urlInput;
});

document.getElementById('resizeButton').addEventListener('click', function() {
    const urlOutput = document.getElementById('urlOutput');
    if (urlOutput.style.height === '300px') {
        urlOutput.style.height = '450px';
    } else {
        urlOutput.style.height = '300px';
    }
});
