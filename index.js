const input = document.querySelector('input')
let url = 'https://api.unsplash.com/search/photos?query=spring&orientation=landscape&extras=url_m&client_id=VPEGnAwflLlSf991g0qx9sRLUjQ-s9VWHXXNvoSfE4E';
const galleryContainer = document.querySelector('.gallery-container')
let img;
input.addEventListener('change', () => {
    url = `https://api.unsplash.com/search/photos?query=${input.value}&orientation=landscape&extras=url_m&client_id=VPEGnAwflLlSf991g0qx9sRLUjQ-s9VWHXXNvoSfE4E`;

    getData()
})

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    showData(data);
}
getData()

function showData(data) {
    while (galleryContainer.firstChild) {
        galleryContainer.removeChild(galleryContainer.firstChild)
    }
    data.results.map((elem) => {
        let imageSrc = elem.urls.regular;
        img = document.createElement('img');
        img.classList.add('gallery-img')
        img.src = `${imageSrc}`;
        img.alt = `image`;
        galleryContainer.append(img);
    })
}