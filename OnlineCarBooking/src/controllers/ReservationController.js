import { createConnectionObject } from '../config/Dbconfig.js';

const connection = createConnectionObject();

export function saveReservation(req, res) {
    try {
        const data = req.body;
        const insertQuery = `INSERT INTO reservation (Location, Date, Time, Duration, VehicleNum)
                             VALUES ('${data.Location}', '${data.Date}', '${data.Time}', ${data.Duration}, ${data.VehicleNum})`;

        connection.query(insertQuery, (error) => {
            if (error) {
                res.status(500).send({ message: "Error saving reservation" });
            } else {
                res.status(201).send({ message: "Reservation saved successfully" });
            }
        });
    } catch (error) {
        res.status(500).send({ message: "Something went wrong" });
    }
}

export function getReservation(req,res)
{
    const selectData=`Select Id,Location,Date,Time,Duration,VehicleNum from reservation`;

    connection.query(selectData,(error,result)=>
    {
        if(error)
        {
            res.status(500).send({message:"Error fetching data"});
        }
        else{
            res.status(200).json(result);
        }
    });
}

export function getReservationById(req, res) {
    const id = req.params.id; 
    const selectData = `SELECT Id, Location, Date, Time, Duration, VehicleNum FROM reservation WHERE Id = ?`;

    connection.query(selectData, [id], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send({ message: "Error fetching reservation data" });
        } else {
            if (result.length > 0) {
                res.status(200).json(result[0]); 
            } else {
                res.status(404).send({ message: "Reservation not found" });
            }
        }
    });
}


export function updateReservation(req,res)
 {
    const id = req.params.id;
    const { Location, Date, Time, Duration, VehicleNum} = req.body;


    const updateQuery='UPDATE reservation SET Location = ?, Date = ?, Time = ?, Duration = ?, VehicleNum = ? WHERE Id = ?';
    connection.query(updateQuery, [Location, Date, Time, Duration, VehicleNum, id], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error updating Rservation');
    } else {
        if (results.affectedRows === 0) {
            res.status(404).send({ message: 'Reservation data not found' });
        } else {
            res.status(200).send({ message: 'Reservation data updated successfully' });
        }
    }
  });
}

export function deleteReservation(req,res)
 {
    const id = req.params.id;
    const deleteQuery='Delete from reservation  WHERE Id = ?';
    connection.query(deleteQuery, [id], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error Deleting Reservation');
    } else {
          res.status(200).send({ message: 'Reservation Deleted successfully' });  
    }
  });
}


