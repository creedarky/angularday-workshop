export default class ConnectivityController {

  constructor($element) {
    this.$element = $element;
  }

  $onInit() {
    console.log('ConnectivityController.init')
  }

  $onChanges(changes) { //hash with changes
    console.log('ConnectivityController.changes', changes);
  }
  // Used when the component is destroyed, useful to remove bindings
  $onDestroy() {
    console.log('ConnectivityController.destroy');
    this.$element.off();
  }

  $postLink() {
    console.log('ConnectivityController.postLink');
    this.$element.on('click', () => {
      this.showAlert();
    });
  }

  showAlert() {
    alert('Hey, I was clicked');
  }
}
