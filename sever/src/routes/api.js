const express = require('express');

const planetsRouter = require('./planets/router.planets');
const launchesRouter = require('./launches/router.launches');

const api = express.Router()


api.use('/planets',planetsRouter);
api.use('/launches',launchesRouter);

module.exports = api;