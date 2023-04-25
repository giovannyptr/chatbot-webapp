const { Intent } = require('../models')
const { Op } = require('sequelize');

class IntentController {

    static async createIntent(req, res, next) {

        try {
            const {intent, utterance, response}  = req.body

            let utterances = []
            utterances.push(req.body.utterance)
            const responses = await Intent.create({intent, utterances, response})

            res.status(201).json({ id: responses.id, intent: responses.intent, utterances: responses.utterances, response: responses.response})

        } catch (err) {
            next(err)

        }
    }

    static async addUtterance(req, res, next) {
		try {
			const id = req.params.id

            let utterances = []
            utterances.push(req.body.utterance)

			const target = await Intent.findOne({ where: { id: id || null } });

			if (!target) {
				throw { title: "not found" };
			}

            let newUtterances = utterances
            let oldUtterances = target.utterances

			await Intent.update(
				{
				    utterances: oldUtterances.concat(newUtterances)
				},
				{
					where: { id: id || null },
				}
			);

			res.status(200).json({ message: `Utterance: "${utterances}" has been added!` })

		} catch (err) {
			next(err);
		}
	}


    static async response(req, res, next) {
		try {

			const utterances = req.body.input

			const result = await Intent.findOne({
				where: {
                    utterances: {
                      [Op.contains]: [utterances],
                    },
                  },
			});


			if (!result) {
				throw { title: "not found" };
			}

			res.status(200).json(result.response)

		} catch (err) {
			next(err);
		}
	}




}

module.exports = IntentController