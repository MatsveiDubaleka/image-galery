const url = 'https://api.unsplash.com/photos/random?query=spring&client_id=VPEGnAwflLlSf991g0qx9sRLUjQ-s9VWHXXNvoSfE4E';

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    console.log(data.urls.regular);
    showData(data);
}
getData();

// function showData(data) {
//     data.
// }
