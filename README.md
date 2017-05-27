使用两个服务器模拟跨域请求，当在 server3000文件夹中开启 node server3000.js服务时，自动打开对应文件夹下的 index.html 文件，
html中分别调用另外一个端口的接口，跨域，加入
```
res.header("Access-Control-Allow-Origin", "*")
```