function Project(title, image, description) {
  this.title = title;
  this.image = image;
  this.description = description;
}

function createProjectCard({
  title,
  image,
  description,
}) {
  document.getElementById('projects-container').innerHTML +=
    `<div class="project-card">
      <div class="project-image" style="background: url(${image}) 0% 0% / cover no-repeat;"></div>
      <div class="project-content">
        <div class="project-info">
          <h1 class="project-title">${title}</h1>
          <p class="project-description">${description}</p>
          <div class="project-skills">
            <span class="project-skill">HTML5</span>
            <span class="project-skill">CSS3</span>
            <span class="project-skill">JavaScript</span>
          </div>
        </div>
        <div class="project-links">
          <button href="#">View Code</button>
          <button href="#">Explore Demo</button>
        </div>
      </div>
    </div>`;
}

const project1 = new Project('Portfolio', 'https://pbs.twimg.com/profile_images/802981289771016193/7F3ZaKNQ.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet eros id sapien congue ultricies nec sed massa. Fusce non ornare nibh, eget fermentum nulla. Vivamus scelerisque nulla sapien, sed blandit nisl porta non. Morbi gravida posuere sagittis. Nulla et ipsum magna. Praesent sit amet enim feugiat, imperdiet leo.');

for (let index = 0; index < 3; index += 1) {
  createProjectCard(project1);
}

function createStatement(inputStat, returnStat) {
  document.getElementsByClassName('terminal-window')[0].innerHTML += `
  <div class="statement">
    <div class="input-statement">> ${inputStat}</div>
    <div class="return-statement">${returnStat}</div>
  </div>
  `;
}

createStatement('Alex.currentLocation', '"Bucharest, Romania"');
createStatement('Alex.education', '{"High school": "Liceul Teoretic Al. I. Cuza, Sector 3, Bucharest"}');
createStatement('Alex.interests', '{"Science", "Programming", "Gaming"}');
createStatement('Alex.skills', '{"HTML5", "CSS3", "JavaScript", "Python", "C#", "C++"}');
createStatement('<span class="caret">&nbsp;</span>', '');

const speed = 50;
let i = 0;
const caret = '<span class="caret">&nbsp;</span>';

function typeWriter(elementId, string) {
  const element = document.getElementById(elementId);
  if (i < string.length) {
    element.innerHTML += string.charAt(i);
    i += 1;
    setTimeout(typeWriter, speed, elementId, string);
  }
  element.innerHTML = element.innerHTML.replace(caret, '');
  element.innerHTML += caret;
}

typeWriter('main-title', 'Mevas Inc.');

function getPos(el) {
  const rect = el.getBoundingClientRect();
  return {
    x: rect.left,
    y: rect.top,
  };
}

const coords = getPos(document.querySelector('#contact'));
console.log(coords.x);
console.log(coords.y);
