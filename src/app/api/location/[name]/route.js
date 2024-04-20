import { getLocationByName } from "../location-util";

export async function GET(request, { params }) {
  const locationData = await getLocationByName(params?.name);
  return Response.json(locationData);
}
