export default class Connected {
  constructor(tcpConnection) {
    this.tcpConnection = tcpConnection;
  }

  getConnectionStateName() {
    return 'connected';
  }

  write() {
  }
}
