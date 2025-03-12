import formatPrice from "@src/utils/formatPrice";

describe("formatPrice function", () => {
  test("formats price correctly with thousands separator", () => {
    expect(formatPrice(1234567)).toEqual({
      integerPart: "1.234.567",
      cents: "00",
    });
  });

  test("formats price with decimal values", () => {
    expect(formatPrice(1234.56)).toEqual({ integerPart: "1.234", cents: "56" });
  });

  test("handles undefined price correctly", () => {
    expect(formatPrice(undefined)).toEqual({ integerPart: "0", cents: "00" });
  });

  test("handles whole number prices correctly", () => {
    expect(formatPrice(500)).toEqual({ integerPart: "500", cents: "00" });
  });
});
