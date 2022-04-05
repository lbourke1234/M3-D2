window.onload = function() {
    addGreenPlayImgEventListener()
    addListenerToLoveHeart()
    addListenerToFirstButton()
    addEventToArtistName()
    }



function addGreenPlayImgEventListener() {
    let greenPlayNode = document.querySelectorAll('.green-play-img')
    for (let play of greenPlayNode) {
        play.addEventListener('click', addNewArtistToNowPlaying)
    }
}

function addNewArtistToNowPlaying(e) {
    let artistName = e.target.closest('.card').childNodes[5].childNodes[1].innerText
    let songName = e.target.closest('.card').childNodes[5].childNodes[3].innerText
    let currentArtistNode = document.querySelector('.p-artist-name')
    let currentSongNode = document.querySelector('.p-song-name')
    currentArtistNode.innerText = artistName
    currentSongNode.innerText = songName
}

function addListenerToLoveHeart() {
    document.querySelector('.bi-heart').addEventListener('click', showOrHideHeart)
    document.querySelector('.js-heart').addEventListener('click', showOrHideHeart)
}
function showOrHideHeart() {
    document.querySelector('footer i:first-of-type').classList.toggle('visible')
}

function addListenerToFirstButton () {
    let seeAllBtnNode = document.querySelectorAll('.see-all-btn')
    seeAllBtnNode[0].addEventListener('click', addNewRow)
    // console.log(seeAllBtnNode)
}

function addNewRow() {
    let newRowNode = document.querySelector('.hidden-row')
    newRowNode.classList.toggle('second-section-card-hidden')
    newRowNode.classList.toggle('new-row-animation')

    console.log('done')
}
function addEventToArtistName() {
    let artistNode = document.querySelector('.p-artist-name')
    artistNode.addEventListener('click', changePage)
}
function changePage (e) {
    location.href = "/artist.html";
}
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
// 		'X-RapidAPI-Key': '0e1fde9f0amsh012d0c39e2ae4ccp15a411jsnb4f556f3dc2f'
// 	}
// };

fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem')
	.then(response => response.json())
    .then(response => {
        let rowNode = document.querySelector('.second-section-row')
        for(let i = 0; i < 8; i++) {
            let colNode = document.createElement('div')
            colNode.classList.add('col')
            let cardNode = document.createElement('div')
            cardNode.innerHTML = `
            <div class="card second-section-card">
                <img src="${response.data[i].album.cover}" class="card-img-top" alt="...">
                <div class="card-body card-body-section2s">
                    <h5 class="card-title">${response.data[i].artist.name}</h5>
                    <p class="card-text">${response.data[i].album.title}</p>
                </div>
            </div>
            `
            rowNode.appendChild(colNode)
            colNode.appendChild(cardNode)
            
        }
    })
	.catch(err => console.error(err));

    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica')
	.then(response => response.json())
    .then(response => {
        let rowNode = document.querySelector('.third-section-row')
        for(let i = 0; i < 8; i++) {
            let colNode = document.createElement('div')
            colNode.classList.add('col')
            let cardNode = document.createElement('div')
            cardNode.innerHTML = `
            <div class="card second-section-card">
                <img src="${response.data[i].album.cover}" class="card-img-top" alt="...">
                <div class="card-body card-body-section2s">
                    <h5 class="card-title">${response.data[i].artist.name}</h5>
                    <p class="card-text">${response.data[i].album.title}</p>
                </div>
            </div>
            `
            rowNode.appendChild(colNode)
            colNode.appendChild(cardNode)
            
        }
    })
	.catch(err => console.error(err));
    
    
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=behemoth')
	.then(response => response.json())
    .then(response => {
        let rowNode = document.querySelector('.fourth-section-row')
        for(let i = 0; i < 8; i++) {
            let colNode = document.createElement('div')
            colNode.classList.add('col')
            let cardNode = document.createElement('div')
            cardNode.innerHTML = `
            <div class="card second-section-card">
                <img src="${response.data[i].album.cover}" class="card-img-top" alt="...">
                <div class="card-body card-body-section2s">
                    <h5 class="card-title">${response.data[i].artist.name}</h5>
                    <p class="card-text">${response.data[i].album.title}</p>
                </div>
            </div>
            `
            rowNode.appendChild(colNode)
            colNode.appendChild(cardNode)
            
        }
    })
	.catch(err => console.error(err));


    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=behemoth')
	.then(response => response.json())
    .then(response => {
        let rowNode = document.querySelector('div.first-section-row-top')
            for(let i = 0; i < 5; i++) {
                let colNode = document.createElement('div')
                colNode.classList.add('col')
                let cardNode = document.createElement('div')
                cardNode.innerHTML =
                                `
                                <div class="card mb-3">
                                    <div class="row no-gutters row-remove-margin row-remove-margin">
                                        <div class="col-4">
                                            <img class="first-section-img" src="${response.data[i].album.cover}" alt="...">
                                        </div>
                                        <div class="col-6 flex-container">
                                            <div class="card-body card-body-section1">
                                                <p class="card-text">${response.data[i].album.title}</p>
                                            </div>
                                        </div>
                                        <div class="col-2 flex-container">
                                            <img class="green-play-img" src="http://hypebot.typepad.com/.a/6a00d83451b36c69e201bb09b0b161970d-200wi" alt="">
                                        </div>
                                    </div>
                                </div>
                                `
                rowNode.appendChild(colNode)
                colNode.appendChild(cardNode)
                
            }
    })
	.catch(err => console.error(err));


    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=behemoth')
	.then(response => response.json())
    .then(response => {
        let rowNode = document.querySelector('div.first-section-row-bottom')

            for(let i = 5; i < 10; i++) {
                let colNode = document.createElement('div')
                colNode.classList.add('col')
                let cardNode = document.createElement('div')
                cardNode.innerHTML =
                                `
                                <div class="card mb-3">
                                    <div class="row no-gutters row-remove-margin row-remove-margin">
                                        <div class="col-4">
                                            <img class="first-section-img" src="${response.data[i].album.cover}" alt="...">
                                        </div>
                                        <div class="col-6 flex-container">
                                            <div class="card-body card-body-section1">
                                                <p class="card-text">${response.data[i].album.title}</p>
                                            </div>
                                        </div>
                                        <div class="col-2 flex-container">
                                            <img class="green-play-img" src="http://hypebot.typepad.com/.a/6a00d83451b36c69e201bb09b0b161970d-200wi" alt="">
                                        </div>
                                    </div>
                                </div>
                                `
                rowNode.appendChild(colNode)
                colNode.appendChild(cardNode)
                
            }
    })
	.catch(err => console.error(err));


    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=behemoth')
	.then(response => response.json())
    .then(response => {
        let rowNode = document.querySelector('div.second-section-card-hidden')
        console.log(rowNode)

            for(let i = 0; i < 8; i++) {
                let colNode = document.createElement('div')
                colNode.classList.add('col')
                let cardNode = document.createElement('div')
                cardNode.innerHTML =
                                `
                                <div class="card second-section-card">
                                <img src="${response.data[i].album.cover}" class="card-img-top img-second-section" alt="...">
                                    <div class="card-body card-body-section2">
                                        <h5 class="card-title">${response.data[i].artist.name}</h5>
                                        <p class="card-text">${response.data[i].album.title}</p>
                                    </div>
                                </div>
                                `
                                
                rowNode.appendChild(colNode)
                colNode.appendChild(cardNode)
                
            }
    })
	.catch(err => console.error(err));

   