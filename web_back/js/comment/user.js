var publicLocal = "http://localhost:8000/"
var user = {
    login : function (userName,userPassworde,callback) {
        $.post( publicLocal+'admin/login',
        {
            user_name: userName,//userName
            password: userPassworde//userPassworde
        },
        function (res) {
           callback(res)

        })
        // function(res){
        //     console.log(2)
        //     if (res.code === 200) {
        //         location.href = "./index.html"
        //     } else {
        //         $('#msgInfo').text(res.msg)
        //         $('#myModal').modal('show')
        //         // console.log(res.msg)
        //     }
        // }
    },
    logout :function (callback) {
        $.post( publicLocal+'admin/logout',function (res) {
                callback(res)
                // console.log(res.code);  
            })
        
    },
    getAdmin :function (callback) {
        $.get(publicLocal+'admin/getuser',function (res){
            callback(res)
        })
    }
    
}