import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import next from "next";

dotenv.config();

const port = process.env.EXPRESS_PORT || 4040;
const weatherApiKey = process.env.WEATHER_API_KEY;
const requestUnits = "metric";
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(cors());

  // API requests
  server.get("/api/current", async (req, res) => {
    try {
      const fetchResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=55&lon=37&units=${requestUnits}&appid=${weatherApiKey}`
      );
      const data = await fetchResponse.json();

      if (!fetchResponse.ok) {
        res.status(502).json({
          error: "Bad Gateway: Error from weather API (1)",
        });
        return;
      }

      res.send(data);
    } catch {
      res.status(502).json({
        error: "Bad Gateway: Error from weather API (2)",
      });
    }
  });
  server.get("/api/forecast", async (req, res) => {
    try {
      const fetchResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=55&lon=37&cnt=15&units=${requestUnits}&appid=${weatherApiKey}`
      );
      const data = await fetchResponse.json();

      if (!fetchResponse.ok) {
        res.status(502).json({
          error: "Bad Gateway: Error from weather API (1)",
        });
        return;
      }

      res.send(data);
    } catch {
      res.status(502).json({
        error: "Bad Gateway: Error from weather API (2)",
      });
    }
  });

  // next app
  server.use((req, res) => {
    handle(req, res);
  });

  // launch
  server.listen(port, () => {
    console.log(
      `Server listening on http://localhost:${port} as ${
        dev ? "development" : process.env.NODE_ENV
      }`
    );
  });
});
