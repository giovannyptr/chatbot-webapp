const { Profile } = require('../models')

class UserController {

    static async createBotProfile(req, res, next) {

        try {
            const {name, description}  = req.body
			const photo = req.body.photo ? req.body.photo : "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg";
            const response = await Profile.create({name, photo, description})

            res.status(201).json({ message: "your bot profile has already created"})

        } catch (err) {
            next(err)

        }
    }

    static async editBotProfile(req, res, next) {
		try {
			const id = req.params.id

			const { name, picture, description } = req.body
			console.log('nama:', name);

			const target = await Profile.findOne({ where: { id: id || null } });

			if (!target) {
				throw { name: "profile not found" };
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