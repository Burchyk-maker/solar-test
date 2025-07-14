const powerGeneration = 1700;
const costStation = 17600;

const powerSlider = document.getElementById("powerSlider");
//console.log(powerSlider.value);
const tariffSlider = document.getElementById("tariffSlider");
const annualGeneration = document.getElementById("annualGeneration");
const stationCost = document.getElementById("stationCost");
const annualSaving = document.getElementById("annualSaving");

function updateCalculations() {
  const power = powerSlider.value;
  const tarif = tariffSlider.value;

  //щорічна генерація :1700 кВт * 1 квт мощншсти(поверслайдер)
  let generation = powerGeneration * power;
  annualGeneration.value = generation;

  // оринтована вартість станції: 17 600 * 1 квт(поуверслайдер)
  let cost = costStation * power;
  stationCost.value = cost;

  // щорічна єкономія : щорічна генерація * тариф(таріфслайдер)
  let saving = generation * tarif;
  annualSaving.value = saving;

  //окупність : оринтована вартість станції/щорічна єкономія
  let economy = cost / saving;
  payback.value = economy.toFixed(2);
}

powerSlider.addEventListener("input", updateCalculations);
tariffSlider.addEventListener("input", updateCalculations);
//иницилизация при загрузке
updateCalculations();
