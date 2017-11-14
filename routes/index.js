var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	connection.query('select * from users', function(err, data){
		if (err) {
			console.log(err);
		}else{
			console.log(data);
			res.render('index', { title: 'NodeJS MySQL CRUD', data:data });
		}
	});
});

router.get('/byId', function(req, res, next){
	connection.query('select * from users where id="'+req.param('id')+'"', function(err, data){
		if (err) {
			console.log(err);
		}else{
			console.log(data);
			res.render('index', { title: 'NodeJS MySQL CRUD', data:data});
		}
	});
});

router.post('/create', function(req, res, next){
	if (req.body.id>0) {
		connection.query('update users set first_name = "'+req.body.first_name+'", last_name = "'+req.body.last_name+'", phone = "'+req.body.phone+'", email = "'+req.body.email+'" where id = "'+req.body.id+'"', function(err, data){
		if (err) {
			console.log(err);
		}else{
			console.log(data);
		}
		res.redirect('/');
	});
	}else{
		connection.query('insert into users (first_name, last_name, phone, email) values ("'+req.body.first_name+'","'+req.body.last_name+'","'+req.body.phone+'","'+req.body.email+'")', function(err, data){
		if (err) {
			console.log(err);
		}else{
			console.log(data);
		}
		res.redirect('/');
	});
	}
});

router.post('/delete', function(req, res, next){
	connection.query('delete from users where id = "'+req.param('id')+'"', function(err, data){
		if (err) {
			console.log(err);
		}else{
			console.log(data);
		}
		res.redirect('/');
	});
});

module.exports = router;
