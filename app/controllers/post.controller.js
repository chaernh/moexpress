const db = require('../models')
const Post = db.posts

exports.findAll = (req, res) => {
    Post.find().then((result) => {
        res.send({
            message: "Data retrieved!",
            data: result
        })
    }).catch((e) => {
        res.status(500).send({
            message: e.message || "Some error while retrieving data."
        })
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Post.findById(id).then((result) => {
        res.send({
            message: `Data with id: ${id} found!`,
            data: result
        })
    }).catch((e) => {
        res.status(409).send({
            message: e.message || "Some error while retrieving data."
        })
    })
}

exports.create = (req, res) => {
    const post = new Post({
        title: req.body.title,
        body: req.body.body,
        published: req.body.published ? req.body.published : false,
    })

    post.save(post).then((result) => {
        res.send({
            message: "Data inserted!",
            data: result
        })
    }).catch((e) => {
        res.status(409).send({
            message: e.message || "Some error while inserting data."
        })
    })
}

exports.update = (req, res) => {
    const id = req.params.id
    Post.findByIdAndUpdate(id, req.body).then((result) => {
        if (!result) {
            res.status(404).send({
                message: "Data not found"
            })
        }

        res.send({
            message: `Data with id: ${id} updated!`,
            data: result
        })
    }).catch((e) => {
        res.status(409).send({
            message: e.message || "Some error while updating data."
        })
    })
}

exports.remove = (req, res) => {
    const id = req.params.id
    Post.findByIdAndRemove(id).then((result) => {
        if (!result) {
            res.status(404).send({
                message: "Data not found"
            })
        }

        res.send({
            message: `Data with id: ${id} removed!`,
            data: result
        })
    }).catch((e) => {
        res.status(409).send({
            message: e.message || "Some error while removing data."
        })
    })

}