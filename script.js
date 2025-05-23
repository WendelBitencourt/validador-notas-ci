let students = [];

if (typeof localStorage !== "undefined") {
  students = JSON.parse(localStorage.getItem("students")) || [];
}

function validateGrade(grade) {
  return grade >= 0 && grade <= 10;
}

function calculateAverage(grade1, grade2) {
  return ((grade1 + grade2) / 2).toFixed(1);
}

function determineSituation(average) {
  if (average >= 7) return "Aprovado";
  if (average >= 5) return "Recuperação";
  return "Reprovado";
}

function updateStudentsList() {
  const listDiv = document.getElementById("studentsList");
  listDiv.innerHTML = students
    .map(
      (student) => `
        <div class="student-card ${student.situation.toLowerCase()}">
            <strong>${student.name}</strong> - Média: ${student.average} (${
        student.situation
      })
        </div>
    `
    )
    .join("");
}

function handleCalculate() {
  const name = document.getElementById("studentName").value;
  const grade1 = parseFloat(document.getElementById("grade1").value);
  const grade2 = parseFloat(document.getElementById("grade2").value);

  // Validação
  let valid = true;
  [grade1, grade2].forEach((grade, index) => {
    const errorSpan = document.querySelectorAll(".error")[index];
    if (!validateGrade(grade)) {
      errorSpan.textContent = "Nota inválida (0-10)";
      valid = false;
    } else {
      errorSpan.textContent = "";
    }
  });

  if (!valid) return;

  // Cálculos
  const average = calculateAverage(grade1, grade2);
  const situation = determineSituation(average);

  // Armazenamento
  students.push({ name, grade1, grade2, average, situation });
  localStorage.setItem("students", JSON.stringify(students));

  // Exibição
  const resultDiv = document.getElementById("result");
  resultDiv.className = situation.toLowerCase();
  resultDiv.innerHTML = `
        <h3>Resultado:</h3>
        <p>Média: ${average} - ${situation}</p>
    `;

  updateStudentsList();
}

// Inicialização
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", updateStudentsList);
}

module.exports = {
  validateGrade,
  calculateAverage,
  determineSituation,
};
