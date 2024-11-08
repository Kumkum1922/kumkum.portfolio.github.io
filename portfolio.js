const portfolioData = {
    resumeLink: "assets/cv.pdf",
    projects: [
        {
            "title": "Project A",
            "description": "This is an awesome project that demonstrates my skills in web development.",
            "link": "https://kumkum1922.github.io/assignment2/"
        },
        {
            "title": "Project B",
            "description": "This is an awesome project that demonstrates my skills in web development.",
            "link": "https://kumkum1922.github.io/Assignment.io/"
        },
        
    ],
    contact: [
        { "type": "Email", "value": "example@example.com" },
        { "type": "Phone", "value": "+123456789" },
    ],
    skills: [
        "HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Git", "Responsive Design","Python","Django"
    ],
    education: [
        {
            "institution": "Govt. Polytechnic Sonipat",
            "degree": "Diploma of Science in Computer Science",
            "year": "2022 - 2025"
        },
        {
            "institution": "Govt. Girls Sr. Sec. School, Mandouri",
            "degree": "Secondary",
            "year": "2021 - 2022"
        }
    ]
};

function renderSkills(skills) {
    const skillsList = document.getElementById('skills-list');

    skills.forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });
}

function renderEducation(education) {
    const educationList = document.getElementById('education-list');

    education.forEach(item => {
        const educationItem = document.createElement('li');
        
        const institution = document.createElement('strong');
        institution.textContent = `${item.institution}: `;

        const degree = document.createElement('span');
        degree.textContent = item.degree ,item.year;

        educationItem.appendChild(institution);
        educationItem.appendChild(degree);
        educationList.appendChild(educationItem);
    });
}

function renderProjects(projects) {
    const projectsSection = document.getElementById('projects');

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        const title = document.createElement('h3');
        title.classList.add('project-title');
        title.textContent = project.title;

        const description = document.createElement('p');
        description.classList.add('project-description');
        description.textContent = project.description;

        const link = document.createElement('a');
        link.href = project.link;
        link.target = "_blank";
        link.textContent = "View Project";
        link.classList.add('project-link');

        projectDiv.appendChild(title);
        projectDiv.appendChild(description);
        projectDiv.appendChild(link);
        projectsSection.appendChild(projectDiv);
    });
}

function renderContact(contactInfo) {
    const contactSection = document.getElementById('contact');

    contactInfo.forEach(info => {
        const contactDiv = document.createElement('div');
        contactDiv.classList.add('contact-info');

        const type = document.createElement('strong');
        type.classList.add('contact-item');
        type.textContent = `${info.type}: `;

        const value = document.createElement('span');
        value.textContent = info.value;

        contactDiv.appendChild(type);
        contactDiv.appendChild(value);
        contactSection.appendChild(contactDiv);
    });
}
function renderResume(link) {
    const resumeSection = document.getElementById('resume');
    const resumeLink = document.createElement('a');
    resumeLink.href = link;
    resumeLink.download = "cv.pdf";
    resumeLink.textContent = "Download My Resume";
    resumeLink.classList.add('download-link');

    resumeSection.appendChild(resumeLink);
}

document.addEventListener('DOMContentLoaded', () => {
    renderSkills(portfolioData.skills);
    renderEducation(portfolioData.education);
    renderProjects(portfolioData.projects);
    renderContact(portfolioData.contact);
    renderResume(portfolioData.resumeLink);

});



