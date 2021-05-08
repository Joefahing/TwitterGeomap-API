<template>
    <div class="inputforms">

    <form @submit.prevent ="emitToParent">
         
         <template v-if= "type == 'valid'">
             <div class="row">
                 <div class="col-sm">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Image URL" v-model= "url">
                        </div>
                </div>

                <div class="col-sm">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="City Name" v-model= "city">
                            <div class="input-group-append">
                                <!-- Can use @keypress.enter instead -->
                                <button type="submit" class="btn btn-primary">Search</button>
                            </div>
                        </div>
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

            <!-- Have to be modified in case of invalid input -->

            
         </template>

    </form>   


    </div>
</template>

<script>

const isImageUrl = require('is-image-url')

export default {
    //return data bind to input field
    data(){
        return{
            url: '',
            type: 'valid',
            city: '',
        }
    },
    name: 'inputforms',

    methods:{
        emitToParent(event){
            //Have to be modify for form validation
            if(!isImageUrl(this.url)&& this.city != ''){
                this.type = 'invalid'            
                this.url = ''

            } else{
                this.type = 'valid'
                this.$emit('urlToParent', {
                            url: this.url,
                            city: this.city
                        }
                    )   
            }
        }
    }
}
</script>

