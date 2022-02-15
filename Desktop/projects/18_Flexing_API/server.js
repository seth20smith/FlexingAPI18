
const express = require("express")
const mongoose = require('mongoose');
const app = express();
// const dbConnection = require("./config/connection")
const PORT = process.env.PORT || 3001;



// const { User } = require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))


// app.use(routes);
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/18_FLEXING_API', {
//     useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   });
  
  mongoose.set('debug', true);
  
  const routes = require("./routes")
    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}!`);
    });
