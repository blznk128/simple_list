const db = require('../models');

module.exports = (app) => {
    //creates new item
    app.post("/api/newItem", (req, res) => {
        db.List.create({
            item: req.body.item,
            is_done: req.body.is_done
        }).then(dbItem => {
            res.json(dbItem)
            console.log("new item: ", dbItem)
        })
    })

    app.get("/api/getAllItems", (req, res) => {
        db.List.findAll({
            
        }).then((dbItemToSend) => {
            res.json(dbItemToSend)
        })
    });
    
}