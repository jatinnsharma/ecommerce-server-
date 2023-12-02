import mongoose from "mongoose";

const couponSchema = new mongoose.Schema({
    code: {
        type: String,
        require: [true, "Please provide a coupon code"]
    },
    discount: {
        type: Number,
        default: 0
    },
    active: {
        type: Boolean,
        default: true
    }
    },
    {
        timestamps: true
})

export default mongoose.Schema("Coupon",couponSchema)