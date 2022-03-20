import DisconnectedState from './states/Disconnected.js';
import ConnectedState from './states/Connected.js';

export default class TcpConnection {
  // BEGIN (write your solution here)
  constructor(ipAdress, port) {
    this.ipAdress = ipAdress;
    this.port = port;
    this.states = {
      Connect: ConnectedState,
      Disconnect: DisconnectedState,
    };
    this.state = new this.states.Disconnect(this);
  }

  getCurrentState() {
    return this.state.getConnectionStateName();
  }

  write() {
    this.state.write();
  }

  connect() {
    if (this.state.getConnectionStateName() === 'connected') {
      throw new Error('You already connected');
    }
    this.state = new this.states.Connect(this);
  }

  disconnect() {
    if (this.state.getConnectionStateName() === 'disconnect') {
      throw new Error('You already disconnected');
    }
    this.state = new this.states.Disconnect(this);
  }
  // END
}

const connection = new TcpConnection('132.223.243.88', 2342);

connection.connect();
connection.connect();

// connection.write('data');
