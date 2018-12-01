<template>
    <div class="inputforms">

    <form @submit.prevent ="emitToParent">
         
         <template v-if= "type == 'valid'">
             <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Image URL" v-model= "url">
                <div class="input-group-append">
                    <button type="submit" class="btn btn-primary">Search</button>
                </div>
            </div>
         </template>

        <!-- 
            This template will check to see if input is valid, if not, template warning template will
            render
        -->
         <template v-else-if= "type == 'invalid'">
            <div class="input-group mb-3 has-danger">
                <input type="text" class="form-control is-invalid" placeholder="Image URL" v-model= "url">
                <div class="input-group-append">
                    <button type="submit" class="btn btn-primary">Search</button>
                </div>
                <div class="invalid-feedback">Sorry, invalid url! Try another?</div>
            </div>
         </template>

    </form>   

       

        <!-- <div class="form-group has-danger">
          <input type="text" value="wrong value" class="form-control is-invalid" id="invalidInput">
          <div class="invalid-feedback">Sorry, invalid url! Try another?</div>
        </div>  -->

    </div>
</template>

<script>

const isImageUrl = require('is-image-url')

export default {
    //return data bind to input field
    data(){
        return{
            url: '',
            type: 'valid'
        }
    },
    name: 'inputforms',

    methods:{
        emitToParent(event){
            if(!isImageUrl(this.url)){
                this.type = 'invalid'            
                this.url = ''

            } else{
                this.type = 'valid'
                this.$emit('urlToParent', this.url)   
            }
        }
    }
}
</script>

