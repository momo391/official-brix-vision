import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
  const fetchServices = async () => {
    const data = await fetch(
      "https://photographer-y92s.onrender.com/api/services"
    );
    const response = await data.json();
    return response.services;
  };
  return {
    services: await fetchServices(),
  };
};
