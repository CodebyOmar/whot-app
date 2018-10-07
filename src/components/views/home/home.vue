<template src="./home.html">

</template>


<script>
  import GamePinComponent from '@/components/game-pin.vue'
  import appLayout from '@/components/layout/app-layout'

  export default {
    name:'sign-in',
    components: {
      'game-pin': GamePinComponent,
      appLayout
    },
    computed: {
      pin () {
        return this.$store.state.pin
      }
    },
    data() {
      return {

      }
    },
    methods: {
      setPin (pin) {
        if (pin && pin.length == 4) {
          this.$store.commit({
            type: 'SET_PIN',
            pin
          })
        }
      },
      joinGame () {
        if (this.pin) {
          this.$router.push({ name: 'game-setup' })
        }
      },
      startGame () {

      }
    }
  }
</script>
