(() => {
    let isSidebarShown = false, isMoreShown = false;
    const revealButton = document.querySelector(".side-panel.is-reveal-button");
    const sideBar = document.querySelector(".side-panel:not(.is-reveal-button):not(.is-article)");


    revealButton.addEventListener("click", () => (isSidebarShown = !isSidebarShown) ? (sideBar.classList.add("is-article"), revealButton.children[0].innerText = "Hide the sidebar ⬆️") : (sideBar.classList.remove("is-article"), revealButton.children[0].innerText = "Reveal the sidebar ⬇️"));
})();