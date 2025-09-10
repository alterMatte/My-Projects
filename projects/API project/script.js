const inputBar = document.getElementById('input');
const button = document.getElementById('button');
const content = document.getElementById('content');
const moreButton = document.getElementById('more-button');

const url = 'https://youtube-search-results.p.rapidapi.com/youtube-search/?q=';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4e5d694182msh2c0c9e89110071cp16021djsn080b8a8d596a',
		'x-rapidapi-host': 'youtube-search-results.p.rapidapi.com'
	}
};

const displayFetchData = async (params) => {
    try {
        const response = await fetch(`${url}${params}`, options);
        const result = await response.json();
        console.log(result);
        displayData(result);
    } catch (error) {
	    console.error(error);
    }
}

const displayData = (fetchResult) => {
    fetchResult.videos.forEach( x => {
        content.innerHTML += `
        <img src="${x.thumbnail}"/>
        <a href="${x.link}" target="_blank" ><p>${x.title}</p></a>
    `
    });
}

//displayFetchData('cat');
inputBar.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        content.innerHTML = "";
        displayFetchData(inputBar.value);
    }
});

moreButton.onclick = () => {
    if(inputBar.value === ""){
        alert("Please enter a search term first.");
    }else{
        displayFetchData(inputBar.value);
    }
}

button.addEventListener('click', ()=>{
    if(inputBar.value === ""){
        alert("Please enter a search term first.");
    }else{
        content.innerHTML = "";
        displayFetchData(inputBar.value);
    }
});