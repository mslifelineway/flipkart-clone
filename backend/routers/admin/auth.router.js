const { signIn, signUp } = require("../../controllers/admin/auth.controller");
const { validateRequest, isRequestValidated } = require("../../validators/auth");

const router = require("express").Router();

router.post("/signIn", signIn);

router.post("/signUp", validateRequest, isRequestValidated, signUp);

module.exports = router;
