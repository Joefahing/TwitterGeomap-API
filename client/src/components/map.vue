<template>
    <div class="CustomMap">
        <div class="col-lg">
            <div class="card border-primary mb-3" style="max-width: 100%;">
                <div class="card-header">
                    <h5 class="card-title">Map</h5>
                </div>
                <div class="card-body" style="height:600px; padding:0;">
                        <template>
                            <vue-google-heatmap :points="points"
                                                :width="400"
                                                :height="350" style="width:100%; height:100%;"/>
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
     methods: {

     }
 }
 </script>

 <style>
 
 </style>
 
 