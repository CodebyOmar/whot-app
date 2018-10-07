<template src="./game-setup.html">

</template>

<script>
  import appLayout from "@/components/layout/app-layout"

  export default {
    name: 'gameSetup',
    components:{
      appLayout
    },
    mounted() {
      // make sure game pin exists in store
      if (!this.$store.state.pin) {
        this.$router.push({ name: 'home' })
      }
    }
  }
</script>
