<template>
  <div @click="sendMsg" :class="필터+ ' filter-item'" :style="`background-image:url(${img})`">
    <slot></slot>
    <button @click="sendMsg">Btn</button>
  </div> 
</template>

<script>


export default {
    name : 'filterBox',
    props:{
        img : String,
        필터: String,
    },
    methods:{
      sendMsg(){
        this.emitter.emit('박스클릭'  , this.필터)
      }
    }
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>