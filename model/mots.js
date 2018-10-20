module.exports = (sequelize, Sequelize) => {
	const Verbes = sequelize.define('mots', {
		'1': {
			type: Sequelize.STRING,
			allowNull: false,
		},
		'2': {
			type: Sequelize.STRING,
			allowNull: false,
		},
		'3': {
			type: Sequelize.STRING,
			allowNull: false,
		},
		'4': {
			type: Sequelize.STRING,
			allowNull: false,
		},
		'5': {
			type: Sequelize.STRING,
			allowNull: false,
		},
		'6': {
			type: Sequelize.STRING,
			allowNull: false,
		},
		'7': {
			type: Sequelize.STRING,
			allowNull: false,
		},
		'8': {
			type: Sequelize.STRING,
			allowNull: false,
		}
	});
	
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