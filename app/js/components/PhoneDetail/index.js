import template from './phone-detail.html';
import batteryTemplate from './battery-template.html';
import PhoneDetailController from './PhoneDetailController';

export default angular.module('phoneDetail', []).
  component('phoneDetail', {
    template,
    controller: PhoneDetailController,
    controllerAs: 'phoneDetail'
  })
  .component('battery', {
    template: batteryTemplate,
    bindings: { battery: '<'}
  })
  .name;
