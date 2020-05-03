import './import/modules';
import './import/components';

function showPopup() {
  const popup = document.querySelector('.popup');
  if (!popup) {
    return;
  }
  popup.classList.remove('hidden');
}

function hidePopup() {
  const popup = document.querySelector('.popup');
  if (!popup) {
    return;
  }
  popup.classList.add('hidden');

  document.body.classList.remove('blocked');
}

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('submit-order');
  const button2 = document.getElementById('popup-button');
  if (button && button2) {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      showPopup();
    });
    button2.addEventListener('click', hidePopup);
  }
});

function validateForm() {
  const fieldset = document.querySelector('.active-form');
  if (!fieldset) {
    return;
  }
  const inputs = fieldset.querySelectorAll('input:required');
  if (!inputs) {
    return;
  }
  const button = document.getElementById('submit-order');
  if (!button) {
    return;
  }
  const length = inputs.length;
  for (let i = 0; i < length; i++) {
    if (inputs[i].value === '') {
      if (!button.classList.contains('disabled')) {
        button.classList.add('disabled');
      }
      return;
    }
  }

  if (button.classList.contains('disabled')) {
    button.classList.remove('disabled');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const listName = '.checkout__customer-details';
  const lists = document.querySelectorAll(listName);
  if (!lists) {
    return;
  }
  lists.forEach((list) => {
    const length = list.children.length;
    for (let i = 0; i < length; i++) {
      const input = list.children.item(i).querySelector('input');
      if (input) {
        input.addEventListener('focus', function (e) {
          const label = e.target.parentNode.querySelector('label');
          if (label) {
            label.classList.add('active');
          }
        });

        input.addEventListener('blur', function (e) {
          if (e.target.value === '') {
            const label = e.target.parentNode.querySelector('label');
            if (label) {
              label.classList.remove('active');
            }
          }
        });

        input.addEventListener('input', validateForm);
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const name = '.checkout__radiobutton';
  const buttons = document.querySelectorAll(name);
  if (!buttons) {
    return;
  }
  function handler() {
    const buttons = document.querySelectorAll(name);
    if (buttons) {
      buttons.forEach((button) => {
        const fieldset = button.parentNode.querySelector('fieldset');
        const input = button.querySelector('input');
        if (fieldset && input) {
          if (input.checked) {
            fieldset.disabled = false;
            fieldset.classList.add('active-form');
          } else {
            fieldset.disabled = true;
            fieldset.classList.remove('active-form');
          }
        }
      });
    }

    validateForm();
  }

  buttons.forEach((button) => {
    const input = button.querySelector('input');
    if (input) {
      input.addEventListener('change', handler);
    }
  });

  handler();
});
