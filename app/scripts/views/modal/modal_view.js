/**
  A base class for helping us display modal content

  @class ModalView
  @extends Ember.View
  @namespace App
  @module App
**/

App.ModalView = Ember.View.extend({
  elementId: 'xac-modal',
  templateName: 'modal/modal',
  classNameBindings: [':modal',':hidden','controller.modalClass']
});