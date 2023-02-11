let text = document.getElementById('text');
let data = document.getElementById('data');
let limit = 150;
data.textContent = 0 + "/" + limit;
text.addEventListener('input', () => {
    let textLength = text.value.length;
    data.textContent = textLength + "/" + limit;
    if (textLength == limit) {
        text.style.borderColor = 'red';
        data.style.color = 'red';
    }
    else {
        text.style.borderColor = 'black';
        data.style.color = 'black';
    }
});