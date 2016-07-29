
export default class PhoneListCtrl {
  constructor(Phone) {
    this.phones = Phone.query();
    this.orderProp = 'age';
    this.query = '';
  }
}

