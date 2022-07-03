import { Service } from "../../../models/service";

// Read The Services for the data file
export const readService = async (): Promise<Array<Service>> => {
  const url = "./data/services.json";
  const req = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    });

  return await req;
};
