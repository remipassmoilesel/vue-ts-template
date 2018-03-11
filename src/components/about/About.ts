import {Component, Vue} from 'vue-property-decorator';
import {Logger} from '../../util/log';

@Component({
  template: require('./About.html'),
})
export class AboutComponent extends Vue {

  public repo: string = 'https://github.com/ducksoupdev/vue-webpack-typescript';
  protected logger: Logger = new Logger('AboutComponent');

  public mounted() {
    this.$nextTick(() => this.logger.info('about is ready!'));
  }
}
