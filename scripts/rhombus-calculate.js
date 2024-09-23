function rhombusCalculate() {
  // rhombus d1
  const rhombusD1Input = document.getElementById("rhombus-d1");
  const rhombusD1Value = rhombusD1Input.value;
  const rhombusD1 = parseFloat(rhombusD1Value);

  // rhombus-d2
  const rhombusD2Input = document.getElementById("rhombus-d2");
  const rhombusD2Value = rhombusD2Input.value;
  const rhombusD2 = parseFloat(rhombusD2Value);

  // calculate rhombus
  const rhombusResult = 0.5 * rhombusD1 * rhombusD2;

  // display the result
  const rhombus = document.getElementById("area-result-rhombus");
  rhombus.innerText = rhombusResult;
}
