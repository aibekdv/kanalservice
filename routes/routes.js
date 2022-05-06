const express = require('express')
const Table = require('../models/table')

const router = express.Router()

// post method for create
router.post('/add', async (req, res) => {
    const newTable = new Table({
        title: req.body.title,
        count: req.body.count,
        distance: req.body.distance,
    })

    try {
        const dataToSave = await newTable.save()
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({message: error.message})
    }

})

//Get all Method
router.get('/posts', async (req, res) => {
    try{
        const data = await Table.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

module.exports = router;