const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.innerHTML = 
    "Below is a <strong>dynamic list</strong>.<br>" +
    "Click anywhere on the page to <strong>add a new list item</strong>.<br>" +
    "To Modify, click an existing list item to <strong>change its text</strong>.<br>"
 ;


document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('What content do you want the list item to have?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('Enter new content for your list item');
    this.textContent = listContent;
  }
}