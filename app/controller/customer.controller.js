const db = require('../config/db.config.js');
const Customer = db.customers;
 
// Post a Customer
exports.create = (req, res) => {	
	// Save to MySQL database
	Customer.create({
        customerId: req.body.customerId,  
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		gender: req.body.gender,
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
		console.log('On DB Customers: ', customers);
		res.status(200).send(customers);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};
 
// Find a Customer by Id
exports.findById = (req, res) => {	
	Customer.findById(req.params.customerId).then(customer => {
		res.status(200).send(customer);
	}).catch(err => {
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
	const id = req.params.customerId;
	Customer.update( { 
        customerId: req.body.customerId,  
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		gender: req.body.gender,
		email: req.body.email,
        birthdate: req.body.birthdate,  // new Date(1980, 6, 20)
        department: req.body.department,
        jobTitle: req.body.jobTitle,
		testedDate: req.body.testedDate,
		phoneNumber: req.body.phoneNumber,
	}, { where: {id: req.params.customerId} }).then(() => {
		res.status(200).send(customer);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
	const id = req.params.customerId;
	Customer.destroy({
	  where: { id: id }
	}).then(() => {
		res.status(200).send('Customer has been deleted!');
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	});
};