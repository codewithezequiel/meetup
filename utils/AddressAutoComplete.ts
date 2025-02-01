
const API_BASE_URL = "https://api.mapbox.com/search/searchbox/v1"
const publicAccessToken = process.env.EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN;

export async function getSuggestions(input: string, sessionToken: string) {

  const response = await fetch(`${API_BASE_URL}/suggest?q=${input}&language=en&proximity=-73.990593,40.740121&session_token=${sessionToken}&access_token=${publicAccessToken}`);
 
  const json = await response.json();

  return json;  
}



export const retrieveDetails = async (id: string, sessionToken: string) => {

  const response = await fetch(`${API_BASE_URL}/retrieve/${id}?language=en&session_token=${sessionToken}&access_token=${publicAccessToken}`)
  
  const json = await response.json();
  console.log(json.features[0].properties.full_address)
  return json;
}
