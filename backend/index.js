const express = require('express');
const sequelize = require('./config/db').default;
const app = express();
const fetchRoutes = require('./routes/fetchRoutes').default
const updateRoutes = require('./routes/updateRoutes').default.default.default
const PORT = process.env.PORT || 3001;
const cors = require('cors')

async function init() {
  try {
    await sequelize.sync({ force: false });
    console.log("Synkroniserat tabellerna")
  } catch (error) {
    console.error("Ett fel uppstod: ", error);
  }
}

const corsOptions = {
  //origin: ['http://localhost:5173', 'http://frontend:5173', 'http://192.168.*.*:5173'],
  origin: '*',
  methods: ['GET', 'POST'],
};

init();

app.use(express.json())
app.use(cors(corsOptions));
app.use('/api/update', updateRoutes)
app.use('/api/get', fetchRoutes)

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
