import { TypeService } from "../../../models/type";

// Read The Services
export const readTypeService = async (): Promise<Array<TypeService>> => {
  const url = "./data/typeServices.json";
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
