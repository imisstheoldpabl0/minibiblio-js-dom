const books = [
  {
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "imageLink": "images/things-fall-apart.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
  },
  {
    "author": "Hans Christian Andersen",
    "country": "Denmark",
    "imageLink": "images/fairy-tales.jpg",
    "language": "Danish",
    "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    "pages": 784,
    "title": "Fairy tales",
    "year": 1836
  },
  {
    "author": "Dante Alighieri",
    "country": "Italy",
    "imageLink": "images/the-divine-comedy.jpg",
    "language": "Italian",
    "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    "pages": 928,
    "title": "The Divine Comedy",
    "year": 1315
  },
  {
    "author": "Unknown",
    "country": "Sumer and Akkadian Empire",
    "imageLink": "images/the-epic-of-gilgamesh.jpg",
    "language": "Akkadian",
    "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    "pages": 160,
    "title": "The Epic Of Gilgamesh",
    "year": -1700
  },
  {
    "author": "Unknown",
    "country": "Achaemenid Empire",
    "imageLink": "images/the-book-of-job.jpg",
    "language": "Hebrew",
    "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
    "pages": 176,
    "title": "The Book Of Job",
    "year": -600
  }
];



let tarjetas = `<section>`

for (let i = 0; i < books.length; i++) {
    tarjetas += `<article>
                    <img src="./${books[i].imageLink}" alt="Fotacas">
                    <div>
                    <h2 class="title">${books[i].title}</h2>
                    <p class="author">Author: ${books[i].author}</p>
                    <p class="year">Year: ${books[i].year}</p>
                    <p class="country">Country: ${books[i].country}</p>
                    <p class="pages">Number of pages: ${books[i].pages}</p>
                    <p class="language">Lenguage: ${books[i].language}</p>
                    <a href="${books[i].link}">${books[i].link}</a>
                </div>
                </article>`
}

    tarjetas += `</section>`;
    document.getElementById('listaLibros').innerHTML = tarjetas;


function printTarjetas() {
  for (let i = 0; i < books.length; i++) {
    // CREANDO UN DIV
    const parentDiv = document.createElement("div");
    document.getElementById("listaLibros").appendChild(parentDiv);
    parentDiv.setAttribute("id", `div${i}`)


    // CREANDO IMG
    const childImg = document.createElement("img");
    childImg.setAttribute("src", `${books[i].imageLink}`);
    childImg.setAttribute("alt", "Fotacas");
    document.getElementById(`div${i}`).appendChild(childImg);

    // CREANDO TITULO
    const childTitle = document.createElement("h2");
    childTitle.setAttribute("class", "title");
    const childTitle2 = document.createTextNode(`${books[i].title}`)
    childTitle.appendChild(childTitle2);
    document.getElementById(`div${i}`).appendChild(childTitle);

    // CREANDO AUTOR
    const childAuthor = document.createElement("p");
    childAuthor.setAttribute("class", "author");
    const childAuthor2 = document.createTextNode(`Author: ${books[i].author}`);
    childAuthor.appendChild(childAuthor2);
    document.getElementById(`div${i}`).appendChild(childAuthor);

    // YEAR
    const childYear = document.createElement("p");
    childYear.setAttribute("class", "year");
    const childYear2 = document.createTextNode(`Year: ${books[i].year}`);
    childYear.appendChild(childYear2);
    document.getElementById(`div${i}`).appendChild(childYear);


    // CREANDO COUNTRY
    const childCountry = document.createElement("p");
    childCountry.setAttribute("class", "country");
    const childCountry2 = document.createTextNode(`Country: ${books[i].country}`);
    childCountry.appendChild(childCountry2);
    document.getElementById(`div${i}`).appendChild(childCountry);

    // PÁGINAS
    const childPages = document.createElement("p");
    childPages.setAttribute("class", "pages");
    const childPages2 = document.createTextNode(`Number of pages: ${books[i].pages} pg.`);
    childPages.appendChild(childPages2);
    document.getElementById(`div${i}`).appendChild(childPages);

    // LANGUAGE
    const childLanguage = document.createElement("p");
    childLanguage.setAttribute("class", "language");
    const childLanguage2 = document.createTextNode(`Language: ${books[i].language}`);
    childLanguage.appendChild(childLanguage2);
    document.getElementById(`div${i}`).appendChild(childLanguage);

    // LINK
    const childLink = document.createElement("a");
    childLink.setAttribute("href", `${books[i].link}`);
    childLink.setAttribute("class", "link");
    const childLink2 = document.createTextNode(`${books[i].link}`);
    childLink.appendChild(childLink2);
    document.getElementById(`div${i}`).appendChild(childLink);
  }

}

// printTarjetas();





