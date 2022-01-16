import { apiHelper } from "../utils/helpers";


export default {
  // 帶入需要的參數
  async getHotelAll() {
    return apiHelper.get('/Hotel?%24top=30&%24format=JSON')
  },
  async getCityHotel(city) {
    return apiHelper.get(`/Hotel/${city}?%24top=30&%24format=JSON`)
  }
}

