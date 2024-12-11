import { Router } from "express";
import { saveReservation,getReservation,deleteReservation,updateReservation,getReservationById} from "../controllers/ReservationController.js";

const reservationRouter=Router();
reservationRouter.post("/save",saveReservation);
reservationRouter.get("/get",getReservation);
reservationRouter.delete("/delete/:id",deleteReservation);
reservationRouter.put("/update/:id",updateReservation);
reservationRouter.get("/get/:id",getReservationById)


export default reservationRouter;