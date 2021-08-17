var app = new Vue({
  el: '#app',
  template: `
  <div class="pl-3">
    <top-bar />
    <apresentation />
    <about-me />
    <search v-on:change="search" />
    <group v-for="(group, index) in groups" :key="'group' + index" :group="group" />
  </div>
  `,
  data: {
    groups: [],
    groupsOriginal: [
      {
        title: 'Personal:',
        lists: [
          {
            title: '',
            items: [
              { title: '▪ Autodidact.', visible: true },
              { title: '▪ Proactive.', visible: true },
              { title: '▪ Good relationship.', visible: true },
              { title: '▪ Teamwork.', visible: true },
            ]
          }
        ]
      },
      {
        title: '💪 Skills:',
        lists: [
          {
            title: '# Project management:',
            items: [
              { title: '✔ Scrum', visible: true },
              { title: '✔ Extreme Programming', visible: true }
            ]
          },
          {
            title: '# Managment tools:',
            items: [
              { title: '✔ Taiga', visible: true },
              { title: '✔ Jira', visible: true },
              { title: '✔ Trello', visible: true },
              { title: '✔ Google Drive', visible: true },
              { title: '✔ Slack', visible: true },
              { title: '✔ Discord', visible: true },
              { title: '■ Dropbox', visible: true },
            ]            
          },
          {
            title: '# Language programming:',
            items: [
              { title: '■ Basic', visible: true },
              { title: '■ Pascal', visible: true },
              { title: '■ C', visible: true },
              { title: '■ C++', visible: true },
              { title: '■ JAVA', visible: true },
            ]
          },
          {
            title: '# Bots:',
            items: [
              { title: '✔ Telegram', visible: true },
              { title: '✔ Instagram', visible: true },
            ]
          },
          {
            title: '# Scripts:',
            items: [
              { title: '✔ Typescript', visible: true },
              { title: '✔ Javascript', visible: true },
              { title: '✔ NodeJs', visible: true },
              { title: '✔ HTML 5', visible: true },
              { title: '✔ CSS 3', visible: true },
              { title: '✔ SQL', visible: true },
              { title: '✔ JSON', visible: true },
              { title: '✔ SQL', visible: true },
              { title: '✔ VueJs', visible: true },
              { title: '✔ Vue CLI', visible: true },
              { title: '✔ Vue Composition API', visible: true },
              { title: '✔ Angular 7', visible: true },
              { title: '✔ React', visible: true },
              { title: '■ XML', visible: true },
              { title: '■ Ruby', visible: true },
              { title: '■ ASP', visible: true },
              { title: '■ PHP', visible: true },
              { title: '■ JQuery', visible: true },
              { title: '■ AngularJS', visible: true },
              { title: '■ Angular2', visible: true }
            ]
          },
          {
            title: '# Frameworks:',
            items: [
              { title: '✔ Quasar', visible: true },
              { title: '✔ Nuxt', visible: true },
              { title: '✔ Next', visible: true },
              { title: '✔ Nest', visible: true },
              { title: '✔ TailwindCSS', visible: true },
              { title: '✔ Buefy', visible: true },
              { title: '✔ Materialize', visible: true },
              { title: '✔ Vue Material', visible: true },
              { title: '✔ Phaser 3', visible: true },
              { title: '✔ ThreeJS ', visible: true },
              { title: '✔ PaperJS ', visible: true },
              { title: '■ CodeIgniter', visible: true },
              { title: '■ Rails', visible: true },
              { title: '■ Symfony', visible: true },
              { title: '■ Laravel', visible: true },
              { title: '■ J2ME', visible: true },
              { title: '■ JSE', visible: true },
              { title: '■ Spring', visible: true }
            ]
          },
          {
            title: '# Bots:',
            items: [
              { title: '✔ Telegram', visible: true },
              { title: '✔ Instagram', visible: true },
            ]
          },
          {
            title: '# Programming tools:',
            items: [
              { title: '✔ Visual Studio Code', visible: true },
              { title: '■ Unity3D', visible: true },
              { title: '■ Delphi', visible: true },
              { title: '■ Atom', visible: true },
              { title: '■ Eclipse', visible: true },
              { title: '■ Visual Studio', visible: true },
            ]
          },          
          {
            title: '# Collaborative tools:',
            items: [
              { title: '✔ Github', visible: true },
              { title: '✔ Gitlab', visible: true },
              { title: '■ SVN', visible: true },
            ]
          },
          {
            title: '# Database:',
            items: [
              { title: '✔ Postgres', visible: true },
              { title: '✔ MySQL', visible: true },
              { title: '✔ Maria DB', visible: true },
              { title: '■ Paradox', visible: true },
            ]
          },          
          {
            title: '# No SQL:',
            items: [
              { title: '✔ MongoDB', visible: true },
              { title: '✔ Redis', visible: true },
              { title: '✔ ElasticSearch', visible: true },
            ]
          },          
          {
            title: '# Platforms:',
            items: [
              { title: '✔ Windows', visible: true },
              { title: '✔ Linux', visible: true },
              { title: '✔ Mac', visible: true },
            ]
          },          
          {
            title: '# Art 2D e 3D:',
            items: [
              { title: '✔ Figma', visible: true },
              { title: '✔ Inkscape', visible: true },
              { title: '■ Photoshop', visible: true },
              { title: '■ Krita', visible: true },
              { title: '■ Blender', visible: true },
            ]
          },
          {
            title: '# Languages:',
            items: [
              { title: '✔ Fluent Spanish (read, write and speak)', visible: true },
              { title: '✔ English (read, write and speak)', visible: true },
              { title: '✔ Portuguese Brazil (read, write and speak)', visible: true },
              { title: '✔ Italian (just bad words)', visible: true },
            ]
          },   
        ]
      },
      {
        title: '💪 Experience:',
        lists: [
          {
            title: '# Brazil',
            items: [
              { title: '▪ Developer - Mundo Virtual.', visible: true },
              { title: '▪ Analyst and Developer - Mega System Consultores Asociados LTDA.', visible: true },
              { title: '▪ Senior Developer - Smartcon Consultoría.', visible: true },
              { title: '▪ CTO - Startup Drecon Entretenimentos.', visible: true },
              { title: '▪ Teacher Tech - Digital Games – FTEC.', visible: true },
              { title: '▪ Teacher Programming Logic to kids 7 and 12 years - Drecon.', visible: true },
            ]
          },
          {
            title: '# Spain',
            items: [
              { title: '▪ Frontend developer – Texyon.', visible: true },
              { title: '▪ Frontend developer – Sogiteck.', visible: true },
              { title: '▪ Senior Developer - Smartcon Consultoría.', visible: true },
              { title: '▪ Winner Demiun Startup contest.', visible: true },
              { title: '▪ Full Stack - S2 Grupo.', visible: true },
              { title: '✔ Architect in S2Grupo.', visible: true },
            ]
          }
        ]
      },      
    ]
  },
  mounted () {
    this.clear()
  },
  methods: {
    search (text) {
      console.log('search', text)

      this.groups.map((group, idxG) => {
        group.lists.map((list, idxL) => {
          list.items.map((item, idxI) => {
            item.visible = item.title.toLowerCase().includes(text.toLowerCase())
          })
        })
      })
    },
    clear () {
      this.groups = Object.assign([], this.groupsOriginal)
    }
  }
})