import mongoose, { Schema, Document } from "mongoose";

export interface Freelance extends Document {
    name: string;
    link?: string;
    icon?: string;
    shopify?: boolean
}

const FreelanceSchema: Schema = new Schema({
    name: { type: String, required: true },
    link: { type: String, required: false },
    icon: { type: String, required: false },
    shopify: { type: String, required: false }
});

export const FreelanceModel = mongoose.models.Freelance || mongoose.model<Freelance>('Freelance', FreelanceSchema);