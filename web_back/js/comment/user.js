
var user = {
    login : function (userName,userPassworde,callback) {
        $.post( APIURS.user_login,
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
        $.post( APIURS.user_logout,function (res) {
                callback(res)
                // console.log(res.code);  
            })
        
    },
    getAdmin :function (callback) {
        $.get(APIURS.user_getAdmin,function (res){
            callback(res)
        })
    }
    
}