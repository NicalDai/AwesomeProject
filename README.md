# AwesomeProject
Yunxin RN sdk init Login Project

## how to RUN:

1. npm install
  so you can get node_module file folder.
2. Open Android folder by Android Studio.
3. run project directory in Android Studio.
4. if you got some error like:
  
    debug.keystore not found for signing config 'debug'.
  
    Please run this command:
    
    keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
    
    then put the file at:
    
    ![avatar](https://nim-nosdn.netease.im/MTAxMTAwMg==/bmltYV8xMDkyNTAxOTIxXzE1OTk0Nzc5NjcxNjRfYTBjN2Y0MTMtYTgxMi00ZTY0LWFkNTQtZGE3NzE3NjU5ZDQ2?imageView&createTime=1599477967607)
    

PS:   My local RN version is 0.60.4 ! Android Studio Version 3.4.2, and Mac environment.
      If you have any question, make an issue Plz. I will check it as soon as possible.

## init code location:

App.js:
![avatar](https://nim-nosdn.netease.im/MTAxMTAwMg==/bmltYV8xMDkyNTAxOTIxXzE1OTk0NDY5ODExNjZfZTJiNjFlNDAtNWVhMy00YWY3LWI4MTEtZDdiN2ZlMzA1NGY1?imageView&createTime=1599446981630)

## webview site code:
https://faq.yunxin.163.com/kb/demo/avh5/index.html

## Login Result:

you can get login result at the console log of Android Studio or Xcode.
![avatar](https://nim-nosdn.netease.im/MTAxMTAwMg==/bmltYV8xMDkyNTAxOTIxXzE1OTk0NDcyMjg0NjlfNDY3MzlmYTItODY3My00NjRjLWI1Y2UtZWNhMjZjYjI3MWM5?imageView&createTime=1599447228851)

