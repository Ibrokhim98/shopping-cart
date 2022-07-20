window.onload = function () {
    const loginForm = document.getElementById('login-form')

    loginForm.onsubmit = async function () {
        const formdata = {}
        formdata.username = document.getElementById('inputUsername').value
        formdata.password = document.getElementById('inputPassword').value

        const response = await fetch(`http://localhost:3000/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formdata),
        });
        const responseData = await response.json();
        if (response.ok) {
            sessionStorage.setItem('accessToken', responseData.accessToken);
            location.href = 'index.html';
        } else {
            alert(responseData.message);
        }
    }
}