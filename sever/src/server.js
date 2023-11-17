const http = require('http');
const app = require('./app');
const PORT = process.env.PORT || 8000;
const { loadPlanetsData } = require('./models/model.planets');
const { mongoConnect } = require('./service/mongo');
const { loadLaunchData } = require('./models/model.launches');
const server = http.createServer(app);


async function startSever() {
    await mongoConnect();
    await loadPlanetsData();
    await loadLaunchData();
    server.listen(PORT, () =>{
        console.log(`Listen on Port ${PORT} .. `);
    });
}
startSever();