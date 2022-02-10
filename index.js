// Инициализируем в DOM инпут, в котором будем искать картинки
const input = document.querySelector('input')
// Unsplash API, который ищет по слову spring (query = spring), с альбомной ориентацией (orientation = landscape)
// Размер изображения extras=url_m - средний (medium) и количеством картинок равным 30 (per_page=30)
// необходимость учитывать все перечисленные ключевые слова: tag_mode=all
let url = 'https://api.unsplash.com/search/photos/?query=spring&per_page=30&tag_mode=all&orientation=landscape&extras=url_m&client_id=VPEGnAwflLlSf991g0qx9sRLUjQ-s9VWHXXNvoSfE4E';
// Инициализируем контейнер для фоток и саму фотку
const galleryContainer = document.querySelector('.gallery-container')
let img;
// Делаем событие, когда мы оканчиваем ввод ищется картинки из значения input
input.addEventListener('change', () => {
    // Создаём шаблонную строку для API, для того чтобы получать те картинки, которые ввёл пользователь в поле поиска.
    url = `https://api.unsplash.com/search/photos?query=${input.value}&orientation=landscape&extras=url_m&client_id=VPEGnAwflLlSf991g0qx9sRLUjQ-s9VWHXXNvoSfE4E`;
    getData()
})
// Обработка запроса
async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    showData(data);
}
getData()

// Пишем отдельную функцию для отображения полученных от API данных на странице
function showData(data) {
    // Убираем всех дочерные элементы(картинки) у контейнера для картинок
    while (galleryContainer.firstChild) {
        galleryContainer.removeChild(galleryContainer.firstChild)
    }
    // Используем метод .map для каждого элемента приходящего из массива, создавать картинку и указывать путь, после добавлять в контейнер
    data.results.map((elem) => {
        // Ссылка на изображение из API Data для каждого элемента
        let imageSrc = elem.urls.regular;
        // создаём элемент
        img = document.createElement('img');
        // добавляем класс
        img.classList.add('gallery-img')
        // в шаблонную строку указываем путь к изображению
        img.src = `${imageSrc}`;
        // указываем альтернативное название
        img.alt = `image`;
        // добавляем в контейнер изображение
        galleryContainer.append(img);
    })
}