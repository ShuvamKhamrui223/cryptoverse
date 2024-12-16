export const formatCurrency = (currency: number | undefined): string | undefined => {
  if (typeof currency === undefined) return

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "symbol", notation: "compact", compactDisplay: "short"
  })
  return formatter.format(currency);
}