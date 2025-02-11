/* Pseudo
Style with tailwind
- put country next to name and convert it

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
  const card = document.createElement('div');
  card.classList.add('relative', 'flex', 'flex-col', 'justify-center', 'items-center', 'justify-evenly', 'border-3', 'border-b-5', 'p-4', 'shadow-lg', 'rounded-lg', 'border-gray-100');


  
    card.innerHTML = `
      <div class='absolute top-0 right-0 p-4 mr-2'>🏳</div>
      <img src='${user.picture.medium}' class='rounded-full m-2'>
      <p class='font-semibold m-1'> ${user.name.first} ${user.name.last} ${user.location.country}</p>
      <p class='text-sm text-gray-500 m-1'>${user.email}</p>
      <button class='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-1'>View Profile</button>
      `;
    return card;
}


/* function to convert country name to badges (emoji?) */


function displayUsers () {
  const container = document.getElementById('card-container');
  container.classList.add('grid', 'grid-cols-2', 'gap-4', 'border-2', 'border-red-700', 'p-10');
  container.innerHTML = '';

  userData.forEach(function(user) {
    const card = createCard(user)
    container.appendChild(card);
  });
};



