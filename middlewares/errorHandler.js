const errorHandler = (err, req, res, next) => {
	let message;

	switch (err.name) {
		case "SequelizeValidationError":
			message = err.errors.map((el) => el.message);
			res.status(400).json({ message })
			break;

		case "SequelizeUniqueConstraintError":
			message = err.errors.map((el) => el.message);
			res.status(400).json({ message })
			break;

		case "not found":
			message = "Intent not found";
			res.status(404).json({ message });
			break;

		default:
			console.log(err);
			res.status(500).json({ message: "Internal Server Error" });
			break;
	}
};

module.exports = errorHandler;