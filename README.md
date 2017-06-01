使用三个服务器模拟跨域请求：

* 分别在 server 3000，server3001，server3002 文件加下， 开启服务，即分别运行 node server3000.js, node server3001.js，node server3002.js；

* 当在 server3000文件夹中开启 node server3000.js服务时，自动打开对应文件夹下的 index.html 文件，
html中分别调用另外一个端口的接口，跨域，加入

    ```
    res.header("Access-Control-Allow-Origin", "*")
    ```

* 另外一种方案：

    server3000中的 html 中的文件请求 
    server3002中的函数用的 JSONP 模式