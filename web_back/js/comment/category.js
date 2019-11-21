var category = {
    getInfo: function (callback) {
        $.get(APIURS.category_getInfo, function (res) {
            callback(res)
        })
    },
    delInfo: function (id,callback) {
        $.post(APIURS.category_delInfo, {id:id},function (res) {
            callback(res)
        })
    },
    addInfo: function (name,slug,callback) {
        $.post(APIURS.category_addInfo, {name:name,slug:slug},function (res) {
            callback(res)
        })
    },
}
