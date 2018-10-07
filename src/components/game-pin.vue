<template>
  <div class="mb-4 pb-8">
      <input class="pin shadow border py-2 h-10 text-grey-darker font-bold text-center" @input="switchFocus($event, 0)" type="text" placeholder="0" required>
      <input class="pin shadow border py-2 h-10 text-grey-darker font-bold text-center" @input="switchFocus($event, 1)" type="text" placeholder="0" required>
      <input class="pin shadow border py-2 h-10 text-grey-darker font-bold text-center" @input="switchFocus($event, 2)" type="text" placeholder="0" required>
      <input class="pin shadow border py-2 h-10 text-grey-darker font-bold text-center" @input="switchFocus($event, 3)" type="text" placeholder="0" required>
  </div>
</template>

<script>
  export default {
    name: 'game-pin',
    data() {
      return {
        pin: [0, 0, 0, 0]
      }
    },
    methods: {
      switchFocus(e, index) {
        this.pin[index] = e.target.value = Number(e.data) || 0
        if (index < 3) this.$el.querySelectorAll('input[type="text"]')[index + 1].focus()
        else this.$emit('input', this.pin.join(''))
      }
    },
    mounted() {
      console.log(this)
    }
  }
</script>

<style>
  .pin {
    width: 60px;
    margin-left: 5px;
    margin-right: 5px;
  }
</style>
