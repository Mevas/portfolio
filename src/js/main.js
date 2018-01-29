const statements = [{
  input: 'Alex.current_location',
  return: '"Bucharest, Romania"',
},
{
  input: 'Alex.education',
  return: '{"High school": "Liceul Teoretic Al. I. Cuza, Sector 3, Bucharest"}',
},
{
  input: 'Alex.interests',
  return: '{"Programming", "Science", "Gaming"}',
},
{
  input: 'Alex.skills',
  return: '{"HTML5", "CSS3", "JavaScript", "Python", "C#", "C++"}',
},
];
// https://pbs.twimg.com/profile_images/802981289771016193/7F3ZaKNQ.jpg - place-holder
const projects = [{
  title_en: 'Portfolio',
  title_ro: 'CV',
  description_en: 'This page! Responsive website made with nothing other than pure HTML5, CSS3 and JavaScript, auto-generates content for easy maintenance.',
  description_ro: 'Pagina aceasta! Website responsive creat cu HTML5, CSS3 și JavaScript pur, generează conținutul automat pentru o ușoară mentenanță.',
  skills: ['HTML5', 'CSS3', 'JavaScript'],
  screenshot: 'src/images/portfolio.png',
  links: {
    github: 'https://github.com/Mevas/portfolio/',
    preview: 'https://mevas.github.io/portfolio/',
  },
}];

const contactInfo = [{
  name: 'LinkedIn',
  url: 'https://www.linkedin.com/',
},
{
  name: 'GitHub',
  url: 'https://github.com/Mevas',
},
];

const speed = 75;
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

function createProjectCard({
  title_en,
  title_ro,
  description_en,
  description_ro,
  skills,
  screenshot,
  links,
}) {
  document.getElementById('projects-container').innerHTML +=
    `<div class="project-card">
      <div class="project-image" style="background: url(${screenshot}) 0% 0% / cover no-repeat;"></div>
      <div class="project-content">
        <div class="project-info">
          <h1 class="project-title localize" lang="en">${title_en}</h1>
          <h1 class="project-title localize" lang="ro">${title_ro}</h1>
          <p class="project-description localize" lang="en">${description_en}</p>
          <p class="project-description localize" lang="ro">${description_ro}</p>
          <div id="project-skills-${title_en}" class="project-skills">

          </div>
        </div>
        <div class="project-links">
          <a href="${links.github}"><span class="localize" lang="en">View Code</span><span class="localize" lang="ro">Codul </span></a>
          <a href="${links.preview}"><span class="localize" lang="en">Explore Demo</span><span class="localize" lang="ro">Demo</span></a>
        </div>
      </div>
    </div>`;
  skills.forEach((skill) => {
    document.getElementById(`project-skills-${title_en}`).innerHTML += `<span class="project-skill">${skill}</span>`;
  });
}

projects.forEach((project) => {
  createProjectCard(project);
});

function createStatement(inputStat, returnStat) {
  document.getElementsByClassName('terminal-window')[0].innerHTML += `
  <div class="statement">
    <div class="input-statement">> ${inputStat}</div>
    <div class="return-statement">${returnStat}</div>
  </div>
  `;
}

statements.forEach((statement) => {
  createStatement(statement.input, statement.return);
});
createStatement('<span class="caret">&nbsp;</span>', '');

function createContact(name, url) {
  document.getElementsByClassName('contact-info')[0].innerHTML += `
  <div class="separator contact-separator"></div>
  <a href="${url}">${name}</a>
  `;
}

contactInfo.forEach((contact) => {
  createContact(contact.name, contact.url);
});

function selectLanguage(language) {
  i = 0;
  document.getElementById('main-title').innerHTML = '> ';
  if (language === 'en') {
    typeWriter('main-title', 'Welcome');
  } else {
    typeWriter('main-title', 'Bun venit');
  }

  Array.from(document.getElementsByClassName('localize')).forEach((element) => {
    if (element.lang === language) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
}

selectLanguage('en');

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
