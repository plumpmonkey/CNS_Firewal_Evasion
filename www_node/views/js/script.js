const msgEl = document.querySelector('#message')

function submitForm() {
    const userNameInput = document.querySelector('#name').value;
    if(userNameInput.length == 0) {
        msgEl.innerHTML = 'The form needs a command!!'
    } else {
        $.post('/form-submission', {name: userNameInput}, function(response) {
            console.log(response)
            msgEl.innerHTML = 'Command submitted!'
        })
    }
}