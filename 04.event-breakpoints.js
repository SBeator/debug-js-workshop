
function init() {
  var count = 0;

  function addItemToPanel() {
    var panel = document.querySelector('#panel');

    var item = createItem()
    panel.append(item);
  }

  function removeItemFromPanel() {
    var item = document.querySelector('#panel li');
    item && item.remove();
  }

  function changeColor() {
    var randomColor = '#' + Math.floor(Math.random() * 0xFFF).toString(16);

    var panel = document.querySelector('#panel');
    panel.style.color = randomColor;
  }

  function createItem() {
    var item = document.createElement('li');
    item.innerText = count;
    count++;
    return item;
  }

  document.querySelector('#click-to-expand').addEventListener('click', addItemToPanel);
  document.querySelector('#click-to-remove').addEventListener('click', removeItemFromPanel);
  document.querySelector('#click-to-color').addEventListener('click', changeColor);

  $('#click-to-expand2').click(addItemToPanel);
  $('#click-to-remove2').click(removeItemFromPanel);
  $('#click-to-color2').click(changeColor);

  function logEvent(event) {
    console.log(event.type)
    
  }
  document.querySelector('#panel').addEventListener('mouseover', logEvent)
  document.querySelector('#panel').addEventListener('mouseenter', logEvent)
  document.querySelector('#panel').addEventListener('mouseleave', logEvent)
  document.querySelector('#panel').addEventListener('mouseout', logEvent)

  
  window.addEventListener('click', function() {
    console.log('Window is clicked!')
  })
}

init()


