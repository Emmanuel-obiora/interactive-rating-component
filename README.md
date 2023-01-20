# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Desktop View](./images/desktop.png)

### Links

- Solution URL: [GitHub](https://github.com/Emmanuel-obiora/interactive-rating-component)
- Live Site URL: [live site](https://emmanuel-obiora.github.io/interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

This challenge helped me in learning how to interact with html tags and also transfer innerhtml values to other html elements.

```js
rates.forEach((rate) => {
    rate.addEventListener('click', () => [
        rating.innerHTML = rate.innerHTML
    ])
})
```

### Continued development

There is need to work more on JavaScript.

### Useful resources

- [TsbSankara](https://www.youtube.com/watch?v=cQnUopEeZgw) - This helped me in calling out values in html with the help of JS and will use it going forward.

## Author

- Website - [Obiora Emmanuel](https://emmanuel-obiora.github.io/portfolio-about-me-/web-content)
- Frontend Mentor - [@Emmanuel-obiora](https://www.frontendmentor.io/profile/Emmanuel-obiora)
- Twitter - [@Miroclesdgenius](https://twitter.com/Miroclesdgenius)
