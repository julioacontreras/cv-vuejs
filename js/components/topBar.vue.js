Vue.component('top-bar', {
  template: `
  <div class="flex">
    <div class="flex justify-end w-full pl-6 pr-9">
      <a href="javascript:void()" aria-label="Day theme" v-if="!changeForDay" class="pr-2 no-underline cursor-pointer" v-on:click="day"> ☀️ </a>
      <a href="javascript:void()" aria-label="Night theme" v-if="changeForDay" class="pr-2 no-underline cursor-pointer" v-on:click="night"> 🌑 </a>
      <a
        href="https://www.linkedin.com/in/julio-contreras-6579b623/?originalSubdomain=es"
        target="_blank"
        class="pt-1"
      > Linkedin </a>
    </div>
  </div>`,
  data () {
    return {
      changeForDay: false
    }
  },
  methods: {
    day () {
      document.getElementById("body").classList.add('light');
      document.getElementById("body").classList.remove('dark');
      this.changeForDay = true
    },
    night () {
      document.getElementById("body").classList.add('dark');
      document.getElementById("body").classList.remove('light');
      this.changeForDay = false
    }
  }
})
