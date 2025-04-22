/**
 * Represents weather information, including temperature and conditions.
 */
export interface Weather {
  /**
   * The temperature in Celsius.
   */
  temperatureCelsius: number;
  /**
   * The weather conditions (e.g., Sunny, Cloudy, Rainy).
   */
  conditions: string;
}

/**
 * Asynchronously retrieves weather information for a given city.
 *
 * @param city The city for which to retrieve weather data.
 * @returns A promise that resolves to a Weather object containing temperature and conditions.
 */
export async function getWeather(city: string): Promise<Weather> {
  // TODO: Implement this by calling an API.

  return {
    temperatureCelsius: 25,
    conditions: 'Sunny',
  };
}

/**
 * Represents weather information, including temperature and conditions.
 */
export interface Forecast {
  /**
   * The date of the forecast.
   */
  date: string;
  /**
   * The temperature in Celsius.
   */
  temperatureCelsius: number;
  /**
   * The weather conditions (e.g., Sunny, Cloudy, Rainy).
   */
  conditions: string;
}

/**
 * Asynchronously retrieves weather forecast for a given city.
 *
 * @param city The city for which to retrieve weather forecast.
 * @returns A promise that resolves to a Forecast array containing temperature and conditions.
 */
export async function getWeatherForecast(city: string): Promise<Forecast[]> {
  // TODO: Implement this by calling an API.

  return [
    {
      date: '2024-01-01',
      temperatureCelsius: 25,
      conditions: 'Sunny',
    },
    {
      date: '2024-01-02',
      temperatureCelsius: 27,
      conditions: 'Cloudy',
    },
  ];
}
