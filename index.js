/**
 * index.js
 * @authors Your Name (you@example.org)
 * @date    2016-07-17 11:19:02
 * @version $Id$
 */
var zhihu = require('./zhihu_getQuestrion_downloadImg_moudle.js'); //知乎单个问题模块

var coll=require('./CollectionQuestion.js');//收藏夹的模块

//#region coll模块使用方法
var collObj={
    collid: '108201352',//收藏夹URL中的ID
    dianzanshu: 100,//点赞数
    isDownloadImg: true,//是否进行图片下载
    pages: 1//收藏夹页数
}
coll.start(collObj);

//#endregion

//#region zhihu模块获取问题下的图片
 // var queobj = {
 //    question_url: 'https://www.zhihu.com/question/27897924',
 //    dianzanshu: 100
 // };
 // var urllist=[
 //    'https://www.zhihu.com/question/28853910' 
 // ];
 // for (var i = 0; i < urllist.length; i++) {
 //    (function(io) {
 //        var url = urllist[io];
 //        var queobj = {
 //            question_url: url,
 //            dianzanshu: 1
 //        }; 
 //        zhihu.start(queobj);//进行图片下载 
 //    })(i);
 // };
//#endregion