import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name : 'kim',
      age : 20,
      likes : 32,
      clickCheck : true,
      more : {} , 
      
    }
  },

  mutations : {
    이름변경(state){
      state.name =  'park'
    },
    나이증가(state , payload){
      state.age += payload
    },
    좋아요(state){
      if(state.clickCheck == true){
        state.likes++
        state.clickCheck = false
      }else{
        state.likes--
        state.clickCheck = true
      }
    },
    setMore(state , payload){
      state.more = payload
    }
  },

  //ajax or 오래걸리는 작업
  actions :  {
    getData(){
      axios.get(`https://codingapple1.github.io/vue/more0.json`
      ).then((a)=>{
        store.commit('setMore', a.data)
      })
    }
  }
})

export default store