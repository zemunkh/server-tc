const db = require('../config/db.config.js');
const Customer = db.customers;
 
// Post a Customer
exports.create = (req, res) => {	
	// Save to MySQL database
	Customer.create({
        passportId: req.body.passportId,  
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		gender: req.body.gender,
		courtTime: req.body.courtTime,
		poolTime: req.body.poolTime,
		fitnessTime: req.body.fitnessTime,
		aeroTime: req.body.aeroTime,
		subTime: req.body.subTime,
		email: req.body.email,
        birthdate: req.body.birthdate,  // new Date(1980, 6, 20)
        department: req.body.department,
        jobTitle: req.body.jobTitle,
		testedDate: req.body.testedDate,
		phoneNumber: req.body.phoneNumber,
	}).then(customer => {		
		// Send created customer to client
		res.status(200).send(customer);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};
 
// FETCH all Customers
exports.findAll = (req, res) => {
	Customer.findAll().then(customers => {
		// Send all customers to Client
		// console.log('On DB Customers: ', customers);
		res.status(200).send(customers);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};
 
// Find a Customer by Id
exports.findById = (req, res) => {
	const id = req.body.customerId;
	console.log('Customer id is! ', id);
	Customer.findAll({
		where: {
			id: id
		}
	}).then(
		customers => {
			res.send(customers)
		}
	).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};

// Find Customers by Age
exports.findByFirstname = (req, res) => {
	Customer.findAll({
		where: {
			firstname: req.params.firstname
		}
	}).then(
		customers => {
			res.send(customers)
		}
	).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};
 
// Update a Customer
exports.update = (req, res) => {
	var customer = req.body;
	const id = req.body.id;
	console.log('They called me!!! ', id);
	Customer.update( { 
        passportId: req.body.passportId,  
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		gender: req.body.gender,
		courtTime: req.body.courtTime,
		poolTime: req.body.poolTime,
		fitnessTime: req.body.fitnessTime,
		aeroTime: req.body.aeroTime,
		subTime: req.body.subTime,
		email: req.body.email,
        birthdate: req.body.birthdate,  // new Date(1980, 6, 20)
        department: req.body.department,
        jobTitle: req.body.jobTitle,
		testedDate: req.body.testedDate,
		phoneNumber: req.body.phoneNumber,
	}, { where: {id: id} }).then(() => {
		res.status(200).send(customer);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
	const id = req.body.id;
	Customer.destroy({
	  where: { id: id }
	}).then(() => {
		res.status(200).send({message: 'Customer has been deleted!'});
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	});
};