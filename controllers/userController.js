const { Profile } = require('../models')

class UserController {

    static async createBotProfile(req, res, next) {

        try {
            const {name, photo, description}  = req.body
            const response = await Profile.create({name, photo, description})

            res.status(201).json({ id: response.id, name: response.name, description: response.description, photo: response.picture})

        } catch (err) {
            next(err)

        }
    }

    static async editBotProfile(req, res, next) {
		try {
			const id = req.params.id

			const { name, picture, description } = req.body

			const target = await Profile.findOne({ where: { id: id || null } });

			if (!target) {
				throw { title: "not found" };
			}

			await Profile.update(
				{
					name,
					description,
                    picture
				},
				{
					where: { id: id || null },
				}
			);

			res.status(200).json({ message: `Profile with id ${id} has been updated!` })

		} catch (err) {
			next(err);
		}
	}


}

module.exports = UserController