Vue.component('list', {
  props: ['list'],
  template: `
  <div >
    <p class="title"> {{ list.title }} </p>
    <item
      v-for="(item, index) in list.items"
      :key="'item' + index"
      :item="item"
    />
  </div>`
})