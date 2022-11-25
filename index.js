const getFormData = () => {
    const fname = document.querySelector("#fname").value;
    const lname = document.querySelector("#lname").value;
    const fruit = document.querySelector("select").value;
    const language = document.querySelector(
        'input[name="fav_language"]:checked'
    ).value;
    const vehicleValues = Array.from(
        document.querySelectorAll('input[name="vehicle"]:checked')
    );
    const vehicles = vehicleValues.map((item) => item.value);
    const data = { fname, lname, fruit, language, vehicles };

    return data;
};

const setFormData = (data) => {
    for (const key in data) {
        document.getElementById(`${key}`).value = data[key];
    }
};

const saveDataToLS = (e) => {
    e.preventDefault();
    const data = getFormData();

    localStorage.setItem("formData", JSON.stringify(data));
};

const getDataFromLS = (key) => {
    return localStorage.getItem(key);
};

const formData = JSON.parse(getDataFromLS("formData"));

setFormData(formData);

console.log(formData);
