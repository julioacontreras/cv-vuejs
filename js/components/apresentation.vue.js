Vue.component('apresentation', {
  template: `<div class="pt-2">
    <div class="leading-8 relative" id="ap_txt1"> </div> 
    <div class="leading-8" id="ap_txt2"> </div>
    <div class="leading-8" id="ap_txt3"> </div>
  </div>`,
  mounted () {
    this.startPresentation();
  },
  methods: {
    text1() {
      const self = this
      const options = {
        strings: [
          'Hello <div class="inline absolute shake pl-1 w-12"> 👋 </div>'
        ],
        showCursor: false,
        typeSpeed: 40,
        onComplete: (selfTyped) => {
          self.text2()
        },
      };
      const typed = new Typed('#ap_txt1', options);      
    },
    text2() {
      const self = this
      const options = {
        strings: [
          'im Julio,  this is my personal page,'
        ],
        showCursor: false,
        typeSpeed: 40,
        onComplete: (selfTyped) => {
          self.text3()
        },
      };
      const typed = new Typed('#ap_txt2', options);      
    },
    text3() {
      const self = this
      const options = {
        strings: [
          'enjoy! 🌝'
        ],
        showCursor: false,
        typeSpeed: 40,
        onComplete: (selfTyped) => {
          self.$emit('show-page', true)
        },
      };
      const typed = new Typed('#ap_txt3', options);  
    },
    startPresentation() {
      this.text1()
    }
  }
})