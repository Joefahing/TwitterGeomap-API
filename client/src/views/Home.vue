<template>
  <div class="home" >


        <inputforms v-on:urlToParent="onSearchClick" ></inputforms>
        <predictselect v-bind:prediction ="prediction"></predictselect>
  </div>
</template>

<script>
// @ is an alias to /sr
import inputforms from '../components/inputforms.vue'
import predictselect from '../components/predictselect.vue'
const API_URL = "http://localhost:3400/search"

export default {
  
  name: 'home',
  data: function(){
    return {
      imageURL: {
      url: ''
    },
    prediction:[]
    }
  },
  components:{
    inputforms,
    predictselect
  },
  methods:{
    //Assignment url from input box to imageURL.url
    onSearchClick(url){
     this.imageURL ={
        url: url
      }

      //POST api request with url as json
      fetch(API_URL, {
        method: 'POST', 
        body: JSON.stringify(this.imageURL),
        headers:{
          'content-type': 'application/json'
        } 
      }).then(response => response.json())
      .then((response)=>{
        this.prediction = response
        console.log(response)
      })
    },
    


  }

};
</script>

<style>
  .home{
    padding-top: 13%;
  }
</style>

