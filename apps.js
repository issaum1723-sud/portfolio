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


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector(".name").value.trim();
        const email = form.querySelector(".email").value.trim();
        const message = form.querySelector(".textarea").value.trim();

        const token = "8774706943:AAFefGqWV4aoIpf5DvYBG0p9Vb0qkDgYU0g";
        const chat_id = "5443883818";
        const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;

        const text = `
📩 Yangi ariza!
👤 Ismi: ${name}
📬 Email: ${email}
💬 Izoh: ${message}
`;

        fetch(telegramUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chat_id,
                text: text,
            }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.ok) {
                    iziToast.success({
                        title: "Yuborildi",
                        message: "Xabar yuborildi!",
                        position: "topRight"
                    });
                    form.reset();
                } else {
                    iziToast.error({
                        title: "Xatolik",
                        message: "Yuborilmadi",
                        position: "topRight"
                    });
                }
            })
            .catch(() => {
                iziToast.error({
                    title: "Xatolik",
                    message: "Internet yoki server muammo",
                    position: "topRight"
                });
            });
    });
});