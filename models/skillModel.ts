import mongoose, {Schema, Document} from "mongoose";

export interface Skill extends Document {
    name: string;
    type: string;
    icon: string;
}

const SkillSchema: Schema = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    icon: {type: String, required: true}
});

export const SkillModel =  mongoose.models.Skill || mongoose.model<Skill>('Skill', SkillSchema);