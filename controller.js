const db = require('./db')

class Controller{
    async createData(req, res){
        const {author, text} = req.body
        const newData = await db.query(`insert into "Comments" ("Author", "TextText") values($1, $2) returning *`, [author, text])
        res.json(newData)
    }
}
 
module.exports = new Controller()
exports