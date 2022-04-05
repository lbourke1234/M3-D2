const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
		'X-RapidAPI-Key': '0e1fde9f0amsh012d0c39e2ae4ccp15a411jsnb4f556f3dc2f'
	}
};

fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem', options)
	.then(response => response.json())
	.then(response => {
        
        for(let i = 0; i < response.data.length; i++) {
            let rowNode = document.querySelector('.row')
            let cardNode = document.createElement('div')
            cardNode.classList.add('col-3')
            console.log(response.data[i])
            cardNode.innerHTML = `
                            <div class="card">
                                <img src="${response.data[i].album.cover}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${response.data[i].artist.name}</h5>
                                    <p class="card-text">${response.data[i].album.title}</p>
                                </div>
                            </div>
                                `
            rowNode.appendChild(cardNode)
            
        }
    })
	.catch(err => console.error(err));
