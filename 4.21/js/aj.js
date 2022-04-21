{/* <mete http-equiv="Access-Control-Allow-Origin" content="*"></mete>  */}
function ajax(method, url, isAsync, success){
    //1.创建ajax对象
    var sajx = new XMLHttpRequest();
    //2.配置信息
    sajx.open(method, url, isAsync);
    //3.发送请求
    sajx.send();
    //4.监听状态
    sajx.onreadystatechange = function(){
        if(sajx.readyState == 4 && sajx.status == 200){
            //处理数据
            var res = JSON.parse(sajx.responseText);
            //容错处理，判断success是否是函数
            if(typeof success == "function"){
                success(res);
              }

        }
    }
}