module.exports = (mongoose) => {
	let Schema = mongoose.Schema;

	let Mots = new Schema({
		al:  {type: String, required: true},
		traduction: {
			fr: [String]
		},
		desc: {
			al: String,
			fr: String
		},
		conjugaison: [String],
		created : { type: Date },
		updated : { type: Date },
	});
	
	Mots.pre('save', function(next){
		now = new Date();
		this.updated = now;
		if ( !this.created ) {
			this.created = now;
		}
		next();
	});
	MOTS = mongoose.model('Mots', Mots);
}