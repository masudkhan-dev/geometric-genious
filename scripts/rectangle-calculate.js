function rectangleCalculate() {
  // rectangle width
  const rectangleWidthInput = document.getElementById("rectangle-width");
  const rectangleWidthValue = rectangleWidthInput.value;
  const rectangleWidth = parseFloat(rectangleWidthValue);

  // rectangle length
  const rectangleLengthInput = document.getElementById("rectangle-length");
  const rectangleLengthValue = rectangleLengthInput.value;
  const rectangleLength = parseFloat(rectangleLengthValue);

  // rectangle calculate
  const rectangle = rectangleWidth * rectangleLength;

  const rectangleResult = document.getElementById("area-result-rectangle");
  rectangleResult.innerText = rectangle;
}
