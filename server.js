const express = require("express");
const app = express();
const connectDB = require("./server/config/db");
const PORT = process.env.PORT || 5000;

//connect to mongoDB
connectDB();

//define routes and API
app.use(express.json({ extended: false }));
app.use("/api/users", require("./server/routes/userApi"));
app.use("/api/products", require("./server/routes/productsApi"));
app.use("/api/auth", require("./server/routes/authApi"));
app.use("/api/profile", require("./server/routes/profileApi"));

app.get("/", (req, res) => {
  res.send("My app is up");
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
