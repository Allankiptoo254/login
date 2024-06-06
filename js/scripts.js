document.getElementById('openFormBtn').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'flex';
});

document.getElementById('closeFormBtn').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('popupForm')) {
        document.getElementById('popupForm').style.display = 'none';
    }
});
