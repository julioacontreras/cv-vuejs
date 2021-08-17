Vue.component('group', {
  props: [
    'group'
  ],
  template: `
  <div group>
    <p class="text-disable">-------------------------------------------------------------------</p>
    <p class="pb-2"> {{ group.title }} </p>
    <list v-for="(list, index) in group.lists" :key="'list' + index" :list="list" />
  </div>`
})