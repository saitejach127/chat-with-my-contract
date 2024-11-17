document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('pdfUpload');
    if (fileInput.files.length > 0) {
        this.style.display = 'none';
        document.getElementById('chatinterface').style.display = 'block';
    }
});

document.getElementById('chatform').addEventListener('submit', function(e) {
    e.preventDefault();
    var tooltip = document.createElement('div');
    tooltip.className = 'tooltip-demo';
    tooltip.innerText = 'This is a demo on how the product could look like';
    tooltip.style.position = 'absolute';
    tooltip.style.top = '50%';
    tooltip.style.right = '50%';
    tooltip.style.backgroundColor = 'black';
    tooltip.style.color = 'white';
    tooltip.style.padding = '5px';
    tooltip.style.borderRadius = '5px';
    document.body.appendChild(tooltip);

    setTimeout(function() {
        document.body.removeChild(tooltip);
    }, 5000);
});