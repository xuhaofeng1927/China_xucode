var category = {
  getInfo:function(callback) {
      $.get('http://localhost:8000/admin/category_search',function(res) {
            callback(res)
      })
  }
}