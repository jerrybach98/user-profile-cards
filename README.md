# User Profile Cards
Fetches random user data and displays it in a user profile card layout. This project uses JavaScript and Tailwind CSS to build interactive and responsive UI components.

## Try it online:
[View Page](https://jerrybach98.github.io/user-profile-cards/)

## Tech Stack
- **Language:** JavaScript
- **Frameworks and Tools:** Tailwind CSS

## Features:
* Fetches random user data from an external API and displays it in user profile cards.
* Includes functionality to flag users and send the flagged data to a separate API.

## Approach & Thoughts
I started by watching tutorials and reading documentation for Vue and Tailwind CSS, which led me down a bit of a rabbit hole. While I was excited to dive into a new framework, I ended up sticking with my strengths in Vanilla JavaScript, as Vue would probably take a couple of days to learn and implement. As for Tailwind, I chose to stick with it because it was very intuitive and I wanted to showcase my ability to learn new tools. <br /> 

One thing I realized while coding was how much I rely on Ruby's syntax sugar; subconsciously writing code in Ruby. Having spent most of the past year coding in Ruby/Rails, there was a brief syntax adjustment period, but it quickly came back to me after reviewing JavaScript style guides, revisiting old projects, and actually writing the code. <br />

I mentally mapped out the project, drawing inspiration from user profile card designs I found on Google Images, and then pseudocoded my approach by breaking down the functionality into smaller pieces. I was already familiar with most of the concepts, but it was my first time implementing some of them in JavaScript. When using AI assistance to speed up workflows, I made sure to thoroughly understand concepts with explanations and read Stack Overflow for insights before any implementations.

## Lessons Learned:
* The differences in how languages handle asynchronous tasks, especially with Promises, `async/await`, and `.then()`.
* Implementing API calls in JavaScript. 

## Further enhancements:
* Implementing a framework like React or Vue.
* Logic to map country names to a country image or emoji to create country badges. 
* Adding a loading animation and error messages to UI when fetching data.
* A search bar to filter users with debounced API calls.
* Dark mode support using Tailwind’s built-in features.