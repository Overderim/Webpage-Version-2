document.getElementById('quoteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('confirmationMessage').classList.remove('hidden');
});

