<template>
    <div class="CustomMap">
        <div class="col-lg">
            <div class="card border-primary mb-3" style="max-width: 100%;">
                <div class="card-header">
                    <h5 class="card-title">Map</h5>
                </div>
                <div class="card-body" style="height:600px; padding:0;">
                        <template  v-if= "geocode.length > 0">
                            <vue-google-heatmap :points="geocode"
                                                :width="400"
                                                :height="350" 
                                                :lat="latitude"
                                                :lng="longitude"
                                                style="width:100%; height:100%;"/>
                        </template>
                        <template v-else-if= "geocode.length == 0">
                            <div style="text-align:center;display:block;padding-top:10%">
                                <img src="https://i0.wp.com/media.boingboing.net/wp-content/uploads/2015/10/tumblr_nlohpxGdBi1tlivlxo1_12801.gif?zoom=2&amp;w=970" 
                                    width="628" height="354" src-orig="https://i0.wp.com/media.boingboing.net/wp-content/uploads/2015/10/tumblr_nlohpxGdBi1tlivlxo1_12801.gif?w=970" scale="2">
                            </div>
                            
                        </template>
                </div>
            </div>
        </div>
    </div> 
</template>

 <script>
 export default {
     name: 'CustomMap',
    
     data: function(){
         return{
            points: [{lat: 37.786117, lng:-122.440119}]
        }
     },
     props:['latitude', 'longitude', 'geocode'],

     methods: {

     }
 }
 </script>

 <style>
 
 </style>
 
 