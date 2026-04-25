(function () {
  const hero = document.querySelector('[data-hero-image]');
  document.querySelectorAll('[data-thumb-src]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = btn.getAttribute('data-thumb-src');
      if (hero && next) hero.src = next;
    });
  });

  document.querySelectorAll('[data-option-group]').forEach((group) => {
    group.querySelectorAll('.option').forEach((option) => {
      option.addEventListener('click', () => {
        group.querySelectorAll('.option').forEach((o) => o.classList.remove('active'));
        option.classList.add('active');
      });
    });
  });
})();
