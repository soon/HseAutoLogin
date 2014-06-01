function getRussianLoginForm(doc) {
    var wrapper = doc.getElementById('russian-wrapper');
    return wrapper.getElementsByTagName('form')[0];
}

function getUsernameInput(form) {
    var divUsername = form.getElementsByClassName('login')[0];
    return divUsername.getElementsByTagName('input')[0];
}

function getPasswordInput(form) {
    var divPassword = form.getElementsByClassName('password')[0];
    return divPassword.getElementsByTagName('input')[0];
}

function is405Error() {
    pre = document.getElementsByTagName('pre')[0]
    return pre != null && pre.textContent.match('405') != null
    return false
}

if(is405Error()) {
    history.go()
}
else {
    var form = getRussianLoginForm(document);

    var username = getUsernameInput(form)
    username.value = 'hseguest'

    var password = getPasswordInput(form)
    password.value = 'hsepassword'

    submitAction()
}
