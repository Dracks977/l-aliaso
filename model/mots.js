module.exports = (sequelize, Sequelize, Verbes) => {
	const Mots = sequelize.define('mots', {
		fr: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		cl: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		verbe : {
			type : Sequelize.INTEGER,
			allowNull: true,
			references: {
				model: Verbes,
				key: 'id'
			}
		}
	});
}