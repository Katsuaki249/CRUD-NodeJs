module.exports = function(application){
	application.get('/', function(req, res){
		res.send('<h1>Primeiro CRUD em NodeJs</h1>');
	});
}