/*
function pentagonCalculate() {
  // pentagon p input
  const pentagonPInput = document.getElementById("pentagon-p");
  const pentagonPValue = pentagonPInput.value;
  const pentagonP = parseFloat(pentagonPValue);

  // pentagon d input
  const pentagonBInput = document.getElementById("pentagon-b");
  const pentagonBValue = pentagonBInput.value;
  const pentagonB = parseFloat(pentagonBValue);

  // calculate pentagon
  const pentagonResult = 0.5 * pentagonP * pentagonB;

  const pentagon = document.getElementById("area-result-pentagon");
  pentagon.innerText = pentagonResult;

  pentagonPInput.value = "";
  pentagonBInput.value = "";
}

*/

// use advanced way to doing this

function pantagonCalculate() {
  const pantagonA = id("pentagon-p");
  const pantagonB = id("pentagon-b");

  const result = 0.5 * pantagonA * pantagonB;

  innerTextId("area-result-pentagon", result);
}

function id(params) {
  const inputText = document.getElementById(params);
  const inputValue = inputText.value;
  inputText.value = "";
  return parseFloat(inputValue);
}

function innerTextId(params, resultValue) {
  const text = document.getElementById(params);
  text.innerText = resultValue;
}
