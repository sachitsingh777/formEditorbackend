const express = require("express");
const { FormModel } = require("../models/Form_model");

const formRouter = express.Router()

 formRouter.get('/', async (req, res) => {
    try {
      const formData = await FormModel.find();
      res.json(formData);
    } catch (err) {
      res.status(500).json({ error: 'Failed to retrieve forms' });
    }
  });


formRouter.post('/create', async (req, res) => {
    try {
      const formData = new FormModel(req.body);
      await  formData.save();
      res.status(201).json(formData);
    } catch (err) {
      res.status(500).json({ error: 'Failed to create the form.' });
    }
  });




formRouter.get('/:id', async (req, res) => {
    try {
      const formData = await FormModel.findOne({"uniqueId":req.params.id});
      if (!formData) {
        return res.status(404).json({ error: 'Invalid unique ID.' });
      }
      res.json(formData);
    } catch (err) {
      res.status(500).json({ error: 'Encountered an issue while fetching the form.' });
    }
  });
 
  module.exports={formRouter}