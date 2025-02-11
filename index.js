/* Pseudo
Empty Parent container
Add each user profile as another container (Avatar, name, email, country, flag icon, button)
Use Fetch for external api
Parse the required components into divs in card containers and update dynamically with DOM 

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
  fetch('https://randomuser.me/api/?results=10')
    .then((users) => {
      return users.json();
    })
    .then((data) => {
      console.log(data);
      return data
    });
}

getRandomUsers();