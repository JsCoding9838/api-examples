const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => displayBuddies(data));
}
loadBuddies();

const displayBuddies = data => {
    // console.log(data.results)
    const buddies     = data.results;
    const budddiesDiv = document.getElementById('buddies');
    for(const buddy of buddies){
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}`;


        budddiesDiv.appendChild(p);
    }
}