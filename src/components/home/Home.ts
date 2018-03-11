import {Component, Vue} from 'vue-property-decorator'

import './Home.scss'

@Component({
  template: require('./Home.html')
})
export class HomeComponent extends Vue {

  package: string = 'vue-webpack-typescript'
  repo: string = 'https://github.com/ducksoupdev/vue-webpack-typescript'
  mode: string = process.env.ENV

}
