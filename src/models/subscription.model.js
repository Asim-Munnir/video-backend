import mongoose, {Schema} from "mongoose";


const subscriptionSchema = new Schema({
    subscriber: {
        type: mongoose.Schema.Types.ObjectId, // one who is subscribing
        ref: "User"
    },
    channel: {
        type: mongoose.Schema.Types.ObjectId, // one who is subscriber is subscribing
        ref: "User"
    }
},
 { timestamps: true }
)


export const Subscription = mongoose.model("Subscription", subscriptionSchema)