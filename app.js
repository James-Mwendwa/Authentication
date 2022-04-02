const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const user = require('./models/user');


const app = express();

// connect to mongoDB
const Authdb =
  "mongodb+srv://form:0987jmk@node-tuto.bpyf5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(Authdb)
.then(() => app.listen(5000))
.catch((err) => console.log(err));


app.set('view engine', 'ejs');

//routes
app.use('/', require('./routes/index'));
app.use("/users", require("./routes/users"));

//middleware
app.use(morgan('dev'));
app.use(express.static('public'));
// app.use(express.static(__dirname));

// app.get("/add-user", (req, res) => {
//   const user = new User({
//     name: "",
//     email: "",
//     password: "",
//     date: Date.now
//   });


app.use((req, res) => res.render('404'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on port ${PORT}`));