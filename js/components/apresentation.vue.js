Vue.component('apresentation', {
  template: `<div class="pt-2">
    <div class="leading-8 relative"> Hello <div class="inline absolute shake pl-1 w-12"> 👋 </div></div> 
    <div class="leading-8"> im Julio,  this is my personal page, </div>
    <div class="leading-8" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" > {{ text }} </div>
  </div>`,
  data () {
    return {
      text: 'enjoy! 🌝',
      enjoy: 'enjoy! 🌝',
      enjoy2: 'enjoy! 😋'
    }
    
  },
  methods: {
    mouseover() {
      this.text = this.enjoy2
    },
    mouseleave() {
      this.text = this.enjoy      
    }
  }
})