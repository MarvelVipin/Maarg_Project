export const getLocationSuggestions = async (query) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${query}&countrycodes=in`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching locations:", error);
    return [];
  }
};