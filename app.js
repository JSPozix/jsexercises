let dataObj = document.getElementById('list');

let pre = [];
const code = 'injects3crets';
window.addEventListener('keyup', (e) => {
  console.log(e.keyIdentifier);

  pre.push(e.key);
  if (e.key == 'Escape') {
    pre = [];
  }
  pre.splice(-code.length - 1, pre.length - code.length);
  if (pre.join('').includes(code)) {
    let anwser = window.confirm('top secret...');
    if (anwser) {
      let data = fetch('https://api.github.com/repos/elixir-lang/elixir/issues')
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          return json;
        });
      data.then((res) => {
        res.slice(0, 5).map((r) => {
          const item = document.createElement('li');
          item.classList.add('list-group-item');
          const itemTitle = document.createElement('h2');
          const itemBody = document.createElement('p');
          itemTitle.innerText = r.number;
          itemBody.innerText = r.user.login;
          item.appendChild(itemTitle);
          item.appendChild(itemBody);

          dataObj.appendChild(item);
          setTimeout(() => {
            item.style.display = 'none';
          }, 15000);
        });
      });
    } else {
      cornify_add();
    }
  }
});
