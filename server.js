const express = require('express')
const app = express()
const port = 80 || 3000

app.get('/ContactUs', (req, res) => {
    res.send(`<h2>Contact Us</h2>` + `<span>You can contact us here<span>`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})