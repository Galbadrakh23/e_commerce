const { Router } = require("express");
const { getAllUser, currentUser } = require("../controllers/user-controller");

const router = Router();

router.route("/").get(getAllUser);
export default router;
