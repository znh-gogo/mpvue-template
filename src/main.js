import Vue from 'vue'
import App from './App'
import Promise from 'promise'
import api from './config/api'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$api = api;

Vue.prototype.$http = {
    get:(url,data,header)=>{
      return new Promise((resolve,reject)=>{
 
        wx.request({
          data:data,
          method:'get',
          header:header,
          url: url,
          success: function (res) {
            resolve(res)
          },
          fail:function (res) {
            reject(res)
          }
        })
 
      });
    },
    post:(url,data,header)=>{
      return new Promise((resolve,reject)=>{
 
        wx.request({
          data:data,
          method:'post',
          header:header,
          url: url,
          success: function (res) {
            resolve(res)
          },
          fail:function (res) {
            reject(res)
          }
        })
 
      });
    }
 }

const app = new Vue(App)
app.$mount()
