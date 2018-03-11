import Vue from 'vue';
import * as assert from 'assert';
import * as _ from 'lodash';
import { AbstractUiComponent } from './AbstractUiComponent';
import { NavbarComponent } from './navbar';

const BootstrapVue = require('bootstrap-vue');
Vue.use(BootstrapVue);

const components: AbstractUiComponent [] = [
  new NavbarComponent(),
];

const checkInstance = (inst: AbstractUiComponent) => {
  assert.ok(inst.componentName && inst.componentName.length > 1);
  assert.ok(inst.componentDescription && inst.componentDescription.length > 1);
  assert.ok(inst.componentTagName && inst.componentTagName.length > 1);
};

_.forEach(components, (instance: AbstractUiComponent) => {

  checkInstance(instance);

    // register components globally
  Vue.component(instance.componentTagName, instance.constructor);

});
