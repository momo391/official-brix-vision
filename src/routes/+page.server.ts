import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
  const fetchServices = async () => {
    const data = await fetch(
      "https://photographer-y92s.onrender.com/api/services?limit=3"
    );
    const response = await data.json();
    return response.services;
  };
  const fetchLatestWork = async () => {
    const data = await fetch(
      "https://photographer-y92s.onrender.com/api/media?limit=2"
    );
    const response = await data.json();
    return response.media;
  };
  return {
    media: fetchLatestWork(),
    services: fetchServices(),
  };
};
