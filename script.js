const LANGUAGES = {
  ru: { name: "Русский", title: "EN → RU" },
  es: { name: "Español", title: "EN → ES" },
  fr: { name: "Français", title: "EN → FR" },
  de: { name: "Deutsch", title: "EN → DE" },
};

const DICTIONARY = {
  hello: { ru: "привет", es: "hola", fr: "bonjour", de: "hallo" },
  goodbye: {
    ru: "до свидания",
    es: "adiós",
    fr: "au revoir",
    de: "auf wiedersehen",
  },
  please: {
    ru: "пожалуйста",
    es: "por favor",
    fr: "s'il vous plaît",
    de: "bitte",
  },
  "thank you": { ru: "спасибо", es: "gracias", fr: "merci", de: "danke" },
  yes: { ru: "да", es: "sí", fr: "oui", de: "ja" },
  no: { ru: "нет", es: "no", fr: "non", de: "nein" },
  dog: { ru: "собака", es: "perro", fr: "chien", de: "Hund" },
  cat: { ru: "кошка", es: "gato", fr: "chat", de: "Katze" },
  house: { ru: "дом", es: "casa", fr: "maison", de: "Haus" },
  car: { ru: "машина", es: "coche", fr: "voiture", de: "Auto" },
  water: { ru: "вода", es: "agua", fr: "eau", de: "Wasser" },
  food: { ru: "еда", es: "comida", fr: "nourriture", de: "Essen" },
  friend: { ru: "друг", es: "amigo", fr: "ami", de: "Freund" },
  family: { ru: "семья", es: "familia", fr: "famille", de: "Familie" },
  love: { ru: "любовь", es: "amor", fr: "amour", de: "Liebe" },
  work: { ru: "работа", es: "trabajo", fr: "travail", de: "Arbeit" },
  school: { ru: "школа", es: "escuela", fr: "école", de: "Schule" },
  book: { ru: "книга", es: "libro", fr: "livre", de: "Buch" },
  pen: { ru: "ручка", es: "bolígrafo", fr: "stylo", de: "Stift" },
  pencil: { ru: "карандаш", es: "lápiz", fr: "crayon", de: "Bleistift" },
  computer: {
    ru: "компьютер",
    es: "computadora",
    fr: "ordinateur",
    de: "Computer",
  },
  phone: { ru: "телефон", es: "teléfono", fr: "téléphone", de: "Telefon" },
  city: { ru: "город", es: "ciudad", fr: "ville", de: "Stadt" },
  country: { ru: "страна", es: "país", fr: "pays", de: "Land" },
  morning: { ru: "утро", es: "mañana", fr: "matin", de: "Morgen" },
  night: { ru: "ночь", es: "noche", fr: "nuit", de: "Nacht" },
  day: { ru: "день", es: "día", fr: "jour", de: "Tag" },
  happy: { ru: "счастливый", es: "feliz", fr: "heureux", de: "glücklich" },
  sad: { ru: "грустный", es: "triste", fr: "triste", de: "traurig" },
  small: { ru: "маленький", es: "pequeño", fr: "petit", de: "klein" },
  big: { ru: "большой", es: "grande", fr: "grand", de: "groß" },
  new: { ru: "новый", es: "nuevo", fr: "nouveau", de: "neu" },
  old: { ru: "старый", es: "viejo", fr: "ancien", de: "alt" },
  good: { ru: "хороший", es: "bueno", fr: "bon", de: "gut" },
  bad: { ru: "плохой", es: "malo", fr: "mauvais", de: "schlecht" },
  beautiful: { ru: "красивый", es: "hermoso", fr: "beau", de: "schön" },
  ugly: { ru: "уродливый", es: "feo", fr: "laid", de: "hässlich" },
  hot: { ru: "горячий", es: "caliente", fr: "chaud", de: "heiß" },
  cold: { ru: "холодный", es: "frío", fr: "froid", de: "kalt" },
  summer: { ru: "лето", es: "verano", fr: "été", de: "Sommer" },
  winter: { ru: "зима", es: "invierno", fr: "hiver", de: "Winter" },
  spring: { ru: "весна", es: "primavera", fr: "printemps", de: "Frühling" },
  autumn: { ru: "осень", es: "otoño", fr: "automne", de: "Herbst" },
  money: { ru: "деньги", es: "dinero", fr: "argent", de: "Geld" },
  time: { ru: "время", es: "tiempo", fr: "temps", de: "Zeit" },
  child: { ru: "ребёнок", es: "niño", fr: "enfant", de: "Kind" },
  mother: { ru: "мать", es: "madre", fr: "mère", de: "Mutter" },
  father: { ru: "отец", es: "padre", fr: "père", de: "Vater" },
  sister: { ru: "сестра", es: "hermana", fr: "sœur", de: "Schwester" },
  brother: { ru: "брат", es: "hermano", fr: "frère", de: "Bruder" },
};

let currentLanguage = "ru";

const pageTitle = document.getElementById("pageTitle");
const outputText = document.getElementById("outputText");
const hintText = document.getElementById("hintText");
const inputText = document.getElementById("inputText");

function getTranslation(word, lang) {
  const normalized = word.toLowerCase().trim();
  return DICTIONARY[normalized]?.[lang] || null;
}

function setLanguage(lang) {
  if (!LANGUAGES[lang]) return;
  currentLanguage = lang;
  document.querySelectorAll(".language-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
  pageTitle.textContent = LANGUAGES[lang].title;
  hintText.textContent = `Перевод на ${LANGUAGES[lang].name}. Введите слово и нажмите Перевести.`;
  translateText();
  renderWordButtons();
}

function translateText() {
  const value = inputText.value;
  if (!value.trim()) {
    outputText.textContent = "Введите слово для перевода.";
    return;
  }
  const translation = getTranslation(value, currentLanguage);
  outputText.textContent = translation || "Слово не найдено в словаре.";
}

function translateWord(word) {
  inputText.value = word;
  const translation = getTranslation(word, currentLanguage);
  outputText.textContent = translation || "Слово не найдено в словаре.";
}

function renderWordButtons() {
  const container = document.getElementById("wordButtons");
  container.innerHTML = "";
  Object.keys(DICTIONARY).forEach((word) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "word-button";
    btn.textContent = word;
    btn.addEventListener("click", () => translateWord(word));
    container.appendChild(btn);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".language-button").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  document
    .getElementById("translateBtn")
    .addEventListener("click", translateText);
  document.getElementById("clearBtn").addEventListener("click", () => {
    inputText.value = "";
    outputText.textContent = "Выберите слово или введите свое выражение.";
    inputText.focus();
  });

  inputText.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      translateText();
    }
  });

  setLanguage(currentLanguage);
});
