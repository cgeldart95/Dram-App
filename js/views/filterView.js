const distilleryBtn = document.getElementById(
  'distilleryBtn'
);
const independentBtn = document.getElementById(
  'independentBtn'
);

function toggleExclusive(selected, other) {
  if (selected.classList.contains('active')) {
    selected.classList.remove('active');
    other.classList.remove('disabled');
  } else {
    selected.classList.add('active');
    other.classList.add('disabled');
    other.classList.remove('active');
  }
}

distilleryBtn.addEventListener('click', () => {
  toggleExclusive(distilleryBtn, independentBtn);
});

independentBtn.addEventListener('click', () => {
  toggleExclusive(independentBtn, distilleryBtn);
});
