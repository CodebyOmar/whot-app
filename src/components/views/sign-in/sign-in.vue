<template src="./sign-in.html">

</template>


<script>
  import GamePinComponent from '@/components/game-pin.vue'
  import appFooter from '@/components/layout/app-footer/app-footer'

  export default {
    name:'sign-in',
    components: {
      'game-pin': GamePinComponent,
      appFooter
    },
    data() {
      return {
        pin: null
      }
    },
    methods: {
      play (pin) {
        this.pin = pin
      },
      startNewGame () {

      }
    }
  }
</script>
