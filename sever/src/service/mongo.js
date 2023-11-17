const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://kusocisme2301:23012002Nhat@cluster0.xhpotuv.mongodb.net/nasaproject?retryWrites=true&w=majority'

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
}