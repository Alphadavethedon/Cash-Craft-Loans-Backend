const cors = require('cors');

// Allow frontend domain
app.use(cors({
  origin: 'https://cashcraftapp.netlify.app',
  credentials: true,
}));
