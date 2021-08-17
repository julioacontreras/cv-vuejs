Vue.component('search', {
  template: `
  <div>
    <p class="pt-2 text-disable">-------------------------------------------------------------------</p>
    Search: <input type="text" v-model="text" class="border-b-2" /> <span class="text-disable">  [✔] Using, [■] I know </span>
  </div>`,
  data () {
    return {
      text: ''
    }
  },
  watch: {
    text (newValue) {
      this.$emit('change', newValue)
    }
  }
})