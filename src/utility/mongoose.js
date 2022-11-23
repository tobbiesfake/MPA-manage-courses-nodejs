function multipleMongooseToObject(mongooses) {
    return (mongooses = mongooses.map((mongoose) => mongoose.toObject()));
}
function mongooseToObject(mongoose) {
    mongoose ? mongoose.toObject() : mongoose;
}
export { multipleMongooseToObject, mongooseToObject };
