const express = require("express");
const { AnswerModel } = require("../models/Answer_model");
const answerRouter = express.Router()


answerRouter.post('/create', async (req, res) => {
   
      try {
        const answer = new AnswerModel(req.body);
        await answer.save();
        res.status(201).json(answer);
      } catch (err) {
        res.status(500).json({ error: 'Failed to create the form.' });
      }
    });

    module.exports={answerRouter}
  