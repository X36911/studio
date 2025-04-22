/**
 * Represents currency exchange rates.
 */
export interface ExchangeRates {
  /**
   * The base currency.
   */
  baseCurrency: string;
  /**
   * The target currency.
   */
  targetCurrency: string;
  /**
   * The exchange rate between the base and target currencies.
   */
  rate: number;
}

/**
 * Asynchronously retrieves currency exchange rates for a given base and target currency.
 *
 * @param baseCurrency The base currency.
 * @param targetCurrency The target currency.
 * @returns A promise that resolves to an ExchangeRates object.
 */
export async function getExchangeRates(
  baseCurrency: string,
  targetCurrency: string
): Promise<ExchangeRates> {
  // TODO: Implement this by calling an API.

  return {
    baseCurrency: baseCurrency,
    targetCurrency: targetCurrency,
    rate: 1.2,
  };
}
