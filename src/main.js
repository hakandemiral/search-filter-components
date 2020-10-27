const selamla = () => {

    const name = prompt('İsminizi bahşeder misiniz?');

    const h1 = document.getElementById('name');

    h1.innerText = `Selamlar, sayın ve sevgili ${name}`
}

selamla();
