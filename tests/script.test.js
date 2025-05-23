const {
  validateGrade,
  calculateAverage,
  determineSituation,
} = require("../script");

describe("Validação de Notas", () => {
  test("Nota válida", () => {
    expect(validateGrade(5)).toBe(true);
  });

  test("Nota inválida", () => {
    expect(validateGrade(11)).toBe(false);
  });
});

describe("Cálculo de Média", () => {
  test("Média correta", () => {
    expect(calculateAverage(8, 6)).toBe("7.0");
  });
});

describe("Determinação de Situação", () => {
  test("Aprovado", () => {
    expect(determineSituation(7)).toBe("Aprovado");
  });

  test("Recuperação", () => {
    expect(determineSituation(6)).toBe("Recuperação");
  });

  test("Reprovado", () => {
    expect(determineSituation(4.9)).toBe("Reprovado");
  });
});
