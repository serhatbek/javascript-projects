![tabs](https://raw.githubusercontent.com/serhatbek/javascript-projects/main/Tabs/tabs.png)

# Vanilla JavaScript - Tabs

Tabs allow users to navigate between different sections of content within the same page. In this tutorial, we'll walk through how to create a basic tabs component using plain JavaScript, HTML, and CSS.

Before we start I'd like mention that I used:

- [Boxicons](https://boxicons.com/) for icons.
- [Google Fonts](https://fonts.google.com) Roboto.
- [SCSS (SASS)](https://sass-lang.com/) for styling.

### Tabs HTML Structure

Let's start by defining the HTML structure for our tabs component. We'll use semantic HTML elements to represent the tabs and their content.

```html
<div class="tabs">
  <div class="tabs__pills">
    <button class="btn active" data-id="summer">Summer</button>
    <button class="btn" data-id="autumn">Autumn</button>
    <button class="btn" data-id="winter">Winter</button>
    <button class="btn" data-id="spring">Spring</button>
  </div>

  <div class="tabs__panels">
    <!-- Content panels for each tab -->
    <!-- Summer tab -->
    <div id="summer" class="active">
      <figure>
        <img src="https://picsum.photos/id/34/400/270" alt="summer" />
      </figure>
      <div>
        <h4>Summer</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
          tempore consectetur animi sequi dolore deserunt error nulla officia
          amet! Autem unde voluptas modi ipsa ullam ex facere cupiditate harum
          excepturi? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Ipsam tempore consectetur animi sequi dolore deserunt error nulla
          officia amet! Autem unde voluptas modi ipsa ullam ex facere cupiditate
          harum excepturi?
        </p>
      </div>
    </div>
    <!-- Autumn tab -->
    <!-- Winter tab -->
    <!-- Spring tab -->
  </div>
</div>
```

### CSS Styling

Now, let's add some CSS to style our tabs component. We'll use SCSS for layout and styling to enhance the visual appearance and user interaction. First, we'll add the font, reset our css and assign color variables.

```scss
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

// COLORS

$text: #101927;
$white: #f7f7f7;
$blue: #2955ac;

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
  background: #3ca8c8;
}
```

Now, we can style our tabs using scss.

```scss
// STYLING
.container {
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
  padding: 60px 16px 30px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  font-size: 12px;
  font-weight: 600;
  padding: 10px;
  background: transparent;
  outline: transparent;
  border: transparent;
  color: $text;
  transition: 300ms all ease-in-out;
  @media only screen and (max-width: 576px) {
    padding: 10px 8px;
  }

  &.active {
    color: $blue;
    position: relative;

    &::after {
      content: '';
      width: 100%;
      height: 2px;
      background-color: #2955ac;
      position: absolute;
      bottom: -2px;
      left: 0;
    }
  }
}

.tabs {
  background-color: $white;
  border-radius: 8px;
  padding: 32px 32px 10px 32px;

  &__pills {
    width: fit-content;
    border-bottom: 2px solid rgba($color: $text, $alpha: 0.2);
  }

  &__panels {
    padding: 20px 0;
    > div {
      width: 100%;
      display: none;
      //   display: flex;
      gap: 20px;

      > figure {
        max-width: 400px;
        width: 100%;
        flex-shrink: 0;

        @media only screen and (max-width: 992px) {
          margin: 0 auto;
        }

        img {
          width: 100%;
          display: block;
        }
      }

      > div {
        > h4 {
          font-size: 24px;
          margin: 10px 0;
        }

        > p {
          line-height: 1.8;
        }
      }
    }

    > div.active {
      display: flex;

      @media only screen and (max-width: 978px) {
        flex-direction: column;
      }
    }
  }
}
```

### Adding JavaScript Functionality

Lastly, we'll add JavaScript code to handle tab navigation and toggle the **active** state class of tab buttons and content panels.

```javascript
const tabButtons = document.querySelectorAll('.tabs__pills .btn');
const tabContents = document.querySelectorAll('.tabs__panels > div');

if (tabButtons && tabContents) {
  tabButtons.forEach((tabBtn) => {
    tabBtn.addEventListener('click', () => {
      const tabId = tabBtn.getAttribute('data-id');

      tabButtons.forEach((btn) => btn.classList.remove('active'));
      tabBtn.classList.add('active');

      tabContents.forEach((content) => {
        content.classList.remove('active');

        if (content.id === tabId) {
          content.classList.add('active');
        }
      });
    });
  });
}
```

We've just created a simple tabs component using vanilla JavaScript. You can customize it for your project's needs.

Thank you for reading. If you find the article useful, please do not forget to give a star so that others can access it. Happy Coding! 🙃
