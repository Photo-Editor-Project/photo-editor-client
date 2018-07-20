<template>
  <div class="hello">
   <h1>Edit</h1>
   <img v-bind:src="imgsrc" alt="imgsrc" width="400" height="400" >
    <a v-bind:href="imgsrc" download>download</a>
  </div>
  


</template>

<script>
export default {
  data(){
    return {
      imgsrc:'',
    }
  },
  created(){
            let uri = window.location.href.split('?');
            if (uri.length == 2)
            {
            let vars = uri[1].split('&');
            let getVars = {};
            let tmp = '';
            vars.forEach(function(v){
                tmp = v.split('=');
                if(tmp.length == 2)
                getVars[tmp[0]] = tmp[1];
            });
            var uri_dec = decodeURIComponent(getVars.file);
            console.log(uri_dec)
            this.imgsrc = uri_dec
            console.log(this.imgsrc)
            }
        },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
