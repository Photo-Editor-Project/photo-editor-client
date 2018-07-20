<template>
  <div class="home">
    <div class="row">
      <div class="col s2 ">
        <button onclick="document.getElementById('id01').style.display='block'" class="btn waves-effect waves-light" type="submit" name="action">Upload
          <i class="material-icons right">image</i>
        </button>
      </div>

      <div class="col s2 right">
        <button @click="logout" class="btn waves-effect waves-light" type="submit" name="action">Logout
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>
    <div class="container">
      <div class="row">

        <div v-for="( image, index) in result" :key="index" class="col s3">
          <div class="card ">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" v-bind:src="image.url">
            </div>
            <div class="card-action">

              <a id="yak" v-on:click="goToRibbet(image.url)" href="#">Edit</a>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- ============================= modal ======================== -->

    <div id="id01" class="modal">

      <form class="modal-content animate">

        <div class="row">
          <div class="col s12 m12 l12">

            <form action="#">
              <div class="file-field input-field">
                <div class="btn">
                  <span>File</span>
                  <input @change="fetchImg" type="file">
                </div>
                <div class="file-path-wrapper">
                  <input class="file-path validate" type="text">
                </div>
              </div>
            </form>

            <div class="col s12 m12 l12 right">
              <button @click="upload" id="buttonn" onclick="document.getElementById('id01').style.display='none'" class="cancelbtnn" type="button">Upload</button>

            </div>
            <div class="col s12 m12 l12 right">
              <button id="buttonn" type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
            </div>
          </div>

        </div>

      </form>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
// Get the modal
var modal = document.getElementById('id01')

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}

export default {
  data() {
    return {
      result: '',
      img: ''
    }
  },
  beforeCreate() {
    this.$router.push('/login')
  },
  created() {
    this.getImage()

    if (localStorage.hasOwnProperty('token')) {
      this.$router.push('/home')
    } else {
      this.$router.push('/')
    }
  },
  methods: {
    goToRibbet(value) {
      console.log('==========', value)
      var uri_enc = encodeURIComponent(value)
      console.log(uri_enc)
      window.location.href = `https://www.ribbet.com/app/?_import=${uri_enc}&_export=http%3A%2F%2Flocalhost:8080%2Fedit&_exclude=out,home&_export_title=Simpan+Gambar&_export_agent=browser&embed=true`
    },
    getImage() {
      axios
        .get('http://localhost:3000/images', {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(response => {
          console.log(response)
          this.result = response.data.data
          console.log(this.result)
        })
    },
    logout() {
      localStorage.clear('token')
      swal({
        text: 'Logout Success',
        icon: 'success'
      })
      this.$router.push('/')
    },
    fetchImg(e) {
      this.img = e.target.files[0]
    },
    upload() {
      const self = this
      let formData = new FormData()
      formData.append('image', this.img)
      // console.log(typeof formData);
      // ====================== axios ==========================
      let uuid = localStorage.getItem('token')
      axios
        .post('http://localhost:3000/images', formData, {
          headers: {
            token: uuid
          }
        })
        .then(response => {
          console.log(response)

          swal({
            text: 'Upload Success',
            icon: 'success'
          })
          self.$router.push('/home')
          this.getImage()
          this.img = ''
        })
        .catch(err => {
          if (err.response) {
            swal({
              text: 'Upload Failed',
              icon: 'error'
            })
          }
        })
    }
  }
}
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
  padding: 10px;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Full-width input fields */
input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
#buttonn {
  background-color: rgb(40, 194, 194);
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

/* Extra styles for the cancel button */
.cancelbtn {
  background-color: #1fb4a8;
  border-radius: 5px;
}

.cancelbtnn {
  background-color: #1fb4a8;
  border-radius: 5px;
}

/* Center the image and position the close button */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
  position: relative;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  padding-top: 60px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  /* border: 1px solid #888; */
  width: 40%; /* Could be more or less, depending on screen size */
  border-radius: 8px;
}

/* The Close Button (x) */
.close {
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: red;
  cursor: pointer;
}

/* Add Zoom Animation */
.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s;
}

@-webkit-keyframes animatezoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}

@keyframes animatezoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>
