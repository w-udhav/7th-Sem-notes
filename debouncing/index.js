const search = document.getElementById("search");

function getData() {
  console.log(search.value);
}

function debounce(func, timeout = 300) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, timeout);
  };
}

search.addEventListener("input", debounce(getData, 300));
