import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class CarsService {
  async getCars() {
    const res = await api.get("api/cars");
    logger.log(res.data);
    AppState.cars = res.data;
  }
}

export const carsService = new CarsService();
