/*
 *@Description: 检查目录
 *@Time: 2015/10/24
 *@author: lore-w
 */

var fs = require('fs');

/*
 *@Description: 检查目录是否为空（异步）
 */

exports.checkDir = function (path, callback) {

    fs.readdir(path, function (err, files) {

        if (err === null) {
            callback(null, files)
        } else {
            callback(err);
        }
    });
};

/*
 *@Description: 检查目录是否为空（同步）
 */
exports.checkDirSync = function (path) {

    var files = fs.readdirSync(path);

    if (files.length > 0) {

        return true;

    } else {

        return false;

    }
};