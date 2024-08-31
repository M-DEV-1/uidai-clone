grecaptcha.ready(function() {
    grecaptcha.execute('your-site-key', {action: 'submit'}).then(function(token) {
        // Add the token to the form
        var form = document.getElementById('aadhaar-form');
        var input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', 'g-recaptcha-response');
        input.setAttribute('value', token);
        form.appendChild(input);
    });
});