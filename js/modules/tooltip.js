export default function initTooltip() {}

const tooltips = document.querySelectorAll("[data-tooltip]");

tooltips.forEach((item) => {
  item.addEventListener("mouseover", onMouseOver);
});
function onMouseOver(event) {
  const toolTipBox = criarTooltipBox(this);
  onMouseMove.toolTipBox = toolTipBox;
  onMouseLeave.toolTipBox = toolTipBox;
  this.addEventListener("mousemove", onMouseMove);
  onMouseLeave.element = this;
  this.addEventListener("mouseleave", onMouseLeave);
}
const onMouseLeave = {
  handleEvent() {
    this.toolTipBox.remove();
    this.element.removeEventListener("mouseleave", onMouseLeave);
    this.element.removeEventListener("mousemove", onMouseMove);
  },
};
const onMouseMove = {
  handleEvent(event) {
    this.toolTipBox.style.top = event.pageY + 20 + "px";
    this.toolTipBox.style.left = event.pageX + 20 + "px";
  },
};
function criarTooltipBox(element) {
  const toolTipBox = document.createElement("div");
  const text = element.getAttribute("aria-label");
  toolTipBox.classList.add("tooltip");
  toolTipBox.innerText = text;
  document.body.appendChild(toolTipBox);
  return toolTipBox;
}
