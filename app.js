const express = require("express");

const app = express();

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: false }));

const messages = [];


// 顯示所有留言
app.get("/p", (req, res) => {
    res.sendFile(__dirname + "/practice.html");
    
  });
              
// 新增留言
app.post("/p", (req, res) => {
  const name = req.body.iname;
  const message = req.body.imessage;

  console.log(`新增留言：${name} - ${message}`);

  // res.redirect("/p");
  res.render(__dirname + "/practice.html", { messages: message });
});
  

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});