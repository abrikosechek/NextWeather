import * as dotenv from 'dotenv';

dotenv.config();

export async function GET() {
  const headers = new Headers({ 'content-type': 'application/json' });

  try {
    const fetchResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=55&lon=37&units=metric&appid=${process.env.WEATHER_API_KEY}`,
    );
    const data = await fetchResponse.json();

    if (!fetchResponse.ok) {
      return new Response('Bad Gateway: Error from weather API (1)', {
        status: 500,
        headers,
      });
    }

    return new Response(JSON.stringify(data), { headers });
  } catch (reason) {
    const message =
      reason instanceof Error ? reason.message : 'Unexpected error';
    return new Response(message, { status: 500, headers });
  }
}
