const projects = [
    {
        title: "Dynamic Visualizations",
        date: "2023",
        type: "university", // or 'personal'
        description: "A project exploring data visualization with D3.js.",
        visualization: "..." // placeholder for your visualization code
    },
    {
        title: "Personal Blog Engine",
        date: "2022",
        type: "personal",
        description: "Built a custom blog from scratch.",
        visualization: "..."
    }
];

const timelineContainer = document.querySelector('.timeline-container');

projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.className = 'timeline-item'; // or whatever class you define

    // Create the timeline node with the correct color
    const node = document.createElement('div');
    node.className = `timeline-node ${project.type}-project`;
    projectElement.appendChild(node);

    // Create the content block for the project
    const contentBlock = document.createElement('div');
    contentBlock.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.date}</p>
        <p>${project.description}</p>
        <div class="visualization-area">
            </div>
    `;
    projectElement.appendChild(contentBlock);

    timelineContainer.appendChild(projectElement);
});
