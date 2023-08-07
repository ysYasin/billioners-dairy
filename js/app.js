const loadDataAsIndustry = async (type, name) => {
    const url = `https://forbes400.onrender.com/api/forbes400/${type}${name}`;
    try {
        const res = await fetch(url)
        const data = await res.json();
        placeData(data)
    } catch (error) {
        getDom('eroorText').classList.remove('erorrText')
    }
    console.log(url)

}
//function to get input field
const searchField = placeHolder => {
    let seachId = document.getElementById('searchField');
    seachId.placeholder = placeHolder;
    const searchValue = seachId.value;
    return searchValue;

}
// function for get dom
const getDom = (domId) => {
    const docId = document.getElementById(domId);
    return docId;
}
// industry dataload


document.getElementById('Industry').addEventListener('click', function searchOparetion() {
    searchField('Search By Industry name');
    const btnName = 'industries/';
    getDom('rechest').innerText = btnName;
    document.getElementById('search').addEventListener('click', function () {
        const searchValue = searchField();
        loadDataAsIndustry(btnName, searchValue);
        getDom('chatagory').innerText = searchValue
    })
})
document.getElementById('state').addEventListener('click', function searchOparetion() {
    searchField('Search By any state name of USA');
    const btnName = 'states/';
    const btnText = getDom('state')
    getDom('rechest').innerText = btnText.innerText;
    document.getElementById('search').addEventListener('click', function () {
        const searchValue = searchField();
        loadDataAsIndustry(btnName, searchValue);
        getDom('chatagory').innerText = searchValue
    })
})
document.getElementById('Age').addEventListener('click', function searchOparetion() {
    searchField('Search By any state name of USA');
    const btnText = getDom('Age')
    getDom('rechest').innerText = btnText.innerText;
    document.getElementById('search').addEventListener('click', function () {
        const searchValue = searchField();
        loadDataAsIndustry(searchValue, ' ');
        getDom('chatagory').innerText = searchValue
    })
})
const placeData = billionars => {
    const cardHolder = getDom('rechest-person-holder');
    cardHolder.innerHTML = '';


    for (let billionar of billionars) {
        const div = document.createElement('div');
        div.classList.add("card-box");
        div.innerHTML = `
        <h1 id="cardtitle">${billionar.person.name}</h1>
        <div class="card">
            <figure class="card-img">
                <img width="100px" src="${billionar.person.squareImage}" alt="">
                <figcaption id="hisName">${billionar.person.name}</figcaption>
            </figure>
            <div class="card-body">
                <p><b>Citigenship :</b><span>${billionar.countryOfCitizenship}</span></p>
                <p><b>State :</b><span> ${billionar.state}</span></p>
                <p><b>City :</b><span> ${billionar.city}</span></p>
                <p><b>Totl share :</b><span> ${billionar.privateAssetsWorth
            }</span></p>
                <p><b>Rank :</b><span> ${billionar.rank
            }</span></p>
            </div>
        </div>
        `

        cardHolder.appendChild(div)
    };

}