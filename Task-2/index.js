const generateNumbersRange = (from, to) => {
  const result = [];

  for (let i = from; i <= to; i++) {
    result.push(i);
  }

  return result;
};

const getLineSeats = () =>
  generateNumbersRange(1, 10)
    .map(
      (seatNumber) =>
        `<div 
      class="sector__seat" 
      data-seat-number='${seatNumber}'></div>`
    )
    .join('');

function getSectorLine() {
  const seatsString = getLineSeats();
  return generateNumbersRange(1, 10)
    .map(
      (lineNumber) =>
        `<div 
      class="sector__line" 
      data-line-number='${lineNumber}'>${seatsString}</div>`
    )
    .join('');
}

function renderArena() {
  const arenaElem = document.querySelector('.arena');

  const lineString = getSectorLine();

  const sectorsString = generateNumbersRange(1, 3)
    .map(
      (sectorNumber) =>
        `<div 
      class="sector" 
      data-sector-number='${sectorNumber}'>${lineString}</div>`
    )
    .join('');

  arenaElem.innerHTML = sectorsString;
}

renderArena();
