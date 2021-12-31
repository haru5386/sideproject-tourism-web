import { apiHelper } from "../utils/helpers";


export default {
  // 帶入需要的參數
  async getScenicSpotAll() {
    return apiHelper.get('/ScenicSpot?%24top=10&%24format=JSON')
},
  async getScenicSpotTop10() {
    return apiHelper.get('/ScenicSpot?%24top=10&%24format=JSON')
  }
}

