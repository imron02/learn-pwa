const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const data = [
    'Nicomachean Ethics',
    'PWA Store',
    'When in doubt: hang up, look up, and call back',
    'Accidentally Turing-Complete',
    'Best Practices for Working with Configuration in Python Applications',
    'The Quiet Revolution of Animal Crossing',
    'Pioneer-era apple types thought extinct found in US West',
    '75-year-old woman with shovel accidentally took down Armenia\'s internet (2011)',
    'The first human trial in Europe of a coronavirus vaccine has begun in Oxford',
    'Difficulties Everywhere: Can Kierkegaard tell us how to live?'
  ]
  return res.status(200).json(data);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));