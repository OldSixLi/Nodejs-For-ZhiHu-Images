# Nodejs-For-ZhiHu-Images
Nodejs 在知乎网站下爬取问题，下载高赞数答案图片

学习nodejs时，根据网上一些教程，自己写的用于爬取知乎问题下答案的图片的代码。<br/>

### CollectionQuestion.js文件：<br/>
遍历知乎某个收藏夹下的所有答案内容。<br/>
### zhihu_getQuestrion_downloadImg_moudle.js文件：<br/>
遍历某个问题下的所有答案，并对答案进行分析，然后针对符合要求的答案的图片进行下载。<br/>
### index.js 文件：<br/>
引入以上两个模块，设置开始遍历问题的源。<br/>

### 使用方法：<br/>
index.js 文件中，遍历收藏夹时，写入收藏夹的ID（收藏夹URL的最后几位数字），然后运行文件index（cmd:node index即可。<br/>

 ``` javascript
var collObj={
    collid: '108201352',//收藏夹URL中的ID
    dianzanshu: 1000,//点赞数
    isDownloadImg: true,//是否进行图片下载
    pages: 1//收藏夹页数
}
coll.start(collObj);
 ```
 
如果需要遍历某个特定的问题，写入当前问题的URL，然后运行index（cmd:node index）即可

 ```javascript
 var urllist=[
'https://www.zhihu.com/question/21757507','https://www.zhihu.com/question/31159026'
 ];
 for (var i = 0; i < urllist.length; i++) {
    (function(io) {
        var url = urllist[io];
        var queobj = {
            question_url: url,
            dianzanshu: 1000
        }; 
        zhihu.start(queobj);//进行图片下载 
    })(i);
 };
 ```
