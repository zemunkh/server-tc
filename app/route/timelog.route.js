module.exports = function(app) {
    const timelogs = require('../controller/timelog.controller.js');

    // Create a new Timelog
    app.post('/api/timelogs', timelogs.create);
 
    // Retrieve all Timelog
    app.get('/api/timelogs/all', timelogs.findAll);
 
    // Retrieve a single Timelog by timelogId
    // app.get('/api/timelogs/:timelogId', timelogs.findByTimelogId);
	
	// Retrieve Timelog customerId
    app.post('/api/timelogs/search/customer', timelogs.findByCustomerId);

	// Retrieve Timelog customerId with Active
    app.post('/api/timelogs/search/customer/active', timelogs.findByCustomerIdActive);

	// Retrieve Timelog roomId
    app.post('/api/timelogs/search/room', timelogs.findByRoomId);

    // Retrieve Timelog by Date Range on RoomId
    app.post('/api/timelogs/search/room/range', timelogs.findByRoomDateRange);

    // Retrieve Timelog by Date Range
    app.post('/api/timelogs/search/range', timelogs.findByDateRange);

    // Retrieve Timelog roomId with Active list
    app.post('/api/timelogs/search/active', timelogs.findActive);

    // Retrieve Timelog roomId with Active list
    app.post('/api/timelogs/search/room/active', timelogs.findActiveByRoomId);

    // Update a Timelog with Id
    app.post('/api/timelogs/update', timelogs.update);

    // Delete a Timelog with customerId
    app.post('/api/timelogs/delete/customerId', timelogs.deleteByCustomerId); 

    // Delete a Timelog with Id
    app.post('/api/timelogs/delete', timelogs.delete); 
}