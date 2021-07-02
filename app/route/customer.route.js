module.exports = function(app) {
    const customers = require('../controller/customer.controller.js');

    // Create a new Customer
    app.post('/api/customers', customers.create);
 
    // Retrieve all Customer
    app.get('/api/customers', customers.findAll);
 
    // Retrieve a single Customer by Id
    app.post('/api/customers/get', customers.findById);
	
	// Retrieve Customers Age
    app.get('/api/customers/firstname/:firstname', customers.findByFirstname);
 
    // Update a Customer with Id
    app.post('/api/customers/update', customers.update);
    
    // Delete a Customer with Id
    app.post('/api/customers/delete', customers.delete); 
}