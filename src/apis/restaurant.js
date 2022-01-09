import { apiHelper } from "../utils/helpers";


export default {
  // 帶入需要的參數
  async getRestaurantAll() {
    return apiHelper.get('/Restaurant?%24top=30&%24format=JSON')
  },
  async getCityRestaurant(city) {
    return apiHelper.get(`/Restaurant/${city}?%24top=30&%24format=JSON`)
  }
}

