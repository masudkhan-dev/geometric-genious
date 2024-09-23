/*
    1. একটা function() বানিয়ে বাটনের সাথে কানেক্ট করতে হবে 
    2. input এর id দিয়ে input ধরতে হবে 
    3. input এর value select করতে হবে  inputId.value
    4. inputId.value কে parseFloat() করতে হবে তাহলে শুধু নাম্বর দেখাবে সেটা যেমনি হোক না কেন 




*/

function triangleCalculate() {
  // triangle base এর মান বের করা
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseValue = triangleBaseInput.value;
  const base = parseFloat(triangleBaseValue);

  // triangle height এর মান বের করা
  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleHeightValue = triangleHeightInput.value;
  const height = parseFloat(triangleHeightValue);

  // calculate triangle
  const triangleAreaCalculate = 0.5 * base * height;

  // display the triangle result
  const triangleAreaResult = document.getElementById("area-result");
  triangleAreaResult.innerText = triangleAreaCalculate;
}
