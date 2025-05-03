const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");

const mapController = require("../controller/maps.controller");
const { check, query } = require("express-validator");

router.get(
  "/get-coordinates",
  query("address").isString().isLength({ min: 3 }),
  authMiddleware.authUser,
  mapController.getCoordinates
);
router.get(
  "/get-distance-time",
  query("origin")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Origin is required"),
  query("destination")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Destination is required"),
  authMiddleware.authUser,
  mapController.getDistanceTime
);
router.get(
  "/get-suggestions",
  query("input")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Input is required"),
  authMiddleware.authUser,
  mapController.getAutoCompleteSuggestions
);

module.exports = router;
