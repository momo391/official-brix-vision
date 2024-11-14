import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
  const fetchMedia = async () => {
    const data = await fetch(
      "https://photographer-y92s.onrender.com/api/media"
    );
    const response = await data.json();
    return response.media;
  };
  return {
    medias: fetchMedia(),
  };
};
