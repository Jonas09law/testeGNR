
document.getElementById('reportForm').addEventListener('submit', function(event) {
    const form = event.target;
    let isValid = true;


    form.querySelectorAll('input[required], textarea[required]').forEach(function(input) {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });


    const fileInput = document.getElementById('fotos');
    if (fileInput.files.length === 0) {
        isValid = false;
        fileInput.classList.add('error');
    } else {
        fileInput.classList.remove('error');
    }

    if (!isValid) {
        event.preventDefault();
    }
});
