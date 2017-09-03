
function init() {
  function handle(json) {
    document.querySelector('#id').innerText = json.id;
    document.querySelector('#text').innerText = json.text;
  }

  setTimeout(function() {
    fetch("resource/1.json")
    .then(response => response.json())
    .then(json => handle(json))
  }, 1000)

  setTimeout(function () {
    fetch("resource/2.json")
      .then(response => response.json())
      .then(json => handle(json))
  }, 2000)

  setTimeout(function () {
    fetch("resource/3.json")
      .then(response => response.json())
      .then(json => handle(json))
  }, 5000)
}

init()


