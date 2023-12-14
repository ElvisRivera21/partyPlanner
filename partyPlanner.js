const apiUrl = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT-elvis/events';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        //handle the data
        const partyListElement = document.getElementById('partyList');
  console.log(data)

        data.data.forEach(party => {
            const partyItem = document.createElement('li');
            partyItem.textContent = `${party.name} - ${party.date} ${party.time} - ${party.location} - ${party.description}`;

            partyListElement.appendChild(partyItem);
        });
    })
    .catch(error => {
        //handle any errors
        console.error(error);
    });
//post method for API

const party = {
    name: "Your Party Name",
    date: "2022-12-31",
    time: "20:00",
    location: "The party Venue",
    description: "Party description"
};

fetch(apiUrl, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(party)
})
    .then(response => response.json())
    .then(data => {
        console.log("New party created:", data);
    })
    .catch(error => {
        console.error("Error creating party:", error);
    });

//Delete from API
    
const partyID = "PartyIDtoDelete";//Replace with actual party name

fetch(`${apiUrl}/${partyID}`, {
    method: "Delete",
    headers: {
        "Content-Type": "application/json"
    }
})
    .then(response => {
        if (response.ok) {
            console.log("Party deleted successfully");
        } else {
            throw new Error("Failed to delete party");
        }
    })
    .catch(error => {
        console.error("Error deleting party:", error);
    });