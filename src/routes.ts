import { Router } from "express";
import { AnswerController } from "./controllers/AnswerController";
import { NpsController } from "./controllers/NpsController";
import { SendMailController } from "./controllers/SendMailController";
import { SurveysController } from "./controllers/SurveysController";
import { UserController } from "./controllers/UserController";

const router = Router();

const userController = new UserController();
const surveyController = new SurveysController();
const sendMailController = new SendMailController();
const answersController = new AnswerController();
const npsController = new NpsController()


router.post("/users", userController.create);

router.post("/surveys", surveyController.create);
router.get("/surveys", surveyController.show);

router.get("/sendMail", sendMailController.execute);

router.get("/answers/:value", answersController.execute);

router.get("/nps/:survey_id", npsController.execute);

export { router };
