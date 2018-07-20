<template>
  <div class="login">

    <div class="container">
      <div class="row">
        <div id="oii" class="col s5 left">
          <div class="col s12">
            <label class="active left" for="email">Email</label>
            <input v-model="email" type="email" class="validate">

          </div>
          <div class="col s12">
            <label class="active left" for="password">Password</label>
            <input v-model="password" type="password" class="validate">

          </div>

          <div class="col s5 left">
            <button @click="signin" class="btn waves-effect waves-light" type="submit" name="action">Login
              <i class="material-icons right">send</i>
            </button>

          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: {
    
    email: '',
    password: ''
  },
  methods: {
    signin() {
      let obj = {
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:3000/users/signin', obj).then(response => {
        console.log(response)
        this.$router.push('/home')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  // border: 2px solid black;
}

#oii {
  // border: 2px solid black;
  margin-top: 60px;
  background-color: rgb(204, 221, 235);
  border-radius: 8px;
  padding: 50px;
  -webkit-box-shadow: 10px 10px 5px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px -7px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px -7px rgba(0, 0, 0, 0.75);
}

#oit {
  // border: 2px solid black;
  margin-top: 100px;
  background-color: rgb(204, 221, 235);
  border-radius: 8px;
  padding: 50px;
  -webkit-box-shadow: 10px 10px 5px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px -7px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px -7px rgba(0, 0, 0, 0.75);
}

#oiii {
  // border: 2px solid black;
  margin-top: 60px;

  padding: 50px;
}

.vl {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  border: 2px solid #ddd;
  height: 240px;
}

/* text inside the vertical line */
.vl-innertext {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 50%;
  padding: 8px 10px;
}
</style>
