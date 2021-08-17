Vue.component('item', {
  props: ['item'],
  template: `<div v-if="item.visible" class="pl-3">
    <p> {{ item.title }} </p>
  </div>`
})