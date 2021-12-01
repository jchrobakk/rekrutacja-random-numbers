const btn = document.querySelector("button");

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

btn.addEventListener("click", handleClick);

function handleClick() {
  clearLists();
  const randomNumbers = [];
  for (let i = 0; i < 20; i++) {
    randomNumbers.push(generateRandomNumber());
  }
  const evenNumbers = getEvenNumbers(randomNumbers);
  const oddNumbers = getOddNumbers(randomNumbers);

  renderNumbers(evenNumbers, "even");
  renderNumbers(oddNumbers, "odd");
}

function getEvenNumbers(arr) {
  const evenNumbers = [];
  arr.forEach(function (number) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  });
  return evenNumbers.sort((a, b) => a - b);
}

function getOddNumbers(arr) {
  const oddNumbers = [];
  arr.forEach(function (number) {
    if (number % 2 !== 0) {
      oddNumbers.push(number);
    }
  });
  return oddNumbers.sort((a, b) => a - b);
}

function renderNumbers(numbersList, numbersType) {
  const ul = document.querySelector(`.${numbersType}-numbers__list`);
  numbersList.forEach((number) => {
    const li = document.createElement("li");
    li.textContent = number;
    ul.appendChild(li);
  });
}

function clearLists() {
  const lists = document.querySelectorAll(".numbers-list");
  lists.forEach((list) => {
    list.innerHTML = "";
  });
}
