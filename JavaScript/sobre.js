document.addEventListener("DOMContentLoaded", () => {
    const serviceSections = document.querySelectorAll(".servico");

    serviceSections.forEach(service => {
        const toggleButton = service.querySelector(".servicos");
        const contentSection = service.querySelector(".servicos-section.-sobre");
        const iconShow = service.querySelector(".icon-sobre.-mais");
        const iconHide = service.querySelector(".icon-sobre.-menos");

        toggleButton.addEventListener("click", () => {
            serviceSections.forEach(otherService => {
                const otherContent = otherService.querySelector(".servicos-section.-sobre");
                const otherIconShow = otherService.querySelector(".icon-sobre.-mais");
                const otherIconHide = otherService.querySelector(".icon-sobre.-menos");
                if (otherService !== service) {
                    otherContent.classList.remove("show");
                    otherIconShow.style.display = "flex";
                    otherIconHide.style.display = "none";
                }
            });
            if (contentSection.classList.contains("show")) {
                contentSection.classList.remove("show");
                iconShow.style.display = "flex";
                iconHide.style.display = "none";
            } else {
                contentSection.classList.add("show");
                iconShow.style.display = "none";
                iconHide.style.display = "flex";
            }
        });
    });
});
//iniciado teste