import jsSHA from "jssha";
import axios from "axios"

const baseURL = 'https://ptx.transportdata.tw/MOTC/v2/Tourism'

const axiosInstance = axios.create({
  baseURL
})

axiosInstance.interceptors.request.use(
  config => {
    config.headers = getAuthorizationHeader()
    return config
  },
  err => Promise.reject(err)
)

export const apiHelper = axiosInstance

function getAuthorizationHeader() {
  //  填入自己 ID、KEY 開始
  let AppID = 'ec24ca7075124f03bc515a9d1ab8ed6d';
  let AppKey = 'naC-dniK8hmEzXWUDe9-uMXyIMo';
  //  填入自己 ID、KEY 結束
  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA('SHA-1', 'TEXT');
  ShaObj.setHMACKey(AppKey, 'TEXT');
  ShaObj.update('x-date: ' + GMTString);
  let HMAC = ShaObj.getHMAC('B64');
  // eslint-disable-next-line
  let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
  return { 'Authorization': Authorization, 'X-Date': GMTString };
}