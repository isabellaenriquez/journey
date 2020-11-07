const express = require('express');
const app = express()
app.use(express.json())

const language = require('@google-cloud/language');
const client = new language.LanguageServiceClient();

app.post('/api/sendEntry', async function (req, res) {
    const text = req.body.text;
    const document = {
        content: text,
        type: 'PLAIN_TEXT'
    }

    const [result] = await client.analyzeSentiment({document: document});
    res.json(result);
})

app.listen(3001);
