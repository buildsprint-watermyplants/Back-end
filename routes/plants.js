const express = require("express");

const router = express.Router();

const restricted = require("../helpers/auth/restricted");

const Plants = require("../db/models/Plant");

router.post("/", (req, res) => {});

router.get("/", (req, res) => {});

router.get("/:id", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
