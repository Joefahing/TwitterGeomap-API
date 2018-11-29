<template>
  <div class="home" >


        <inputforms v-on:urlToParent="onSearchClick" >

        </inputforms>

        <!-- <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Image URL">
          <div class="input-group-append">
              <button type="button" class="btn btn-primary">Search</button>
          </div>
        </div> -->

        <!-- <div class="form-group has-success">
          <input type="text" value="correct value" class="form-control is-valid" id="validInput">
          <div class="valid-feedback">Success!</div>
        </div> -->

        <!-- <div class="form-group has-danger">
          <input type="text" value="wrong value" class="form-control is-invalid" id="invalidInput">
          <div class="invalid-feedback">Sorry, invalid url! Try another?</div>
        </div> -->

  </div>
</template>

<script>
// @ is an alias to /sr
import inputforms from '../components/inputforms.vue'

export default {
  data(){
    return{
        imageurl:''
    }
  },
  name: 'home',
  components:{
    inputforms
  },
  methods:{
    onSearchClick(value){
      console.log(value)
      this.imageurl = value
    }
  }
};
</script>

<style>
  .home{
    padding-top: 20%;
  }
</style>

