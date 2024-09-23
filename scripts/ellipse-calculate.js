function ellipseCalculate() {
  // ellipse a input
  const ellipseAInput = document.getElementById("ellipse-a");
  const ellipseAValue = ellipseAInput.value;
  const ellipseA = parseFloat(ellipseAValue);

  // ellipse b input
  const ellipseBInput = document.getElementById("ellipse-b");
  const ellipseBValue = ellipseBInput.value;
  const ellipseB = parseFloat(ellipseBValue);

  // calculate ellipse
  const ellipseResult = Math.PI.toFixed(4) * ellipseA * ellipseB;

  // display the result
  const ellipse = document.getElementById("area-result-ellipse");
  ellipse.innerText = ellipseResult;
}
