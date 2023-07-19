async function getData(filename) {
    const response = await fetch(filename);
    const jsonData = await response.json();
    return jsonData;
}

const projectContainer = document.querySelector('.projects-container');

const data = getData('./data/projects.json');

data.then(data => {
    for (let project of data) {
        let projectElement = document.createElement('div')
        projectElement.classList.add('project');
        projectElement.innerHTML = `
        <h3>${project.name}</h3>
        <div class="project-img-container"><img src="${project.image}"
                alt="kalyhub-screenshot"></div>
        <p>${project.description}</p>
        <ul class="project__links">
            <li><a href="#">Project details</a></li>
            <li><a href="${project.github}"><i class="fab fa-github"></i></a></li>
        </ul>
    `;
        let projectStack = document.createElement('ul')
        projectStack.classList.add('project__stack-list');
        for (let stackItem of project.stack) {
            let stackItemElement = document.createElement('li')
            stackItemElement.classList.add('project__stack-item');
            stackItemElement.innerText = stackItem;
            projectStack.appendChild(stackItemElement);
        }
        projectElement.appendChild(projectStack);
        projectContainer.appendChild(projectElement);
    }

});
