<template>
  <div class="home" >


        <inputforms v-on:urlToParent="onSearchClick" ></inputforms>

        <template v-if="prediction.length != 0">
          <div class="row">
             <div class="col-" style="margin-right: 20px; padding-left:13px; ">
                <predictselect 
                v-bind:prediction ="prediction"
                v-on:tagsForParent ="onTagClick">
                </predictselect>
             </div>

             <div class="col-lg">
              <CustomMap
               :longitude="this.coordinates.longitude"
               :latitude="this.coordinates.latitude"
               :geocode="this.geocode">
               </CustomMap>
             </div>

          </div>
        </template>
        
  </div>
</template>

<script>
// @ is an alias to /sr
import inputforms from '../components/inputforms.vue'
import predictselect from '../components/predictselect.vue'
import CustomMap from  '../components/map.vue'
const API_URL = "http://localhost:3400/search"
const TWITTER_API_URL = "http://localhost:3400/tweets"

export default {
  
  name: 'home',
  data: function(){
    return {
      
    imageURL: {
      url: ''
    },
    
    geocode: [{
        "lat": 27.6648274,
        "lng": -81.5157535
    }],

    coordinates:{
      latitude: 40.730610,
      longitude: -73.935242
    },

    prediction:[]
    }
  },
  components:{
    inputforms,
    predictselect,
    CustomMap
  },
  methods:{
    //Assignment url from input box to imageURL.url
    onSearchClick(url){
      this.imageURL ={
          url: url
      }
            console.log("Running post search request")


      //reset selection array
      this.prediction = []

      //POST api request with url as json
      fetch(API_URL, {
        method: 'POST', 
        body: JSON.stringify(this.imageURL),
        headers:{
          'content-type': 'application/json'
        } 
      }).then(response => response.json())
      .then((response)=> {
        
        //Extracting all prediction from response json
        for(var index = 0; index< response.length; index++){
          this.prediction.push(response[index]['name'])
        }
      })
    },
    
    onTagClick(hashtag){
      console.log("Running post request: "+ hashtag)
      this.geocode = []
      fetch(TWITTER_API_URL,{
        method: 'POST',
        body: JSON.stringify({
            tag: hashtag,
            latitude: this.coordinates.latitude,
            longitude: this.coordinates.longitude
        }),
        headers: {
          'content-type': 'application/json'
        }
      }).then(response => 
      response.json()
      )
      .then((result) => {
         
         this.geocode = result
      })
    }


  }

};
</script>

<style>
  .home{
    padding-top: 13%;
  }
</style>

