const url = 'https://api.unsplash.com/search/photos?query=spring&orientation=landscape&extras=url_m&client_id=VPEGnAwflLlSf991g0qx9sRLUjQ-s9VWHXXNvoSfE4E';
const galleryContainer = document.querySelector('.gallery-container')

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    showData(data);
}
getData();

function showData(data) {
    data.results.map((elem) => {
        let imageSrc = elem.urls.regular;
        const img = document.createElement('img');
        img.classList.add('gallery-img')
        img.src = `${imageSrc}`;
        img.alt = `image`;
        galleryContainer.append(img);
    })
}