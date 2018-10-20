module.exports = function(sequelize){
	const Verbes = sequelize.define('mots', {
		'1': {
			type: Sequelize.STRING,
			allowNull: false,
		},
		'2': {
			type: Sequelize.STRING,
			allowNull: false,
		}
		'3': {
			type: Sequelize.STRING,
			allowNull: false,
		}
		'4': {
			type: Sequelize.STRING,
			allowNull: false,
		}
		'5': {
			type: Sequelize.STRING,
			allowNull: false,
		}
		'6': {
			type: Sequelize.STRING,
			allowNull: false,
		}
		'7': {
			type: Sequelize.STRING,
			allowNull: false,
		}
		'8': {
			type: Sequelize.STRING,
			allowNull: false,
		}
	});
}