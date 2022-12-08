const msgEl = document.querySelector('#message')

function submitForm() {
    const commandInput = document.querySelector('#name').value;
    if(commandInput.length == 0) {
        msgEl.innerHTML = 'The form needs a command!!'
    } else {
        $.post('/form-submission', {name: commandInput}, function(response) {
            console.log(response)
            msgEl.innerHTML = 'Command submitted!'
        })
    }
}