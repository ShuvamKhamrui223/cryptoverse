export const formatCurrency = (currency:number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    compactDisplay: "short",
    notation: "compact",
  }).format(currency);
