const { v4: uuidv4 } = require('uuid');

const TODOS = [
    {
          id: uuidv4(),
          title: 'Learn React',
          completed: false,
          date: new Date(),
    },
    {
            id: uuidv4(),
            title: 'Learn Node',
            completed: false,
            date: new Date(),
    },
    {
            id: uuidv4(),
            title: 'Learn Express',
            completed: false,
            date: new Date(),
    },


];
    
module.exports = TODOS;