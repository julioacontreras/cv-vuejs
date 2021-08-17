Vue.component('top-bar', {
  template: `
  <div class="flex w-full justify-end px-6">
    <div class="pr-2 underline cursor-pointer" v-on:click="day"> Day </div>
    <div class="pr-2 underline cursor-pointer" v-on:click="night"> Night </div>
    <a href="https://www.linkedin.com/in/julio-contreras-6579b623/?originalSubdomain=es" target="_blank"> Linkeind </a>
  </div>`,
  methods: {
    day () {
      document.getElementById("body").classList.add('light');
      document.getElementById("body").classList.remove('dark');
    },
    night () {
      document.getElementById("body").classList.add('dark');
      document.getElementById("body").classList.remove('light');
    }
  }
})
