let search = document.getElementById('search');
let btn = document.querySelector('button');
search.addEventListener(
  'focusin',
  (e) => (e.target.style.background = 'lightgreen')
);
search.addEventListener('focusout', (e) => {
  e.target.style.background = '';
});
let clearInput = () => {
  search.value = '';
  let allList = document.querySelectorAll('#list li');
  for (let i of allList) {
    i.classList.remove('hide');
    i.classList.remove('done');
  }
};
let searchFunction = () => {
  let val = search.value.toLowerCase();
  let allList = document.querySelectorAll('#list li');

  for (let i of allList) {
    let item = i.innerHTML.toLowerCase();
    if (item.indexOf(val) != -1) {
      i.classList.remove('hide');
    } else {
      i.classList.add('hide');
    }
  }
};

document.querySelectorAll('#list').forEach((item) => {
  item.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
  });
});

btn.addEventListener('click', clearInput);
search.addEventListener('keyup', searchFunction);
