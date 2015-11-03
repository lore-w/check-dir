## check-dir

检查指定目录是否为空，对外暴露两个方法：

### checkDir(异步)

```js
exports.checkDir = function (path, callback) {

    fs.readdir(path, function (err, files) {

        if (err === null) {
            callback(null, files)
        } else {
            callback(err);
        }
    });
};
```

### checkDirSync（同步）

```js
exports.checkDirSync = function (path) {

    var files = fs.readdirSync(path);

    if (files.length > 0) {

        return true;

    } else {

        return false;

    }
};
```