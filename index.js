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




function displayUsers () {
  const container = document.getElementById('card-container');
  container.innerHTML = '';

  userData.forEach(function(user) {
    const card = document.createElement('div');
    card.innerHTML = '1';
    container.appendChild(card);
  });

  /* Add each user profile as another container (Avatar, name, email, country, flag icon, button)
  For each user add a div container
  add a child div for each component */

}



