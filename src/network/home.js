import request from './request'
import request02 from './request02'

export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
   
}

export function getHomeGoods(type,page){
    return request02({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
   
}