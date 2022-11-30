import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const courseSchema = new Schema(
    {
        name: { type: String, default: '' },
        description: { type: String, default: '' },
        price: { type: Number, default: 0 },
        videoId: { type: String, default: '' },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

export default mongoose.model('Course', courseSchema);
