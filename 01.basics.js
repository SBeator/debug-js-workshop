
function init() {
  var count = 0;
  
  function addItemToPanel () {
    var panel = document.querySelector('#panel');

    var item = createItem()
    panel.append(item);
  }

  function createItem() {
    var item = document.createElement('li');
    item.innerText = count;
    count++;
    return item;
  }

  var button = document.querySelector('#click-to-expand');
  button.addEventListener('click', addItemToPanel);
}

init()


