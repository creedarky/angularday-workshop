export default class PhoneDetailController {

  constructor($routeParams, Phone) {
    this.phone = Phone.get({phoneId: $routeParams.phoneId}, (phone) => {
      this.mainImageUrl = phone.images[0];
    })
  }

  setImage(imageUrl) {
    this.mainImageUrl = imageUrl;
  }
}
