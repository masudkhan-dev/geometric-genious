function parallelogramCalculate() {
  // base input
  const parallelogramBaseInput = document.getElementById("parallelogram-base");
  const parallelogramBaseValue = parallelogramBaseInput.value;
  const parallelogramBase = parseFloat(parallelogramBaseValue);

  // height input
  const parallelogramHeightInput = document.getElementById(
    "parallelogram-height"
  );
  const parallelogramHeightValue = parallelogramHeightInput.value;
  const parallelogramHeight = parseFloat(parallelogramHeightValue);

  // calculate parallelogram
  const parallelogramResult = parallelogramBase * parallelogramHeight;

  // display the result
  const parallelogram = document.getElementById("area-result-parallelogram");
  parallelogram.innerText = parallelogramResult;
}
