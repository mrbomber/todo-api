const applicacao = require('../../services/todo-service');


exports.post = async (req, res, next) => {
    const description = req.body.description
    try {
        const rows = await applicacao.create(description);
        res.status(201).send(rows);
    } catch (err) {
        next(err);
    }
};

exports.put = async (req, res, next) => {

   
    let id = req.params.id;
    const todo = req.body;
   

    try {
        const rows = await applicacao.update(todo, id);
        if (!rows) {
            res.status(404).json({ error: 'Row not found' });
        } else {
            res.status(200).send(rows);
        }
    } catch (err) {
        next(err);
    }
};

exports.delete = async (req, res, next) => {
    let id = req.params.id;

    try {
        const rows = await applicacao.remove(id);
        if (!rows) {
            res.status(404).json({ error: 'Row not found' });
        } else {
            res.status(202).send(rows);
        }

    } catch (err) {
        next(err);
    }
};


exports.get = async (req, res, next) => {
    try {
        const rows = await applicacao.find();
        if (!rows) {
            res.status(404).json({ error: 'Row not found' });
        } else {


            res.status(200).send(rows);
        }
    } catch (err) {
        next(err);
    }
};



exports.getById = async (req, res, next) => {
    let id = req.params.id;
    try {
        const rows = await applicacao.findById(id);
        if (!rows) {
            res.status(404).json({ error: 'Row not found' });
        } else {
            res.status(200).send(rows);
        }
    } catch (err) {
        next(err);
    }
};


