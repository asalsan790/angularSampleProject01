const express = require('express')
const app = express()
app.use(express.static('./dist/angularSampleProject01'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/angularSampleProject01/'}
  );
});
const port = 3500;
app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
