![Vanilla JavaScript - Modal](https://raw.githubusercontent.com/serhatbek/javascript-projects/main/Modal/modal.png)

# Vanilla JavaScript - Modal

In this article, we'll build a modal using vanilla JavaScript, HTML, and SCSS that will include features like opening and closing with a button, and closing when clicking outside of the modal content.

Before we start I'd like mention that I used:

- [Boxicons](https://boxicons.com/) for icons.
- [Google Fonts](https://fonts.google.com) Roboto.
- [SCSS (SASS)](https://sass-lang.com/) for styling.
- [BEM methodology](https://getbem.com/introduction) for reusability of css for tooltip.

### Modal HTML Structure

The HTML structure of the modal includes a button to trigger the modal and the modal itself with an overlay and content area.

```html
<!-- Add Boxicons to html head tag -->
<link
  href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
  rel="stylesheet"
/>

<body class="container">
  <button class="btn js-show-modal">
    Show Modal
    <i class="bx bx-right-arrow-alt"></i>
  </button>

  <div class="modal js-modal">
    <div class="modal__overlay"></div>
    <div class="modal__content">
      <button class="modal__close js-close-modal">
        <i class="bx bx-x-circle"></i>
      </button>

      <h4>Lorem ipsum dolor sit amet consectetur adipisicing!</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo hic
        earum possimus itaque, aperiam tenetur quo ducimus doloremque maxime
        voluptas natus laudantium nemo maiores ex ipsam quis. Nobis atque
        incidunt esse architecto cupiditate quis neque ipsa animi deserunt
        commodi perspiciatis aperiam nemo dignissimos libero, fugit dolorum
        similique quas, ducimus ad?
      </p>
      <div class="modal__action">
        <button class="btn js-close-modal">Close</button>
      </div>
    </div>
  </div>
</body>
```

### SCSS Styling

The SCSS for the modal ensures it is visually appealing and functions correctly when opened and closed.

```scss
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

// COLORS
// $black: #202b2f;
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
  background-color: $grayish-blue;
  color: $white;

  &.overflowHidden {
    overflow: hidden;
  }
}

// STYLES
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  font-size: 14px;
  color: $white;
  padding: 8px 16px;
  background-color: $blue;
  border: 0;
  cursor: pointer;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  > i {
    font-size: 18px;
  }
}

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  user-select: none;
  pointer-events: none;
  z-index: -22;
  transition: all 200ms ease-in-out;

  &--opened {
    opacity: 1;
    user-select: auto;
    pointer-events: all;
    z-index: 1;
  }

  &__overlay {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba($color: $black2, $alpha: 0.8);
    z-index: 11;
  }

  &__close {
    border: 0;
    outline: 0;
    background-color: transparent;
    font-size: 24px;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;

    > i {
      font-size: 34px;
      color: $pink;
    }
  }

  &__content {
    background-color: $white;
    color: $black2;
    max-width: 600px;
    width: 100%;
    padding: 30px;
    border-radius: 8px;
    z-index: 22;
    position: relative;

    > h4 {
      font-size: 18px;
      margin: 30px 0;
    }

    > p {
      margin-bottom: 20px;
    }
  }

  &__action {
    text-align: right;
  }
}
```

### Adding JavaScript Functionality

The JavaScript code handles the opening and closing of the modal, including the feature to close the modal when clicking outside of it. We add an event listener to the button with the class **js-show-modal**. When this button is clicked, the **modal--opened** class is added to the modal, making it visible.Then we add event listeners to all elements with the class **js-close-modal**. When any of these elements are clicked, the **modal--opened** class is removed, hiding the modal. Lastly, We add an event listener to the document. If the modal is open and the user clicks outside the modal content (but not on the trigger button), the modal will close.

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.js-modal'),
    openModalBtn = document.querySelector('.js-show-modal'),
    closeModalBtns = document.querySelectorAll('.js-close-modal'),
    body = document.querySelector('body');

  const closeModal = () => {
    modal.classList.remove('modal--opened');
    body.classList.remove('overflowHidden');
    document.removeEventListener('keydown', handleEscClose);
  };

  const openModal = () => {
    modal.classList.add('modal--opened');
    body.classList.add('overflowHidden');
    document.addEventListener('keydown', handleEscClose);
  };

  const handleEscClose = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  if (modal) {
    openModalBtn.addEventListener('click', openModal);
    closeModalBtns.forEach((btn) => btn.addEventListener('click', closeModal));
  }

  document.addEventListener('click', (event) => {
    if (
      modal.classList.contains('modal--opened') &&
      !event.target.closest('.modal__content') &&
      !event.target.closest('.js-show-modal')
    ) {
      closeModal();
    }
  });
});
```

We've just created a simple modal component using vanilla JavaScript. You can customize it for your project's needs.

Thank you for reading. If you find the article useful, please do not forget to give a star so that others can access it too. Happy Coding! 🙃
