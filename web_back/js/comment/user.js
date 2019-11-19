var publicLocal = "http://localhost:8000/"
var user = {
    login : function (userName,userPassworde,callback) {
        $.post( publicLocal+'admin/login',
        {
            user_name: userName,
            password: userPassworde
        },
        function (res) {
           callback(res)

        })
    }
    
}