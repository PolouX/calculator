function calculate() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  // Verifica si los campos están vacíos o contienen valores no válidos
  if (num1 === "" || num2 === "" || isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
    return;
  }

  let url = `http://localhost:8080/api/calculator/add?a=${num1}&b=${num2}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("result").innerText = `Result: ${data}`;
      document.getElementById("operator").innerText = "+";
    })
    .catch((error) => console.error("Error:", error));
}

function substraction() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  if (num1 === "" || num2 === "" || isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
    return;
  }

  let url = `http://localhost:8080/api/calculator/sub?a=${num1}&b=${num2}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("result").innerText = `Result: ${data}`;
      document.getElementById("operator").innerText = "-";
    })
    .catch((error) => console.error("Error:", error));
}

function resetFields() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").innerText = "Result:";
  document.getElementById("operator").innerText = "+";
}
