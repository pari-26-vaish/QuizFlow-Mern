import express from "express";
import User from "../models/User.js";

const router = express.Router();
router.post("/add-user", async (req, res) => {
    const data = req.body;
    const newUser = new User(data);
    const newUserData = await newUser.save();
    res.send({
        success: true,
        message: "user added succesfully",
        data: newUserData,
    })
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const userData = await User.findOne({ email: email });
    if (!userData) {
        return res.send({
            success: false,
            message: "email or password is invalid",
        });
    }
    const idPasswordMatch = password == userData.password;
    if (!idPasswordMatch) {
        return res.send({
            success: false,
            message: "email or password is invalid",
        });
    }
    res.send({
        success: true,
        message: "login successfully",
        data: userData
    });
});

router.post("/delete-user", async (req, res) => {
    const { userId } = req.body;

    await User.findByIdAndDelete(userId);

    res.send({
        success: true,
        message: "student deleted successfully",
    });
});

router.get("/get-all-students", async (req, res) => {
    const allstudents = await User.find();
    res.send({
        success: true,
        message: "success",
        data: allstudents
    });
})

export default router;