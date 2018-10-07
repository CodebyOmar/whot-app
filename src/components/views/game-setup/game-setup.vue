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
      if (!this.$store.state.pin) {
        console.log(this.$router)
      }
    }
  }
</script>
