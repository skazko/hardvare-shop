document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.showMore');

  if (buttons) {
    buttons.forEach((button) => {
      const link = button.querySelector('.showMoreLink');
      if (link) {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const list = e.target
            .closest('.showMoreList')
            .querySelectorAll('.hidden');
          if (list) {
            list.forEach((item) => item.classList.remove('hidden'));
          }
          const li = e.target.closest('.showMore');
          if (li) {
            li.remove();
          }
        });
      }
    });
  }
});
