export default class Disconnected {
  constructor(tcpConnection) {
    this.tcpConnection = tcpConnection;
  }

  getConnectionStateName() {
    return 'disconnected';
  }

  write() {
    throw new Error('Out of connect');
  }
}
