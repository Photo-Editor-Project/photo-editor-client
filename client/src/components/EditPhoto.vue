<template>
  <div class="hello">
    <div class="container">
<img v-bind:src="imgsrc" alt="imgsrc" width="400" height="400" >
   
<div id="wor" class="row">
  <div id="share" class="col s5 left">
            <button  v-on:click="save" class="btn waves-effect waves-light" type="submit" name="action">Save

        </button> 
  </div>

    <div id="share" class="col s5 right">
        <div data-size="large" class="fb-share-button" 
          v-bind:data-href="imgsrc" 
          data-layout="button_count">         
    </div>

  </div>
</div>
     </div >

 


   

 </div>
  


</template>

<script>
import axios from "axios"
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

export default {
  data() {
    return {
      imgsrc: "",
      url:''
    };
  },
  created() {
    let uri = window.location.href.split("?");
    if (uri.length == 2) {
      let vars = uri[1].split("&");
      let getVars = {};
      let tmp = "";
      vars.forEach(function(v) {
        tmp = v.split("=");
        if (tmp.length == 2) getVars[tmp[0]] = tmp[1];
      });
      var uri_dec = decodeURIComponent(getVars.file);
      console.log(uri_dec);
      this.imgsrc = uri_dec;
      console.log(this.imgsrc);
    }
  },methods:{
    save() {
      let obj = {
        url : this.imgsrc
      }

      axios.post('http://localhost:3000/images/url', obj ,{
          headers:{
              token:localStorage.getItem("token") 
            }
        }).then(response => {
        console.log(response)
        this.$router.push('/home')
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#share {
  // padding: 10px;
    // border: 1px solid black;

}

.container {
  // border: 1px solid black;
}

#wor{
  width: 50%;
}

.fb-share-button{
  width: 200px;
  height: 200px;
}
</style>
