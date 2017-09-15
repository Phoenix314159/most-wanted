module.exports = app => {

    app.get('/api/getinfo', (req, res) => {

        res.status(200).send('Yo Man!');
    })
}