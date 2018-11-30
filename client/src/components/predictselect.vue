<template>
    <div class="predictselect">
       
        <div class="row">
            <div class="col-" style="margin-right: 20px; padding-left:13px; ">
                <div class="card border-primary mb-3" style="max-width: 10rem;">
                    <div class="card-header">
                        <h5 class="card-title">HashTags</h5>
                    </div>
                    <div class="card-body">
                        <!-- <h4 class="card-title">Primary card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                    </div>
                </div>
            </div>

            <div class="col-lg">
                <div class="card border-primary mb-3" style="max-width: 10rem;">
                    <div class="card-header">
                        <h5 class="card-title">HashTags</h5>
                    </div>
                    <div class="card-body">
                        <!-- <h4 class="card-title">Primary card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "predictselect",
    props:['prediction'],
    data: function(){
        return{
            localPrediction: this.prediction
        }
    },
    methods:{

    },
}
</script>

