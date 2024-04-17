const selection = new Set();

function toggleCategory(button) {
    const categoryName = button.textContent;
    const continueBtn = document.getElementById('continue-btn');
    const confirmBtn = document.getElementById('confirm-btn');

    if (button.classList.contains('active')) {
        selection.delete(categoryName);
        button.classList.remove('active', 'btn-success');
    } else {
        selection.add(categoryName);
        button.classList.add('active', 'btn-success');
    }

    confirmBtn.disabled = selection.size === 0;
    continueBtn.disabled = selection.size > 0;
    confirmBtn.classList.toggle('btn-warning', selection.size > 0);
    continueBtn.classList.toggle('btn-danger', selection.size > 0);
}

function confirmSelection() {
    const selected = Array.from(selection).join(', ');
    alert(selection.size > 0 ? `Categories Selected: ${selected}` : 'No categories have been selected.');
}

function continueWithoutCategories() {
    alert('Continuing without selecting categories.');
}

document.addEventListener('DOMContentLoaded', function() {
    const confirmBtn = document.getElementById('confirm-btn');
    const continueBtn = document.getElementById('continue-btn');

    confirmBtn.onclick = confirmSelection;
    continueBtn.onclick = continueWithoutCategories;
});
