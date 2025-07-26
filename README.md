# NextWeather

## Project configuration

- framework: Next.js
- architecture: FSD
- routing: App Router
- state manager: Mobx

## More about architecture

FSD was chosen for the project architecture. FSD layers are located inside the /src folder, and Next.js routing are located in the root of the project. as mentioned in [this article](https://feature-sliced.design/ru/docs/guides/tech/with-nextjs). But instead of the FSD pages layer, project pages are placed directly in the root /app folder, instead of copying into Next.js routing from the FSD pages layer.
