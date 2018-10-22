module.exports = (mongoose) => {
	let Schema = mongoose.Schema;
	let Mots = new Schema({
		al:  {type: String, required: true}
		comments: [{ body: String, date: Date }],
		traduction: {
			fr: [String]
		},
		desc: {
			al: String,
			fr: String
		},
		conjugaison: [String],
		created : { type: Date, required: true },
		updated : { type: Date, default: Date.now },
	});
	mot = mongoose.model('Mots', Mots);
}