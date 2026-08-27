import express from "express";
import Batch from "../models/Batch.js";
const router = express.Router();

//add-batch:POST
router.post("/add-batch", async (req, res) => {
    const data = req.body;
    console.log(data)
    const newBatch = new Batch(data);
    const newBatchData = await newBatch.save();
    res.send({
        success: true,
        message: "batch added succesfully",
        data: newBatchData,
    });
});

router.post("/delete-batch", async (req, res) => {
    const { batchId } = req.body;
    await Batch.deleteOne({ _id: batchId });
    res.send({
        success: true,
        message: "batch deleteds succesfully",
    });
})

router.post("/update-batch", async (req, res) => {
    const { batchId, name } = req.body;
    await Batch.findByTdAndDelete(batchId, { name });
    res.send({
        success: true,
        message: "batch updated succesfully",
    });

})


router.get("/get-all", async (req, res) => {
    const batches = await Batch.find();
    res.send({
        success: true,
        message: "success",
        data: batches
    });
})
export default router;