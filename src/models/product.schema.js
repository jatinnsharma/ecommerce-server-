import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "please provide a product name"],
            trim: true,
            maxLength: [120, "product name should not be max than 120 characters"]
        },
        price: {
            type: Number,
            required: [true, "please provide a product price"],
            maxLength: [8, "product name should not be max than 8 characters"],

        },
        desciption: {
            type: Strings,
            trim: true
        },
        photos: [
            {
                secure_url: {
                    type: string,
                    required: true
                }
            }
        ],
        stock: {
            type: Number,
            default: 0
        },
        sold: {
            type: Number,
            default: 0
        },
        collectionId: {
            ref: 'Collection'
        }
    },
    { timestamps: true }
)

export default mongoose.model("Prodcut", productSchema)