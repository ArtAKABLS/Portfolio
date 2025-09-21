// Allow clicking node OR title to expand
const items = document.querySelectorAll('.timeline-item');

items.forEach((item) => {
  const node = item.querySelector('.timeline-node');
  const header = item.querySelector('.timeline-header');
  const content = item.querySelector('.timeline-content');

  function toggleContent() {
    content.classList.toggle('active');
  }

  node.addEventListener('click', toggleContent);
  header.addEventListener('click', toggleContent);
});
