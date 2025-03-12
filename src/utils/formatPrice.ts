const formatPrice = (price: number | undefined) => {
  const priceString = price?.toString() || "0";
  const [integerPart, cents] = priceString.split(".");

  const formattedIntegerPart = (
    integerPart
      .split("")
      .reverse()
      .join("")
      .match(/.{1,3}/g) || []
  )
    .map((group) => group.split("").reverse().join(""))
    .reverse()
    .join(".");

  return {
    integerPart: formattedIntegerPart,
    cents: cents || "00",
  };
};

export default formatPrice;
