<template src="./sign-in.html">

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
