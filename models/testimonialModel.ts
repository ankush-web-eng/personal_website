import mongoose, { Document, Schema } from 'mongoose';

export interface Testimonoial extends Document {
    name: string,
    content: string,
    image?: string,
    company?: string,
    project?: string
}

const TestimonoialSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        requried: false
    },
    company: {
        type: String,
        required: false
    },
    project: {
        type: String,
        required: false
    }
});

export const TestimonoialModel = mongoose.models.Testimonial || mongoose.model<Testimonoial>('Testimonial', TestimonoialSchema);