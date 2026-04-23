const elements = document.querySelectorAll(
    ".hero, .about, .skills, .projects, .team, .family, .friends, .project-card, .skill, .member, .family-card, .friend"
);

elements.forEach(el => {
    el.classList.add("hidden");
});

function showOnScroll() {
    const trigger = window.innerHeight * 0.85;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();