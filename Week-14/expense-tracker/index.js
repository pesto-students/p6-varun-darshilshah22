const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const transactions = require("./routes/transactions");

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 8080;

// app.use(express.json());
// app.use(express.urlencoded());
// app.use(cors());

// mongoose.connect(
//   "mongodb://localhost:27017/expenseTrackerDB",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   () => {
//     console.log("DB Connected");
//   }
// );

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// });

// const User = new mongoose.model("User", userSchema);

// //Routes
// app.post("/login", (req, res) => {
//   const {email, password} = req.body
//   User.findOne({email: email}, (err, user) => {
//     if(user){
//         if(password === user.password){
//             res.send({message: "Login Successful", user: user})
//         }else{
//             res.send({ message: "Password didn't match" })
//         }
//     }else{
//         res.send("User not registered")
//     }
//   })
// });

// app.post("/register", (req, res) => {
//   const { name, email, password } = req.body;
//   User.findOne({ email: email }, (err, user) => {
//     if (user) {
//       res.send({ message: "User already registered" });
//     } else {
//       const user = new User({
//         name,
//         email,
//         password,
//       });
//       user.save((err) => {
//         if (err) {
//           res.send(err);
//         } else {
//           res.send({ message: "Successfully Registered and Login Now" });
//         }
//       });
//     }
//   });
// });

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
