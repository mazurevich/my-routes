import { Coords } from "../types";

export const getLocation = (): Promise<Coords> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      const coords: Coords = {
        lat: latitude,
        lng: longitude,
      };

      console.log(coords);

      resolve(coords);
    }, reject);
  });
};
