import {Component, Vue} from 'vue-property-decorator'
import axios, {AxiosResponse} from 'axios'

interface UserResponse {
  id: string
  name: string
}

@Component({
  template: require('./List.html'),
})
export class ListComponent extends Vue {

  items: UserResponse[] = []
  protected axios
  private url = 'https://jsonplaceholder.typicode.com/users'

  constructor() {
    super()
    this.axios = axios
  }

  mounted() {
    this.$nextTick(() => {
      this.loadItems()
    })
  }

  private loadItems() {
    if (!this.items.length) {
      this.axios.get(this.url).then((response: AxiosResponse) => {
        this.items = response.data
      }, (error) => {
        console.error(error)
      })
    }
  }
}
