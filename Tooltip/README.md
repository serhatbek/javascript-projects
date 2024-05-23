![tooltip](https://raw.githubusercontent.com/serhatbek/javascript-projects/main/Tooltip/tooltip.png)

# Vanilla JavaScript - Tooltip

Tooltips are a great way to provide additional information to users without cluttering the interface. In this article, we'll create a simple and effective tooltip using vanilla JavaScript, HTML, and CSS.

Before we start I'd like mention that I used:

- [Google Fonts](https://fonts.google.com) Roboto.
- [SCSS (SASS)](https://sass-lang.com/) for styling.
- [BEM methodology](https://getbem.com/introduction) for reusability of css for tooltip.

### Tooltip HTML Structure

Let's start by defining the HTML structure for our tooltip component. We'll start with a basic HTML structure containing three buttons. Each button has a data-tooltip attribute containing the tooltip text.

```html
<body class="container">
  <button class="trigger" data-tooltip="Alice In Wonderland">Show More</button>

  <button class="trigger trigger--primary" data-tooltip="Wizard Of Ozz">
    Show More
  </button>

  <button
    class="trigger trigger--secondary"
    data-tooltip="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
  >
    Show More
  </button>
</body>
```

### SCSS Styling

Next, we'll style our tooltips and buttons using SCSS. Tooltips are initially hidden and positioned above the buttons. The .active class makes them visible. We'll also include some general styling for the body and container.

```scss
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

// COLORS
$black2: #1e1e1e;
$white: aliceblue;
$grayish-blue: #003249;
$blue: #4983cf;
$pink: #be5064;

// RESET
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: $black2;
  color: $white;
}

// STYLES
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  .trigger {
    font-size: 14px;
    color: $white;
    padding: 4px 8px;
    background: transparent;
    border: 0;
    cursor: pointer;
    border-radius: 4px;
    margin: 0 10px;
    position: relative;

    &--primary {
      background-color: $blue;
    }

    &--secondary {
      background-color: $pink;
    }
  }

  [role='tooltip'] {
    width: calc(100% + 40px);
    height: auto;
    padding: 8px;
    line-height: 1.5;
    border-radius: 4px;
    background-color: $grayish-blue;
    position: absolute;
    left: 50%;
    bottom: calc(100% + 15px);
    transform: translateX(-50%);
    opacity: 0;
    visibility: hidden;
    transition: all 300ms ease-in-out;
  }

  [role='tooltip'].active {
    opacity: 1;
    visibility: visible;
  }

  [role='tooltip']::before {
    content: '';
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    bottom: -8px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid $grayish-blue;
  }
}
```

### Adding JavaScript Functionality

Finally, we'll add the JavaScript code to make our tooltips interactive. This involves creating tooltip elements dynamically and attaching event listeners to show and hide the tooltips. We select all elements with the **.trigger** class and for each trigger, we create a tooltip element, set its role to tooltip, and append it to the trigger button. We'll also add **mouseenter** and **mouseleave** event listeners that will call **openTooltip** and **closeTooltip** functions to show and hide the tooltip by adding and removing the **.active** class.

```javascript
const triggers = document.querySelectorAll('.trigger');

const openTooltip = (e) => {
  const tooltip = e.target.querySelector('[role=tooltip]');
  tooltip.classList.add('active');
};

const closeTooltip = (e) => {
  const tooltip = e.target.querySelector('[role=tooltip]');
  tooltip.classList.remove('active');
};

if (triggers) {
  triggers.forEach((trigger) => {
    let tooltip = document.createElement('span');

    tooltip.setAttribute('role', 'tooltip');
    tooltip.setAttribute('inert', true);
    tooltip.textContent = trigger.dataset.tooltip;

    trigger.appendChild(tooltip);

    trigger.addEventListener('mouseenter', openTooltip);
    trigger.addEventListener('mouseleave', closeTooltip);
  });
}
```

We've just created a simple tooltip component using vanilla JavaScript. You can customize it for your project's needs.

Thank you for reading. If you find the article useful, please do not forget to give a star so that others can access it. Happy Coding! 🙃
