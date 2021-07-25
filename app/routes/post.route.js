module.exports = (app) => {
    const posts = require('../controllers/post.controller')
    const router = require('express').Router()

    router.get('/', posts.findAll)
    router.get('/:id', posts.findOne)
    router.post('/', posts.create)
    router.put('/:id', posts.update)
    router.delete('/:id', posts.remove)

    app.use('/api/posts', router)
}