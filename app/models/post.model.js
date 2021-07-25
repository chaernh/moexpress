module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            title: String,
            body: String,
            published: Boolean
        },
        { timestamps: true }
    )

    // schema.method("toJSON", () => {
    //     const { __v, __id, ...object } = this.toObject()
    //     object.id = _id
    //     return object
    // })

    const Post = mongoose.model("posts", schema)
    return Post
}