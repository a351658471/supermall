import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    addCart({cartList},cartinfo){
      const isHave = cartList.find(item => {
        return item.iid === cartinfo.iid
      })

      if(isHave){
        isHave.count += 1
      }else{
        cartinfo.count = 1
        cartinfo.checke = true
        cartList.push(cartinfo)
      }
    },

    checked({cartList},obj){
      const checked = cartList.find(item => {
        return item.iid == obj.itemInfo.iid
      })
      checked.checke = obj.checked
    },

    selectAll({cartList},isSelect){
      for(let i in cartList){
         cartList[i].checke = isSelect
      }
    }

  },
  actions: {

  },
  modules: {
  }
})
