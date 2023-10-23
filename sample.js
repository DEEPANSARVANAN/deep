document.getElementById("publish-button").addEventListener("click", function () {
});
document.getElementById("preview-button").addEventListener("click", function () {
    window.open("preview.html", "_blank");
});

const toolbox = document.querySelector('.toolbox');
const formPreview = document.getElementById('form-preview');
const generatedForm = document.getElementById('generated-form');

document.getElementById('Label').addEventListener('click', function() {
    const label = document.createElement('Label');
    label.textContent = 'Label';
    formPreview.appendChild(Label);
});

document.getElementById('Textbox').addEventListener('click', function() {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    formPreview.appendChild(input);
});

document.getElementById('Button').addEventListener('click', function() {
    const button = document.createElement('Button');
    button.textContent = 'Button';
    formPreview.appendChild(Button);
});


document.getElementById('table').addEventListener('click', function() {
    const table = document.createElement('table');
  
    formPreview.appendChild(table);
});
const toolboxCheckbox = document.querySelector('.draggable-checkbox');
const page = document.getElementById('page');

toolboxCheckbox.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', 'checkbox');
});

page.addEventListener('dragover', (e) => {
    e.preventDefault();
});

page.addEventListener('drop', (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    
    if (data === 'checkbox') {
        const newCheckbox = document.createElement('Label');
        newCheckbox.className = 'draggable-checkbox';
        newCheckbox.innerHTML = `
            <input type="checkbox">
             checkbox
        `;
        
        page.appendChild(newCheckbox);
    }
});