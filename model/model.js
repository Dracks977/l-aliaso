module.exports = (sequelize, Sequelize) => {
	const Verbes = sequelize.define('verbes', {
		'1': {
			type: Sequelize.STRING(100),
			allowNull: false,
		},
		'2': {
			type: Sequelize.STRING(100),
			allowNull: false,
		},
		'3': {
			type: Sequelize.STRING(100),
			allowNull: false,
		},
		'4': {
			type: Sequelize.STRING(100),
			allowNull: false,
		},
		'5': {
			type: Sequelize.STRING(100),
			allowNull: false,
		},
		'6': {
			type: Sequelize.STRING(100),
			allowNull: false,
		},
		'7': {
			type: Sequelize.STRING(100),
			allowNull: false,
		},
		'8': {
			type: Sequelize.STRING(100),
			allowNull: false,
		}
	});

	const Mots = sequelize.define('mots', {
		fr: {
			type: Sequelize.STRING(100),
			allowNull: false,
			unique: true
		},
		al: {
			type: Sequelize.STRING(100),
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