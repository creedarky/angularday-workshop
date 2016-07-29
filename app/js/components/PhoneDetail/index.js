import template from './phone-detail.html';
import batteryTemplate from './battery-template.html';
import connectivityTemplate from './connnectivity-template.html'
import PhoneDetailController from './PhoneDetailController';
import ConnectivityController from './ConnectivityController';

export default angular.module('phoneDetail', []).
  component('phoneDetail', {
    template,
    controller: PhoneDetailController,
    controllerAs: 'phoneDetail'
  })
  //Stateless component
  .component('battery', {
    template: batteryTemplate,
    bindings: { battery: '<'}
  })
  //Lifecycle example
  .component('connectivity', {
    template: connectivityTemplate,
    controller: ConnectivityController,
    bindings: { connectivity: '<' }
  })
  .name;
