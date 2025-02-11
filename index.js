/* Pseudo

flag logic
send post request with user data through JSON 
Test post request through local endpoint
Post to given Directus backend API
Dark mode support with tailwind - add dark mode top right
Lazy loading for images - just add lazy tags
apply style guides to Javascript/HTML
polish ReadME
*/

function getRandomUsers() {
  return fetch('https://randomuser.me/api/?results=10') /* Only returns a promise */
    .then((users) => {
      return users.json();
    })
    .then((data) => {
      return data.results;
    })
    .catch(error => {
      console.error('Error:', error)
    });
}

/* Call and store data to variable */
let userData;

getRandomUsers().then((data) => {
  userData = data;
  console.log(userData);
  displayUsers();
});

function createFlag() {
  const flag = document.createElement('div');
  flag.classList.add('absolute', 'top-0', 'right-0', 'p-4', 'mr-2','cursor-pointer');
  flag.innerHTML = '🏳';
  
  flag.addEventListener('click', function () {
    flagClick(flag);
    flagUserAPI(flag);
  });
  return flag;
}

function flagClick(flag) {
  flag.classList.add('text-yellow-500', 'pointer-events-none');
}

function flagUserAPI (flag) {
  const user = flag.closest('.card');

  const flaggedUserData = {
    photo_url: user.querySelector('img').src,
    first_name: user.querySelector('p.font-semibold').textContent.split(' ')[1],
    last_name: user.querySelector('p.font-semibold').textContent.split(' ')[2],
    email: user.querySelector('p.text-sm').textContent,
    country: user.querySelector('p.font-semibold').textContent.split('-')[1].trim(),
    dev: 'Jerry Bach'
    }
    console.log('Post request to directus', flaggedUserData) /* replace with function to call post request */
}

function createCardComponents (user) {
  const components = `
    <img src='${user.picture.medium}' class='rounded-full m-2'>
    <p class='font-semibold m-1'> ${user.name.first} ${user.name.last} - ${user.location.country}</p>
    <p class='text-sm text-gray-500 m-1'>${user.email}</p>
    <button class='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-1 cursor-pointer'>View Profile</button>
    `;
  return components;
}

function createCard (user) {
  const card = document.createElement('div');
  card.classList.add('card', 'relative', 'flex', 'flex-col', 'justify-center', 'items-center', 'justify-evenly', 'border-3', 'border-b-5', 'p-4', 'shadow-lg', 'rounded-lg', 'border-gray-100');

  card.innerHTML = createCardComponents (user);
  const flag = createFlag();
  card.appendChild(flag);

  return card;
}

function displayUsers () {
  const container = document.getElementById('card-container');
  container.classList.add('grid', 'grid-cols-2', 'gap-4', 'border-2', 'border-red-700', 'p-10');
  container.innerHTML = '';

  userData.forEach(function(user) {
    const card = createCard(user)
    container.appendChild(card);
  });
};



