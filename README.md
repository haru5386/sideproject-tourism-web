# TOURist
The F2E 3rd 參賽作品 - 台灣旅遊景點導覽 ( UI designer: Chi ) 。<br />
專案使用 Vue.js，串接交通部 TDX API 及 Google Map API。<br /><br />
[點我瀏覽](https://haru5386.github.io/sideproject-tourism-web/#/)

## 產品功能如下：
 * 使用者可以搜尋各個景點、餐廳、飯店資料。
 * 使用者可以篩選縣市地區，瀏覽該市區的景點、餐廳或飯店資料。
 * 使用者可以使用圖文列表模式來瀏覽，也可以使用地圖模式瀏覽。
 * 首頁會列出前十大熱門景點。
 
## 產品畫面預覽
![](./src/assets/images/tourist_ref1.jpg)
![](./src/assets/images/tourist_ref2.png)

## 下載方法：
 1. 打開終端機，Clone 此專案至本機電腦
 
```
git clone https://github.com/haru5386/sideproject-tourism-web
```

2. 進入存放此專案的資料夾

```
cd sideproject-tourism-web
```

3. 安裝 npm 套件，

```
npm install
```

4. 運行伺服器，

```
npm run serve
```

5. 打包檔案

```
npm run build
```

6. 顯示`  App running at:  - Local:   http://localhost:8080/`
   表示成功進入


## 優化方向
 * 串接API，讓使用者有自己的帳號，保存自己喜愛的景點
 * 使用者可以留下評論