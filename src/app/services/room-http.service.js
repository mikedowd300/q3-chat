module.exports = ['$http', 'currentRoom', function($http, currentRoom) {
  const service = this;
  const endpoint = 'http://localhost:5200/api';

  service.getRoom = function () {
    let roomName = currentRoom.is();
    let path = `/rooms/${roomName}`;
    console.log(endpoint + path);
    return $http.get(endpoint + path)
  }
}];