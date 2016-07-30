/**
 * 最新遍历某个收藏夹下所有答案
 * @authors Your Name (you@example.org)
 * @date    2016-07-11 21:25:13
 * @version $Id$
 */
//#region   模块引入
var getmoudle_path = 'C:/Program Files/nodejs/node_modules/';
var nodegrass = require(getmoudle_path + 'nodegrass');
var cheerio = require(getmoudle_path + 'cheerio');
var http = require("http");
var zhihu = require('./zhihu_getQuestrion_downloadImg_moudle.js'); //需要传入当前的参数：问题URL

//#endregion

// arrUrlPath(collectionObj);

function collstart(collectionObj) {
    var collid = ""; //收藏夹的ID
    var dianzanshu = 0;
    var isDownloadImg = false;
    var pages=0;
    if (collectionObj.collid) {
        dianzanshu = collectionObj.dianzanshu;
        collid = collectionObj.collid;
        isDownloadImg=collectionObj.isDownloadImg;
        pages=collectionObj.pages;
    };
    for (var pageIndex = 0; pageIndex <= pages; pageIndex++) {
        //闭包传入数据
        (function(pageindex) {
            //获取每页收藏夹的源码69135664
            nodegrass.get("https://www.zhihu.com/collection/" + collid + "?page=" + pageindex, function(data, status, headers) {
                var $ = cheerio.load(data);
                var arrUrl = [];
                $(data).find('.zm-item-title a').each(function() {
                    arrUrl.push("https://www.zhihu.com" + $(this).attr('href'));
                });
                console.log(arrUrl.join('索引：' + pageindex + '\r\n') + '索引：' + pageindex + '\r\n');

                for (var urlindex = 0; urlindex < arrUrl.length; urlindex++) {
                    (function(urlindex) {
                        var url = arrUrl[urlindex];
                        var queobj = {
                            question_url: url,
                            dianzanshu: dianzanshu
                        };
                        if (isDownloadImg) {
                            zhihu.start(queobj); //进行图片下载 
                        }
                    })(urlindex);
                }
            });
        })(pageIndex);
    }
}

exports.start = collstart;