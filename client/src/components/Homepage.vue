<template>
  <div class="home">
    <div class="container">
      <div class="row">

        <div class="col s3">
          <div class="card ">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="https://images.pexels.com/photos/21787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350">
            </div>
            <div class="card-action">
              <a id="yak" href="#">Share</a>
              <a id="yak" href="#">Edit</a>
            </div>

          </div>
        </div>

        <div class="col s3">
          <div class="card ">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="https://images4.alphacoders.com/171/thumb-1920-171916.jpg">
            </div>
            <div class="card-action">
              <a id="yak" href="#">Share</a>
              <a id="yak" href="#">Edit</a>
            </div>
          </div>
        </div>

        <div class="col s3">
          <div class="card ">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="http://kb4images.com/images/hd-wallpapers/36392464-hd-wallpapers.jpg">
            </div>
            <div class="card-action">
              <a id="yak" href="#">Share</a>
              <a id="yak" href="#">Edit</a>
            </div>
          </div>
        </div>

        <div class="col s3">
          <div class="card ">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="https://wallpaper-house.com/data/out/7/wallpaper2you_140197.jpg">
            </div>
            <div class="card-action">
              <a id="yak" href="#">Share</a>
              <a id="yak" href="#">Edit</a>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  width: 110%;
  // border: 2px solid black;
}
#yak {
  color: rgb(63, 57, 28);
  // border: 1px solid black;
  padding: 10px;
  border-radius: 5px;
  background-color: rgb(235, 187, 30);
}

img {
  height: 200px;
  object-fit: cover;
}
</style>
