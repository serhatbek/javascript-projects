const triggers = document.querySelectorAll('.trigger');

const openTooltip = (e) => {
  const tooltip = e.target.querySelector('[role=tooltip]');
  tooltip.classList.add('active');
};

const closeTooltip = (e) => {
  const tooltip = e.target.querySelector('[role=tooltip]');
  tooltip.classList.remove('active');
};

if (triggers) {
  triggers.forEach((trigger) => {
    let tooltip = document.createElement('span');

    tooltip.setAttribute('role', 'tooltip');
    tooltip.setAttribute('inert', true);
    tooltip.textContent = trigger.dataset.tooltip;

    trigger.appendChild(tooltip);

    trigger.addEventListener('mouseenter', openTooltip);
    trigger.addEventListener('mouseleave', closeTooltip);
  });
}
