export const GetPhotoref = async (placename) => {
  try {
    const apiKey = process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY;

    if (!apiKey) {
      throw new Error("Google Maps API key is not defined.");
    }

    if (!placename) {
      console.warn("Placename is not defined.");
      return null;
    }

    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
      placename
    )}&key=${apiKey}`;

    const resp = await fetch(url);

    if (!resp.ok) {
      throw new Error(`Failed to fetch data: ${resp.status}`);
    }

    const result = await resp.json();

    const photoRef = result?.results?.[0]?.photos?.[0]?.photo_reference;
    if (!photoRef) {
      console.warn("No photo reference found for place:", placename);
      return null;
    }

    return photoRef;
  } catch (error) {
    console.error("Error in GetPhotoref:", error);
    return null;
  }
};
