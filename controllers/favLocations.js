const favLocation = require('../models/favLocation');
const express = require('express');
const favLocationRouter = express.Router();

//create
favLocationRouter.post('/', async (req, res) => {
    try {
        const newFavLocation = await favLocation.create(req.body);
        res.status(200).json(newFavLocation)
    } catch (error) {
        res.status(400).json(error)
    }
})

//read/index
favLocationRouter.get('/', async (req, res) => {
    try {
        const foundFavorites = await favLocation.find({})
        res.status(200).json(foundFavorites)
    } catch (error) {
        res.status(400).json(error)
    }
})

//show
favLocationRouter.get('/:id', async (req, res) => {
    try {
        const foundFavorite = await favLocation.findById(req.params.id)
        res.status(200).json(foundFavorite)
    } catch (error) {
        res.status(400).json(error)
    }
})

//destroy
favLocationRouter.delete('/:id', async (req, res) => {
    try {
        const foundFavorite = await favLocation.findByIdAndDelete(req.params.id)
        res.status(200).json(foundFavorite)
    } catch {
        res.status(400).json(error)
    }
})

//update
favLocationRouter.put('/:id', async (req, res) => {
    try {
        const foundFavorite = await favLocation.findByIdAndUpdate(req.params.id)
        res.status(200).json(foundFavorite)
    } catch {
        res.status(400).json(error)
    }
})

module.exports = favLocationRouter;