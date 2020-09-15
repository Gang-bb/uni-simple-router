import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})

Vue.prototype.goNextToken = function(url){
    // 1.获取缓存中token的值
    let token = 0
	// 异步获取token
	try {
	    token = uni.getStorageSync('token');
	} catch (e) {
	    // 异步获取缓存token异常处理
	}
    if(token){
    	// 如果token存在就跳转
    	uni.navigateTo({
    		url: url
    	})
    }else{
    	// 如果不存在就弹框
    	uni.showModal({
    	    title: '提示',
    	    content: '请登录',
    	    success: function (res) {
    	        if (res.confirm) {
    	            uni.navigateTo({
    	            	url: '/pages/login/login'
    	            })
    	        } else if (res.cancel) {
    	            console.log('用户点击取消');
    	        }
    	    }
    	});
		
    }
}
app.$mount()
