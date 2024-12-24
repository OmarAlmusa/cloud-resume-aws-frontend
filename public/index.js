const view_count = document.getElementById("view-count");

const base = document.getElementById('base')
const overlay = document.getElementById('overlay');

const experienceBtn = document.getElementById('experience-btn');
const skillsBtn = document.getElementById('skills-btn');
const projectsBtn = document.getElementById('projects-btn');
const overlay_content = document.getElementById('overlay-content');

const experienceContent = `<button id="close-btn">X</button>
                            <div id="experience-content">
                                <h2>My Experience</h2>
                                <p>Details about my experience...</p>
                            </div>`

const skillsContent = `<button id="close-btn">X</button>
                        <div id="skills-content">
                            <h2>My Skills</h2>
                            <p>Details about my skills...</p>
                        </div>`

const projectsContent = `<button id="close-btn">X</button>
                        <div id="projects-content">
                            <h2>My Projects</h2>
                            <p>Details about my projects...</p>
                        </div>
                        `

// Open overlay and show content
function openOverlay(content) {
    console.log('Opening overlay with content');
    overlay.classList.remove('hide-content');
    overlay_content.innerHTML = content;
    base.classList.add('blur-background');

    const closeBtn = document.getElementById('close-btn');

    closeBtn.addEventListener('click', (event) => {
        console.log('Close button clicked', event.target);
        if (event.target === closeBtn){
            closeOverlay();
        }
    });
}

// Close overlay and reset content
function closeOverlay() {
    console.log('Closing overlay');
    overlay.classList.add('hide-content');
    overlay_content.innerHTML = `<button id="close-btn">X</button>`
    base.classList.remove('blur-background');

}

// Event Listeners
experienceBtn.addEventListener('click', () => {
    console.log('Experience button clicked');
    openOverlay(experienceContent);
});
skillsBtn.addEventListener('click', () => {
    console.log('Skills button clicked');
    openOverlay(skillsContent);
});
projectsBtn.addEventListener('click', () => {
    console.log('Projects button clicked');
    openOverlay(projectsContent);
});

// Close overlay when clicking outside content
overlay.addEventListener('click', (event) => {
    console.log('Overlay clicked', event.target);
    if (event.target === overlay) {
        closeOverlay();
    }
});

let count = 3218941832497432

view_count.innerHTML = `Page views: ${count}`;