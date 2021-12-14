const TodoController = require('../Controllers/TodoController');
module.exports = (app) => {
   app.post('/todo', TodoController.post);
   app.put('/todo/:id', TodoController.put);
   app.delete('/todo/:id', TodoController.delete);
   app.get('/todo', TodoController.get);
   app.get('/todo/:id', TodoController.getById);
}