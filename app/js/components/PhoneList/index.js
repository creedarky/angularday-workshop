import template from './phone-list.html';
import PhoneListCtrl from './PhoneListCtrl';

export default angular.module('phoneList', []).
  component('phoneList', {
    template,
    controller: PhoneListCtrl,
    controllerAs: 'phoneList'
  }).name;
