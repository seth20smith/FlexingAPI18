// const mongoose = require('mongoose');

const express = require("express")
const dbConnection = require("./config/connection")
const routes = require("./routes")

const app = express();
const PORT = process.env.PORT || 3001;

// const { User } = require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/virtualsdb', {
//   useFindAndModify: false,
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// mongoose.set('useCreateIndex', true);
// mongoose.set('debug', true);

// app.post('/submit', ({ body }, res) => {
//   const user = new User(body);

//   User.create(user)
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get('/users', (req, res) => {
//   User.find({}).then(users => {
//     res.json(users);
//   });
// });
dbConnection('open'), function(){
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
}
