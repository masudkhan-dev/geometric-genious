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
