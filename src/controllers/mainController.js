const TODOS = require('../data/store.js');

const mainController = {};



mainController.get = (req, res) => {
    console.log(TODOS);
    return res.json({
        data: TODOS
    });
};

module.exports = mainController;