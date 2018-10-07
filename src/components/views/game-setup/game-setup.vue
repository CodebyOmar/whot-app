<template src="./game-setup.html">

</template>

<script>
  import appLayout from "@/components/layout/app-layout"

  export default {
    name: 'gameSetup',
    components:{
      appLayout
    },
    data() {
      return {
        form: {
          username: null
        }
      }
    },
    methods: {
      startGame (e) {
        if (e) e.preventDefault();
        if (this.form.username) {
          this.$store.commit({
            type: 'SET_USERNAME',
            username: this.form.username
          })
        }
        console.log('form', this.form)
      }
    },
    mounted() {
      // make sure game pin exists in store
      if (!this.$store.state.pin) {
        this.$router.push({ name: 'home' })
      }
    }
  }
</script>
