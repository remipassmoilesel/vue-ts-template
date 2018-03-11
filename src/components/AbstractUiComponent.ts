import Vue from 'vue';

export abstract class AbstractUiComponent extends Vue {

  public abstract componentName: string;
  public abstract componentDescription: string;
  public abstract componentTagName: string;

  constructor (data?: any) {
    super(data);
  }
}
