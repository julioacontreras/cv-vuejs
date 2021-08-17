Vue.component('group', {
  props: [
    'group',
    'classes',
    'classesTitle'
  ],
  template: `
  <div group :class="group.classes">
    <p class="line" :class="group.classesTitle"></p>
    <p class="pb-2" :class="group.classesTitle"> {{ group.title }} </p>
    <list v-for="(list, index) in group.lists" :key="'list' + index" :list="list" />
  </div>`
})