<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step==1 " @click="step++">Next</li>
      <li v-if="step== 2" @click="publish">Post</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  

  <Container @write="작성한글 = $event" :img="img" :step="step"  :post="post" />
  
  <button @click="$store.dispatch('getData')">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>


</template>

<script>
import axios from "axios";
import Container from "./components/ContainerPage.vue";
import Postdata from "./assets/data";



export default {
  name: "App",
  data() {
    return {
      post: Postdata,
      step:0,
      img:'',
      선택한필터:'',
    };
  },
  components: {
    Container,
  },
  mounted(){
    this.emitter.on('박스클릭',(a)=>{
      this.선택한필터 = a
    })
  },
  methods: {
    publish(){
      var 내게시물 = {
      name: "Kim Hyun",
      userImage: "https://placeimg.com/100/100/arch",
      postImage: this.img,
      likes: 36,
      date: "May 15",
      liked: false,
      content: this.작성한글,
      filter: this.선택한필터
      };
      this.post.unshift(내게시물);
      this.step = 0 ;
    },
    more() {
      
      axios
        .get(`https://codingapple1.github.io/vue/more${this.clickBtn}.json`)
        .then((rst) => {
          this.post.push(rst.data);
          this.clickBtn++;
        });
    },
    upload(e){  
      let file = e.target.files
      let url = URL.createObjectURL(file[0])
      this.img= url;
      this.step++
    },
  },
  
  computed : {
    name(){
      return this.$store.state.name
    },
  }
};
</script>

<style>
@import "style.css";
</style>
k
