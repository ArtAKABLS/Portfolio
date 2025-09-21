// Select all timeline nodes
const nodes = document.querySelectorAll('.timeline-node');

nodes.forEach((node, index) => {
  node.addEventListener('click', () => {
    const content = node.nextElementSibling;
    content.classList.toggle('active');
  });
});
