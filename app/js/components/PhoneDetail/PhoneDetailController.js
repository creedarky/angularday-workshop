export default class PhoneDetailController {

  constructor($routeParams, Phone) {
    "ngInject";
    this.Phone = Phone;
    this.phoneId = $routeParams.phoneId;
  }

  $onInit() {
    this.phone = this.Phone.get({phoneId: this.phoneId}, (phone) => {
      this.mainImageUrl = phone.images[0];
    })
  }

  setImage(imageUrl) {
    this.mainImageUrl = imageUrl;
  }
}
