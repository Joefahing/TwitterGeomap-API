<template>
    <div class="predictselect">
        <div class="card border-primary mb-3" style="max-width: 10rem;">
            <div class="card-header">
                <h5 class="card-title">#Tags</h5>
            </div>
            <div class="card-body">
                <div class="form-group">
                    
                        <li v-for="(item,index) in prediction" style="list-style-type: none;">
                            <div class="custom-control custom-radio"  style="margin-bottom: 20px;">
                                <input type="radio" v-bind:id="index" name="customRadio" v-on:click="selectTag" class="custom-control-input" v-bind:value="item" >
                                <label class="custom-control-label" v-bind:for="index">{{item}}</label>
                            </div>
                        </li>
                    
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
    methods: {
        selectTag(event){
            this.$emit('tagsForParent', event.target.value)
        }
    }
}
</script>

