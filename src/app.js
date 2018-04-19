const Peer = require('peerjs');
const uid = require('uid');

const config = {host: 'https://stream180419.herokuapp.com/', port: 443, secure: true, key: 'peerjs'}

const peer = Peer(uid(10), config);
