import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class AdsService {
  async getAds() {
    const res = await api.get("api/ads");
    console.log("[ADS]", res.data);
    AppState.ads = res.data;
    console.log(AppState.ads);
  }
}

export const adsService = new AdsService();
