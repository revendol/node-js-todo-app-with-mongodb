module.exports = function (mongoose) {
    //Create a schema - this is like a blueprint
    var todoSchema = new mongoose.Schema({
        item: String
    });
    var Todo = mongoose.model('Todo', todoSchema);
}