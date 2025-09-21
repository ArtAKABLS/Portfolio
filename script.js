// Select all nodes
const nodes = document.querySelectorAll('.timeline-node');

nodes.forEach((node) => {
  node.addEventListener('click', () => {
    const content = node.parentElement.querySelector('.timeline-content');
    content.classList.toggle('active');
  });
});
