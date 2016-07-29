import PhoneDetailController from './PhoneDetailController';
import PhoneListCtrl from './PhoneListCtrl';


export default angular.module('phonecatControllers', [])
  .controller('PhoneListCtrl', PhoneListCtrl)
  .controller('PhoneDetailController', PhoneDetailController)
  .name;
