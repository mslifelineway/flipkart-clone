const { signIn, signUp } = require("../../controllers/admin/auth.controller");
const { validateRequest, isRequestValidated } = require("../../validators/auth");

const router = require("express").Router();

router.post("/admin/signIn", signIn);

router.post("/admin/signUp", validateRequest, isRequestValidated, signUp);

module.exports = router;
