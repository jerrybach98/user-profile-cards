/* Pseudo
Style with tailwind
Add conistent and dynamic spacing using flexbox or grid between profile card containers

flag state using vanilla or look into framework to manage state
UI for loading, success, and error states

flag logic
on click event for flag icon / change color or image
send post request with user data through JSON 
Test post request through local endpoint
Post to given Directus backend API
disable duplicate flagging

Extras 
Dark mode support with tailwind
Add micro interacions (hover animation)
Lazy loading for images
devounced api call 
Keyboard navigation
*/

function getRandomUsers() {
  return fetch('https://randomuser.me/api/?results=10') /* Only returns a promise */
    .then((users) => {
      return users.json();
    })
    .then((data) => {
      return data.results;
    });
}

/* Call and store data to variable */
let userData;

getRandomUsers().then((data) => {
  userData = data;
  console.log(userData);
  displayUsers();
});

function createCard (user) {
 /* Add each user profile as another container (Avatar, name, email, country, flag icon, button) */
  const card = document.createElement('div');
  card.classList.add('flex', 'flex-col', 'justify-center', 'items-center', 'border-2', 'border-blue-700');

    card.innerHTML = `
      <p>🏳</p>
      <img src='${user.picture.medium}'>
      <p > ${user.name.first} ${user.name.last}</p>
      <p>${user.email}</p>
      <p>${user.location.country}</p> 
      <button type="button">View Profile</button>
      
      `;
    return card;
}


/* function to convert country name to badges (emoji?) */


function displayUsers () {
  const container = document.getElementById('card-container');
  container.classList.add('grid', 'grid-cols-2', 'gap-4', 'border-2', 'border-red-700');
  container.innerHTML = '';

  userData.forEach(function(user) {
    const card = createCard(user)
    container.appendChild(card);
  });
};



