let posts = document.getElementById('dataPosts');

let dataObj;
const data = fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    dataObj = json.slice(0, 3);
    return dataObj;
  });

const genData = () => {
  dataObj.map((post) => {
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    const itemTitle = document.createElement('h2');
    const itemBody = document.createElement('p');
    let delBtn = document.createElement('button');
    delBtn.classList.add('btn');
    delBtn.classList.add('btn-danger');
    delBtn.innerText = 'x';
    itemTitle.innerText = post.title;
    itemBody.innerText = post.body;
    item.appendChild(itemTitle);
    item.appendChild(itemBody);
    item.appendChild(delBtn);
    posts.appendChild(item);
  });
};

const addPost = () => {
  let pTitle = document.getElementById('postTitle');
  let pBody = document.getElementById('postBody');
  let objPost = {
    id: Math.floor(Math.random() * 100),
    title: pTitle.value,
    body: pBody.value,
  };
  if (pTitle.value != '' && pBody.value != '') {
    dataObj.push(objPost);
    let list = document.createElement('li');
    list.classList.add('list-group-item');
    let itemTitle = document.createElement('h2');
    let itemBody = document.createElement('p');
    let delBtn = document.createElement('button');
    delBtn.classList.add('btn');
    delBtn.classList.add('btn-danger');
    delBtn.innerText = 'x';
    itemTitle.innerText = objPost.title;
    itemBody.innerText = objPost.body;
    list.appendChild(itemTitle);
    list.appendChild(itemBody);
    list.appendChild(delBtn);
    posts.appendChild(list);
    pTitle.value = '';
    pBody.value = '';
    $('.modal-backdrop').remove();
    $('#exampleModal').modal('hide');
    alert('post added');
  } else {
    alert('fill up data');
  }
};

window.addEventListener('load', () => {
  setTimeout(genData, 1000);
});

const delPost = (e) => {
  const li = e.target.parentElement;
  li.parentNode.removeChild(li);
};
posts.addEventListener('click', delPost);

let btn = document.querySelector('#add').addEventListener('click', addPost);
