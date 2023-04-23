const { Profile } = require('../models')

class UserController {

    static async createBotProfile(req, res, next) {

        try {
            const {name, picture, description}  = req.body
            const response = await Profile.create({name, picture, description})

            res.status(201).json({ id: response.id, name: response.name, description: response.description, picture: 'success'})

        } catch (err) {
            next(err)

        }
    }

    static async editProfile(req, res, next) {
		try {
            console.log("test")
			const id = req.params.id
            console.log("chek", req.params.id);

			const { name, picture, description } = req.body
            console.log("id >>>", id)

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

			res.status(200).json({ message: `Profile with id ${id} has been updated! ${name}` })

		} catch (err) {
			next(err);
		}
	}


}

module.exports = UserController