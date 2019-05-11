$(function(){
    $("#form1").validate({
        rules: {//匹配的规则
            tel: {//验证用户名
                required:true,
                digits:true,
                rangelength:[11,11]
            },
            yzm:{
                required:true,
                rangelength:[5,10]
            },
            message:{
                required:true,
                rangelength:[5,10]  
            },
            password1:{
                required:true,
                rangelength:[6,20]
            },
            password2:{
                required: true,
                equalTo: "#password1"//值和密码框的值相同
            }
        },
        messages: {//输出提示
            tel:{
                required: "请输入手机号",
                digits:"必须是整数",
                rangelength:"输入长度必须介于 5 和 10 之间的字符串"
            },
            yzm:{
                required: "请输入验证码",
                rangelength:"验证码有误"
            },
            message:{
                required:"请输入短信验证码",
                rangelength:"验证码有误" 
            },
            password1:{
                required:"请输入密码",
                rangelength:"密码长度必须介于6 到 20位之间"
            },
            password2:{
                required: "请输入确认密码",
                equalTo: "两次密码输入不一致"//值和密码框的值相同
            }
        }
    });
});
$.validator.setDefaults({
    /*添加校验成功后的执行函数--修改提示内容，并为正确提示信息添加新的样式(默认是valid)*/
    success: function(label){
        label.text('√').css('color','green').addClass('valid');
    }
});