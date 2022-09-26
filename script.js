// api Getting Code

const api_url =
  "https://api.themoviedb.org/3/movie/popular?api_key=d8d436ca878e548c5f0a4b2514f1e60b";

async function getApi(url) {
  const response = await fetch(url);

  let data = await response.json();

  add(data);
}

getApi(api_url);

function add(data) {
  const title = document.getElementsByClassName("catalog-item-title");
  const release_date = document.getElementsByClassName("catalog-item-date");
  console.log(data.results.length);

  for (let i = 0; i < data.results.length; i++) {
    title[i].innerHTML = data.results[i].title;
    release_date[i].innerHTML = data.results[i].release_date;
  }
}

// Catalog Scroll Code

const catalog = document.querySelector(".catalog");

catalog.addEventListener("mousedown", (e) => startDragging(e, catalog));
catalog.addEventListener("mousemove", (e) => mouseMoveEvent(e, catalog));

catalog.addEventListener("mouseup", stopDragging);
catalog.addEventListener("mouseleave", stopDragging);

let mouseDown = false;
let startX, scrollLeft;

function startDragging(e, container) {
  mouseDown = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
}

function stopDragging() {
  mouseDown = false;
}

function mouseMoveEvent(e, container) {
  e.preventDefault();
  if (!mouseDown) return;
  const x = e.pageX - container.offsetLeft;
  const scroll = x - startX;
  container.scrollLeft = scrollLeft - scroll;
}
