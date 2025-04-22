/**
 * Represents a flight with origin, destination, price and other details.
 */
export interface Flight {
  /**
   * The origin airport code.
   */
  origin: string;
  /**
   * The destination airport code.
   */
  destination: string;
  /**
   * The price of the flight in USD.
   */
  priceUSD: number;
  /**
   * The departure date in ISO format.
   */
  departureDate: string;
}

/**
 * Asynchronously retrieves flight information for a given origin and destination.
 *
 * @param origin The origin airport code.
 * @param destination The destination airport code.
 * @param date The departure date in ISO format.
 * @returns A promise that resolves to an array of Flight objects.
 */
export async function getFlights(
  origin: string,
  destination: string,
  date: string
): Promise<Flight[]> {
  // TODO: Implement this by calling an API.

  return [
    {
      origin: 'JFK',
      destination: 'LAX',
      priceUSD: 200,
      departureDate: date,
    },
  ];
}
