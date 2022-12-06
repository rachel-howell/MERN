const Controller = require('../controllers/jokes.controller');

module.exports = (app) => {
    app.post('/api/jokes', Controller.createJoke)
    app.get('/api/jokes', Controller.getJoke)
    app.put('/api/jokes/:_id', Controller.update)
    app.get('/api/jokes/:_id', Controller.getById)
    app.delete('/api/jokes/:_id', Controller.deleteJoke)
}