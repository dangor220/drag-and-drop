const items = document.querySelectorAll('.item');
const placeholders = document.querySelectorAll('.placeholder');

items.forEach((item) => {
  item.addEventListener('dragstart', (event) => {
    setTimeout(() => {
      event.target.classList.add('hide');
      event.target.classList.add('active');
    }, 0);
    event.target.classList.add('hold');
  });

  item.addEventListener('dragend', (event) => {
    event.target.className = 'item';
  });
});

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', (event) => {
    event.preventDefault();
  });
  placeholder.addEventListener('dragenter', (event) => {
    event.target.classList.add('hovered');
  });
  placeholder.addEventListener('dragleave', (event) => {
    event.target.classList.remove('hovered');
  });
  placeholder.addEventListener('drop', (event) => {
    event.currentTarget.append(isActive());
    event.target.classList.remove('hovered');
  });
}

function isActive() {
  for (const item of items) {
    if (item.classList.contains('active')) {
      return item;
    }
  }
}
