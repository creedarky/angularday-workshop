
export default class PhoneListCtrl {
  constructor(Phone) {
    this.Phone = Phone;
  }

  $onInit() {
    this.phones = this.Phone.query();
    this.orderProp = 'age';
    this.query = '';
  }
}

