import {Component, Vue, Watch} from 'vue-property-decorator';
import {Link} from './Link';
import {Logger} from '../../util/log';
import {AbstractUiComponent} from '../AbstractUiComponent';

@Component({
  template: require('./Navbar.html'),
})
export class NavbarComponent extends AbstractUiComponent {
  public componentName: string = 'Navigation bar';
  public componentDescription: string = 'Top level navigation bar';
  public componentTagName: string = 'navbar';

  public object: { default: string } = {default: 'Default object property!'};
  public links: Link[] = [
    new Link('Home', '/'),
    new Link('About', '/about'),
    new Link('List', '/list'),
  ];

  protected logger: Logger = new Logger('NavbarComponent');

  @Watch('$route.path')
  public pathChanged() {
    this.logger.info('Changed current path to: ' + this.$route.path);
  }

  public mounted() {
    this.$nextTick(() => this.logger.info(this.object.default));
  }
}
