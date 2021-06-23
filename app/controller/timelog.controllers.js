const db = require('../config/db.config.js');
const TimeLog = db.timelogs;

// Post a Timelog
exports.create = (req, res) => {
    // Save to MySQL database
    TimeLog.create({
        customerId: req.body.customerId,
        entryTime: req.body.entryTime,
        exitTime: req.body.exitTime,
        hallNumber: req.body.hallNumber,
        lockerNumber: req.body.lockerNumber,
        isActive: req.body.isActive
    }).then(customer => {		
		// Send created customer to client
		res.status(200).send(customer);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
    })
};

exports.findAll = (req, res) => {
    TimeLog.findAll().then(timelogs => {
        console.log('On DB Timelog len: ', timelogs.length);
        res.status(200).send(timelogs);
    }).catch(err => {
		res.status(500).send("Error -> " + err);
	})
}

exports.findByCustomerId = (req, res) => {
	TimeLog.findAll({
		where: {
			customerId: req.params.customerId
		}
	}).then(
		timelogs => {
			res.send(timelogs)
		}
	).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};

// Update a Timelog
exports.update = (req, res) => {
	var timelog = req.body;
	const id = req.params.timelogId;
	TimeLog.update( { 
        exitTime: req.body.exitTime,
        isActive: req.body.isActive
	}, { where: {id: id} }).then(() => {
		res.status(200).send(timelog);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};

// Delete a Customer by Id
exports.delete = (req, res) => {
	const id = req.params.timelogId;
	TimeLog.destroy({
	  where: { id: id }
	}).then(() => {
		res.status(200).send('Timelog has been deleted!');
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	});
};