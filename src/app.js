const Peer = require('peerjs');
const uid = require('uid');
const $ = require('jquery');

const config = { host: 'fast-shelf-30395.herokuapp.com', port: 443, secure: true, key: 'peerjs' }

function getPeer() {
  const id = uid(10);
  $('#peer-id').append(id);
  return id;
}

const peer = Peer(getPeer(), config);
