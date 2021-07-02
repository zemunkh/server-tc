const db = require('../config/db.config.js');
const { Op } = require("sequelize");
const Timelog = db.timelogs;

// Post a Timelog
exports.create = (req, res) => {
    // Save to MySQL database
	console.log('Entry date: ', req.body.entryTime);
    Timelog.create({
        customerId: req.body.customerId,
		customerName: req.body.customerName,
        entryTime: req.body.entryTime,
        exitTime: req.body.exitTime,
        roomId: req.body.roomId,
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
    Timelog.findAll().then(timelogs => {
        console.log('On DB Timelog len: ', timelogs.length);
        res.status(200).send(timelogs);
    }).catch(err => {
		res.status(500).send("Error -> " + err);
	})
}

exports.findByTimelogId = (req, res) => {
	console.log('Timelog Id: ', req.params.timelogId);
	Timelog.findAll({
		where: {
			id: req.params.timelogId
		}
	}).then(
		timelogs => {
			res.send(timelogs)
		}
	).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};

exports.findByCustomerId = (req, res) => {
	console.log('Customer Id: ', req.body.customerId);
	Timelog.findAll({
		where: {
			customerId: req.body.customerId
		}
	}).then(
		timelogs => {
			res.status(200).send(timelogs)
		}
	).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};

exports.findByCustomerIdActive = (req, res) => {
	console.log('Customer Id: ', req.body.customerId);
	Timelog.findAll({
		where: {
			customerId: req.body.customerId,
			isActive: true
		}
	}).then(
		timelogs => {
			res.status(200).send(timelogs)
		}
	).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};

exports.findByRoomId = (req, res) => {
	console.log('Room Id: ', req.body.roomId);
	Timelog.findAll({
		where: {
			roomId: req.body.roomId,
			isActive: true
		}
	}).then(
		timelogs => {
			res.send(timelogs)
		}
	).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};

exports.findActive = (req, res) => {
	console.log('Fetching Active Timelogs');
	Timelog.findAll({
		where: {
			isActive: true
		}
	}).then(
		timelogs => {
			res.send(timelogs)
		}
	).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};

exports.findActiveByRoomId = (req, res) => {
	console.log('Active Id: ', req.body.roomId);
	Timelog.findAll({
		where: {
			roomId: req.body.roomId,
			isActive: true
		}
	}).then(
		timelogs => {
			res.send(timelogs)
		}
	).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};

exports.findByRoomDateRange = (req, res) => {
	console.log('Date start: ', req.body.start.toString());
	console.log('Date end: ', req.body.end.toString());
	Timelog.findAll({
		where: {
			roomId: req.body.roomId,
			entryTime: {
				[Op.between]: [req.body.start, req.body.end]
			}
		}
	}).then(
		timelogs => {
			console.log('\n\nLen: ', timelogs.length);
			res.send(timelogs)
		}
	).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};

exports.findByDateRange = (req, res) => {
	// console.log('Date start: ', req.body.start);
	// console.log('Date end: ', req.body.end);
	Timelog.findAll({
		where: {
			entryTime: {
				[Op.between]: [req.body.start, req.body.end]
			}
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
	const id = req.body.id;
	Timelog.update( { 
        exitTime: req.body.exitTime,
        isActive: req.body.isActive
	}, { where: {id: id} }).then(() => {
		res.status(200).send(timelog);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};

// Delete a Customer by Id
exports.deleteByCustomerId = (req, res) => {
	const id = req.body.customerId;
	Timelog.destroy({
	  where: { customerId: id }
	}).then(() => {
		res.status(200).send({message: 'Timelogs has been deleted!'});
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	});
};

// Delete a Timelog by Id
exports.delete = (req, res) => {
	const id = req.body.id;
	Timelog.destroy({
	  where: { id: id }
	}).then(() => {
		res.status(200).send({message: 'Timelog has been deleted!'});
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	});
};