<template>
  <div class="home">
    <EditPage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import EditPage from '@/components/EditPhoto.vue'

export default {
  name: 'home',
  components: {
    EditPage
  }
}
</script>
