import request02 from './request02'

export function getCategory(){
   return request02({
       url:'/category'
   })
}

export function getSubcategory(maitKey){
    return request02({
        url: '/subcategory',
        params: {
          maitKey
        }
      })
}