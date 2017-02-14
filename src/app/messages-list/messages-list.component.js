import template from './messages-list.template.html';
import R from 'ramda';

const controller = [
  'socket', '$scope', 'currentUser', 'appState', 'socketListeners',
  function(socket, $scope, currentUser, appState, socketListeners) {
  const vm = this;

  vm.$onInit = function() {
    vm.currentUser = currentUser;
    socketListeners.on(`room-new-message`, function(data) {
      if (!R.contains(data.userId, currentUser.blockUsers)) {
        let message = {
          user: {
            username: data.username
          },
          content: data.message
        }
        vm.messages.push(message);
        $scope.$apply();
      }

    });
  }
}];

module.exports = {
  template,
  controller,
  bindings: {
    messages: "=",
    isOnCall: '='
  }
}
