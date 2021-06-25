export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li ");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((item) => {
        item.classList.remove("ativo");
      });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", direcao);
    }

    tabMenu.forEach((img, index) => {
      img.addEventListener("click", () => activeTab(index));
    });
  }
}
initTabNav();
