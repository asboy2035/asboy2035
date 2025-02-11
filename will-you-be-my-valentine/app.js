function show(id) {
  document.getElementById(id).classList.remove('hidden');
}

function scalePadding(selector, factor = 1.2) {
  const element = document.querySelector(selector);
  if (!element) return;
  const computedStyle = window.getComputedStyle(element);
  let padding = parseFloat(computedStyle.padding);

  let newPadding = padding * factor;
  element.style.padding = `${newPadding}px`;
}