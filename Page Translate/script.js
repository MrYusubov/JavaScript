const englishData = {
    name: "John",
    age: 30,
    city: "New York",
    occupation: "Engineer",
    company: "TechCorp",
    phone: "+1 555 1234",
    email: "john.doe@example.com",
    address: "123 Elm St",
    education: "Bachelor's Degree",
    hobby: "Photography",
    favorite_food: "Pizza",
    favorite_color: "Blue",
    favorite_movie: "Inception",
    favorite_book: "1984",
    language: "English",
    nationality: "American",
    marital_status: "Single",
    has_pets: true,
    children: 0,
    car: "Tesla Model S"
};

const russianData = {
    name: "Джон",
    age: 30,
    city: "Нью-Йорк",
    occupation: "Инженер",
    company: "ТехКорп",
    phone: "+1 555 1234",
    email: "john.doe@пример.com",
    address: "ул. Эльм, 123",
    education: "Степень бакалавра",
    hobby: "Фотография",
    favorite_food: "Пицца",
    favorite_color: "Синий",
    favorite_movie: "Начало",
    favorite_book: "1984",
    language: "Английский",
    nationality: "Американец",
    marital_status: "Не женат",
    has_pets: true,
    children: 0,
    car: "Тесла Модель S"
};

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function populatePage(data) {
    document.getElementById("name").textContent = data.name;
    document.getElementById("occupation").textContent = `Occupation: ${data.occupation}`;
    document.getElementById("company").textContent = `Company: ${data.company}`;
    document.getElementById("address").textContent = `Address: ${data.address}`;
    document.getElementById("email").textContent = `Email: ${data.email}`;
    document.getElementById("phone").textContent = `Phone: ${data.phone}`;
    document.getElementById("favorite_food").textContent = `Favorite Food: ${data.favorite_food}`;
    document.getElementById("favorite_color").textContent = `Favorite Color: ${data.favorite_color}`;
    document.getElementById("favorite_movie").textContent=`Favorite Movie: ${data.favorite_movie}`;
    document.getElementById("favorite_book").textContent=`Favorite Book: ${data.favorite_book}`;
    document.getElementById("language").textContent=`Language: ${data.language}`;
    document.getElementById("nationally").textContent=`Nationally: ${data.nationality}`;
    document.getElementById("martial_status").textContent=`Martial Status: ${data.marital_status}`;
    document.getElementById("has_pets").textContent=`Has Pets: ${data.has_pets}`;
    document.getElementById("children").textContent=`Children: ${data.children}`;
    document.getElementById("car").textContent=`Car: ${data.car}`;
}

const language = getQueryParam("lang") || "en";

if (language === "en") {
    populatePage(englishData);
} else if (language === "ru") {
    populatePage(russianData);
} else {
    populatePage(englishData);
}
