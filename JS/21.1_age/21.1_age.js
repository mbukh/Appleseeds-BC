form = document.querySelector("form");
ageField = document.querySelector("#age");

const cleanErrorMessage = () => {
    form.dataset.error = "";
};

const checkAndSubmit = (e) => {
    if (!/^\d{1,3}$/g.test(form.children[0].value)) {
        e.preventDefault();
        form.dataset.error = "a valid age is required";
        setTimeout(cleanErrorMessage, 2000);
        return false;
    }
    if (form.children[0].value < 18) {
        e.preventDefault();
        form.dataset.error = "too young";
        setTimeout(cleanErrorMessage, 2000);
        return false;
    }
    form.submit();
};

form.addEventListener("submit", checkAndSubmit);
