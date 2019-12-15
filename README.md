# Todo List
熟悉使用 MySQL 

---

## 建構環境
+ Node js
+ MySQL

## Installing 
下載專案
```
$git clone https://github.com/king27350/AC-todo-list---sequelize.git
```
使用終端機安裝套件
**Node Version v10.15.3**
```
$npm install
```


**在專案底下新增 .nev 檔案**
為了隱藏敏感資訊，使用 dotenv 套件，新增```.nev```檔案

開啟```.nev```檔案，輸入以下程式碼
```
FACEBOOK_ID= //your Client ID
FACEBOOK_SECRET= //your Client secret
FACEBOOK_CALLBACK=http://localhost:3000/auth/facebook/callback

```
**環境建置完畢**

---


開啟環境執行SERVER
```
$npm run dev
```
開啟瀏覽器網址輸入
```
http://localhost:3000
```


#### 功能描述
+ 簡易Todo List
+ FACEBOOK 第三方登入
+ 會員註冊、登入功能
+ 新增、修改、刪除功能




#### 專案貢獻者
[Chris Wei](https://github.com/king27350)