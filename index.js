const getFormData = () => {
    const fname = document.querySelector("#fname").value;
    const lname = document.querySelector("#lname").value;
    const fruit = document.querySelector("select").value;
    const language = document.querySelector('input[name="language"]:checked').value;
    const vehicleValues = Array.from(document.querySelectorAll('input[name="vehicle"]:checked'));
    const vehicle = vehicleValues.map((item) => item.value);
    const data = { fname, lname, fruit, language, vehicle };

    return data;
};

const setFormData = (data) => {
    for (const key in data) {
        const singleInput = document.getElementById(`${key}`);
        // если это одиночный инпут, присваиваем ему value
        if (singleInput) {
            // через ключ в квадратных скобках получаем значение свойства объекта (value)
            singleInput.value = data[key];
        } else {
            // если это не одиночный инпут (радио или чекбокс), находим все по name
            const multipleInput = document.querySelectorAll(
                `input[name=${key}]`
            );

            // и бежим по списку найденных элементов циклом
            multipleInput.forEach((item) => {
                // если значение свойства объекта равно value инпута (радио) или включает его (чекбоксы),
                // устанавливаем атрибут checked этого инпута true
                if (
                    item.value === data[key] ||
                    data[key].includes(item.value)
                ) {
                    item.checked = true;
                }
            });
        }
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
