import Vue, { Component } from 'vue';
import * as _ from 'lodash';
import {default as Sinon, SinonSpy} from 'sinon';
import { ILogger } from './log';

export interface IComponents {
  [key: string]: Component;
}

export class ComponentTest {

  public vm: Vue;

  constructor (private template: string, private components: IComponents) {
  }

  public createComponent (createOptions?: any): void {
    const options = {
      template: this.template,
      components: this.components,
    };
    if (createOptions) { _.merge(options, createOptions); }
    this.vm = new Vue(options).$mount();
  }

  public async execute (callback: (vm: Vue) => Promise<void> | void): Promise<void> {
    await Vue.nextTick();
    await callback(this.vm);
  }

}

export class MockLogger implements ILogger {
  private loggerSpy: Sinon.SinonSpy;
  public namespace: string;

  constructor (loggerSpy: SinonSpy) {
    this.loggerSpy = loggerSpy;
  }

  public info (msg: any) {
    this.loggerSpy(msg);
  }

  public warn (msg: any) {
    this.loggerSpy(msg);
  }

  public error (msg: any) {
    this.loggerSpy(msg);
  }
}
