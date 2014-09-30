function getRedirectUrl() {
    return document.forms[0].action;
}

window.alert = function() {
    url = getRedirectUrl();

    if(url == "" || url.indexOf("perm-wlc-01.hse.ru/login.html") != -1) {
        url = "https://google.com";
    }

    window.location = url;
}
