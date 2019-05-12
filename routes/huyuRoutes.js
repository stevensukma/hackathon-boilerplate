module.exports = (app, models) => {
    app.get('/api/huyu', (req, res) => {
        res.send({hello: 'world'});
    })

    app.get('/api/huyu/create', function(req, res) {
        models.User.create({
            username: 'huyu'
        }).then(function() {
            res.redirect('/');
        });
    });
}