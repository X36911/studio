/**
 * Represents a hotel with name, location, price and other details.
 */
export interface Hotel {
  /**
   * The name of the hotel.
   */
  name: string;
  /**
   * The location of the hotel.
   */
  location: string;
  /**
   * The price of the hotel per night in USD.
   */
  priceUSD: number;
  /**
   * The rating of the hotel.
   */
  rating: number;
}

/**
 * Asynchronously retrieves hotel information for a given location.
 *
 * @param location The location to search for hotels.
 * @param checkinDate The check-in date in ISO format.
 * @param checkoutDate The check-out date in ISO format.
 * @returns A promise that resolves to an array of Hotel objects.
 */
export async function getHotels(
  location: string,
  checkinDate: string,
  checkoutDate: string
): Promise<Hotel[]> {
  // TODO: Implement this by calling an API.

  return [
    {
      name: 'The Beverly Hills Hotel',
      location: 'Beverly Hills',
      priceUSD: 800,
      rating: 5,
    },
  ];
}
