App.ModalBodyView = Ember.View.extend({

   // Focus on first element
  didInsertElement: function() {

      $('#xac-modal').modal('show');

      var controller = this.get('controller');

      $('#xac-modal').on('hide.xac', function() {
          controller.send('closeModal');
      });

      $('#modal-alert').hide();

      /* Focus on the first form element after rendering modal */
      var modalBodyView = this;
      Ember.run.schedule('afterRender', function() {
        modalBodyView.$('input:first').focus();
      });

      //var title = this.get('title');
      //if (title) {
      //   this.set('controller.controllers.modal.title', title);
      //}
  },

  willDestroyElement: function() {
      $('#xac-modal').off('hide.xac');
  }
});