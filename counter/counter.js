let counter = document.querySelector("#counter");
let lowBtn = document.querySelector(".lowBtn");
let addBtn = document.querySelector(".addBtn");
let number = 0;
counter.innerHTML = number;
lowBtn.addEventListener("click", minusNumber);
addBtn.addEventListener("click", addNumber);

function minusNumber() {
number--;
counter.innerHTML = number;
}

function addNumber() {
  number++;
  counter.innerHTML = number;
}


