import template from './phone-detail.html';
import PhoneDetailController from './PhoneDetailController';

export default angular.module('phoneDetail', []).
  component('phoneDetail', {
    template,
    controller: PhoneDetailController,
    controllerAs: 'phoneDetail'
  }).name;
