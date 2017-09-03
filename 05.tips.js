
function init() {
  var count = 0;

  function addItemToPanel() {
    var panel = document.querySelector('#panel');

    var item = createItem()
    panel.append(item);
  }

  function createItem() {
    var item = document.createElement('li');
    item.innerText = count;
    count++;

    console.assert(count % 2, 'count is: ' + count);

    return item;
  }

  function showConsoleTime() {
    console.time('Time:');

    var test = [];

    for (var i = 0; i < 10000; i++ ) {
      test.push(i);
    }

    test = null;

    console.timeEnd('Time:');
  }

  function showDataAsTable() {
    var data = [
      {
        id: 1,
        city: 'Melbourne',
        country: 'Austrilia'
      },
      {
        id: 2,
        city: 'Chengdu',
        country: 'China'
      },
      {
        id: 3,
        city: 'Sydney',
        country: 'Austrilia'
      },
    ];

    console.table(data);
  }

  document.querySelector('#click-to-expand').addEventListener('click', addItemToPanel);
  document.querySelector('#click-for-time').addEventListener('click', showConsoleTime);
  document.querySelector('#click-for-table').addEventListener('click', showDataAsTable);
}

init()


