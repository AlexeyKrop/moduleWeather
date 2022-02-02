"use strict";
const input = document.querySelector("input");
const getData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => reject(error));
  });
};
const renderWeather = (obj) => {
  document.querySelector(".city").innerHTML = obj.name;
  document.querySelector(".temp").innerHTML = obj.main.temp;
  document.querySelector(".humidity").innerHTML = obj.main.humidity;
  document.querySelector(".wind").innerHTML = obj.wind.speed;
  if (obj.main.humidity > 91) {
    document.querySelector(".weather").style.backgroundImage =
      "url(./image/rain.png)";
  }
  if (obj.main.humidity > 80 && obj.main.temp < 0) {
    document.querySelector(".weather").style.backgroundImage =
      "url(./image/snow.png)";
  }
  if (obj.main.humidity < 50 && obj.wind.speed < 2) {
    document.querySelector(".weather").style.backgroundImage =
      "url(./image/sunny.png)";
  }
  if (obj.main.temp > 5 && obj.wind.speed < 2) {
    document.querySelector(".weather").style.backgroundImage =
      "url(./image/sunny.png)";
  }
};
const createOption = () => {
  const weather = document.getElementById("weather"),
    arrCity = [
      "Абакан",
      "Азов",
      "Александров",
      "Алексин",
      "Альметьевск",
      "Анапа",
      "Ангарск",
      "Анжеро-Судженск",
      "Апатиты",
      "Арзамас",
      "Армавир",
      "Арсеньев",
      "Артем",
      "Архангельск",
      "Асбест",
      "Астрахань",
      "Ачинск",
      "Балаково",
      "Балахна",
      "Балашиха",
      "Балашов",
      "Барнаул",
      "Батайск",
      "Белгород",
      "Белебей",
      "Белово",
      "Белогорск (Амурская область)",
      "Белорецк",
      "Белореченск",
      "Бердск",
      "Березники",
      "Березовский (Свердловская область)",
      "Бийск",
      "Биробиджан",
      "Благовещенск (Амурская область)",
      "Бор",
      "Борисоглебск",
      "Боровичи",
      "Братск",
      "Брянск",
      "Бугульма",
      "Буденновск",
      "Бузулук",
      "Буйнакск",
      "Великие Луки",
      "Великий Новгород",
      "Верхняя Пышма",
      "Видное",
      "Владивосток",
      "Владикавказ",
      "Владимир",
      "Волгоград",
      "Волгодонск",
      "Волжск",
      "Волжский",
      "Вологда",
      "Вольск",
      "Воркута",
      "Воронеж",
      "Воскресенск",
      "Воткинск",
      "Всеволожск",
      "Выборг",
      "Выкса",
      "Вязьма",
      "Гатчина",
      "Геленджик",
      "Георгиевск",
      "Глазов",
      "Горно-Алтайск",
      "Губкин",
      "Гудермес",
      "Гуково",
      "Гусь-Хрустальный",
      "Дербент",
      "Дзержинск",
      "Димитровград",
      "Дмитров",
      "Долгопрудный",
      "Домодедово",
      "Донской",
      "Дубна",
      "Евпатория",
      "Егорьевск",
      "Ейск",
      "Екатеринбург",
      "Елабуга",
      "Елец",
      "Ессентуки",
      "Железногорск (Красноярский край)",
      "Железногорск (Курская область)",
      "Жигулевск",
      "Жуковский",
      "Заречный",
      "Зеленогорск",
      "Зеленодольск",
      "Златоуст",
      "Иваново",
      "Ивантеевка",
      "Ижевск",
      "Избербаш",
      "Иркутск",
      "Искитим",
      "Ишим",
      "Ишимбай",
      "Йошкар-Ола",
      "Казань",
      "Калининград",
      "Калуга",
      "Каменск-Уральский",
      "Каменск-Шахтинский",
      "Камышин",
      "Канск",
      "Каспийск",
      "Кемерово",
      "Керчь",
      "Кинешма",
      "Кириши",
      "Киров (Кировская область)",
      "Кирово-Чепецк",
      "Киселевск",
      "Кисловодск",
      "Клин",
      "Клинцы",
      "Ковров",
      "Когалым",
      "Коломна",
      "Комсомольск-на-Амуре",
      "Копейск",
      "Королев",
      "Кострома",
      "Котлас",
      "Красногорск",
      "Краснодар",
      "Краснокаменск",
      "Краснокамск",
      "Краснотурьинск",
      "Красноярск",
      "Кропоткин",
      "Крымск",
      "Кстово",
      "Кузнецк",
      "Кумертау",
      "Кунгур",
      "Курган",
      "Курск",
      "Кызыл",
      "Лабинск",
      "Лениногорск",
      "Ленинск-Кузнецкий",
      "Лесосибирск",
      "Липецк",
      "Лиски",
      "Лобня",
      "Лысьва",
      "Лыткарино",
      "Люберцы",
      "Магадан",
      "Магнитогорск",
      "Майкоп",
      "Махачкала",
      "Междуреченск",
      "Мелеуз",
      "Миасс",
      "Минеральные Воды",
      "Минусинск",
      "Михайловка",
      "Михайловск (Ставропольский край)",
      "Мичуринск",
      "Москва",
      "Мурманск",
      "Муром",
      "Мытищи",
      "Набережные Челны",
      "Назарово",
      "Назрань",
      "Нальчик",
      "Наро-Фоминск",
      "Находка",
      "Невинномысск",
      "Нерюнгри",
      "Нефтекамск",
      "Нефтеюганск",
      "Нижневартовск",
      "Нижнекамск",
      "Нижний Новгород",
      "Нижний Тагил",
      "Новоалтайск",
      "Новокузнецк",
      "Новокуйбышевск",
      "Новомосковск",
      "Новороссийск",
      "Новосибирск",
      "Новотроицк",
      "Новоуральск",
      "Новочебоксарск",
      "Новочеркасск",
      "Новошахтинск",
      "Новый Уренгой",
      "Ногинск",
      "Норильск",
      "Ноябрьск",
      "Нягань",
      "Обнинск",
      "Одинцово",
      "Озерск (Челябинская область)",
      "Октябрьский",
      "Омск",
      "Орел",
      "Оренбург",
      "Орехово-Зуево",
      "Орск",
      "Павлово",
      "Павловский Посад",
      "Пенза",
      "Первоуральск",
      "Пермь",
      "Петрозаводск",
      "Петропавловск-Камчатский",
      "Подольск",
      "Полевской",
      "Прокопьевск",
      "Прохладный",
      "Псков",
      "Пушкино",
      "Пятигорск",
      "Раменское",
      "Ревда",
      "Реутов",
      "Ржев",
      "Рославль",
      "Россошь",
      "Ростов-на-Дону",
      "Рубцовск",
      "Рыбинск",
      "Рязань",
      "Салават",
      "Сальск",
      "Самара",
      "Санкт-Петербург",
      "Саранск",
      "Сарапул",
      "Саратов",
      "Саров",
      "Свободный",
      "Севастополь",
      "Северодвинск",
      "Северск",
      "Сергиев Посад",
      "Серов",
      "Серпухов",
      "Сертолово",
      "Сибай",
      "Симферополь",
      "Славянск-на-Кубани",
      "Смоленск",
      "Соликамск",
      "Солнечногорск",
      "Сосновый Бор",
      "Сочи",
      "Ставрополь",
      "Старый Оскол",
      "Стерлитамак",
      "Ступино",
      "Сургут",
      "Сызрань",
      "Сыктывкар",
      "Таганрог",
      "Тамбов",
      "Тверь",
      "Тимашевск",
      "Тихвин",
      "Тихорецк",
      "Тобольск",
      "Тольятти",
      "Томск",
      "Троицк",
      "Туапсе",
      "Туймазы",
      "Тула",
      "Тюмень",
      "Узловая",
      "Улан-Удэ",
      "Ульяновск",
      "Урус-Мартан",
      "Усолье-Сибирское",
      "Уссурийск",
      "Усть-Илимск",
      "Уфа",
      "Ухта",
      "Феодосия",
      "Фрязино",
      "Хабаровск",
      "Ханты-Мансийск",
      "Хасавюрт",
      "Химки",
      "Чайковский",
      "Чапаевск",
      "Чебоксары",
      "Челябинск",
      "Черемхово",
      "Череповец",
      "Черкесск",
      "Черногорск",
      "Чехов",
      "Чистополь",
      "Чита",
      "Шадринск",
      "Шали",
      "Шахты",
      "Шуя",
      "Щекино",
      "Щелково",
      "Электросталь",
      "Элиста",
      "Энгельс",
      "Южно-Сахалинск",
      "Юрга",
      "Якутск",
      "Ялта",
      "Ярославль",
    ];
  for (let i = 0; i < arrCity.length; i++) {
    const option = document.createElement("option");
    option.value = arrCity[i];
    option.textContent = arrCity[i];
    weather.append(option);
  }
};
createOption();
input.addEventListener("change", (e) => {
  const target = e.target;
  const city = target.value;
  // API ключ
  let apiKey = "063a9c132beca4c47699d6170e1d33bc";
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
  if (city) {
    getData(url)
      .then((data) => {
        renderWeather(data);
      })
      .catch((error) => console.log(error.message));
  } else {
    return;
  }
});
