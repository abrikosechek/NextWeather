interface IWeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface ICoord {
  lon: number;
  lat: number;
}

interface IWeatherItem {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface IWind {
  speed: number;
  deg: number;
  gust: number;
}

interface IClouds {
  all: string;
}

interface ICurrentWeather {
  timezone: number;
  id: number;
  name: string;
  cod: number;
  base: string;
  dt: number;
  visibility: number;
  main: IWeatherMain;
  coord: ICoord;
  weather: IWeatherItem[];
  clouds: IClouds;
  wind: IWind;
  rain?: {
    [time: string]: number;
  };
  snow?: {
    [time: string]: number;
  };
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
}

interface IWeatherForecastItemMain extends IWeatherMain {
  temp_kf: number;
}

interface IWeatherForecastItem {
  dt: number;
  dt_txt: string;
  pop: number;
  visibility: number;
  main: IWeatherForecastItemMain;
  weather: IWeatherItem[];
  clouds: IClouds;
  wind: IWind;
  rain?: {
    [time: string]: number;
  };
  snow?: {
    [time: string]: number;
  };
  sys: {
    pod: string;
  };
}

interface IWeatherForecast {
  cod: number;
  message: number;
  cnt: number;
  list: IWeatherForecastItem[];
  city: {
    id: number;
    name: string;
    coord: ICoord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export type { ICurrentWeather, IWeatherForecast, IWeatherForecastItem };
