const formValue = document.querySelector(".login-form");

formValue.addEventListener("submit", (event) => {
    event.preventDefault();

    const dataValue = new FormData(formValue);
    const formObject = {};

    dataValue.forEach((value, key) => {
        formObject[key] = value
    })
    if (formObject.email === "" || formObject.password === "") {
        alert('Всі поля повинні бути заповнені!');
    } else {
        console.log(formObject);
        formValue.reset();
    }
})
