import Ember from 'ember';

export default Ember.Service.extend({
  init: function () {
    Messenger.options = {
      extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right',
      theme: 'air'
    }
  },
  setup: function (options) {
    return Messenger.options = $.extend({}, Messenger.options, options);
  },
  post: function (args) {
    Messenger().post(args);
  },
  run: function (args) {
    Messenger().run(args);
  },
  hideAll: function () {
    Messenger().hideAll();
  }
});