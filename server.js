const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req, res) => {

    console.log(req.query.code);
    axios.post(`https://gitee.com/oauth/token`, {
        grant_type: 'authorization_code',
        code: `${req.query.code}`,
        client_id: '20f986ff4c5c3a95353bc7fcdb5791c680ef70e4f977908a60dd9632ea3342fa',
        redirect_uri:'https://gitee.com/login/durant',
        client_secret: '8b732afcfe1501dd01654f1ed1f0c30655b6625f6e90410b8b94b99d0806f023',

    }, {
        Headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    )
        .then(res => { console.log(res); })
    res.send('Hello World')
})
app.get('/oauth/redirect', (req, res) => {
    // console.log(req);
    res.send('/oauth/redirect')
})



app.listen(durant, () => {
    console.log('https://gitee.com/login/durant');
})