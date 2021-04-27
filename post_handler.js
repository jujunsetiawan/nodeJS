const { response } = require("express")

var posts = [
    {
        id: 1,
        name: 'ini post',
        email: 'content post'
    },
    {
        id: 2,
        name: 'ini post 2',
        email: 'content post 2'
    },
    {
        id: 3,
        name: 'jhon',
        email: 'jhon@gmail.com'
    },
]

exports.index = function (req, res) {
    if (posts.length > 0) {
        res.status(200).render({
            status: 'success',
            data: posts
        })
    }
    res.status(404).json({
        status: 'error',
        message: 'Not Found',
    })
}

exports.addIndex = function (req, res) {
    posts.push(req.body)
    res.status(200).send({
        status: 'success',
        data: req.body
    })
}
exports.get = function (req, res) {
    const post_id = Number(req.params.post_id);
    const post = posts.find((el) => el.id == post_id)
    if (post == null) {
        res.status(404).json({
            status: 'error',
            message: 'Not Found',
        })
    } else {
        res.json({
            status: 'success',
            data: post
        });
    }
}

exports.add = function (req, res) {

}

exports.edit = function (req, res) {
    const post_id = Number(req.params.post_id);
    posts.filter(post => {
        if (post.id == post_id) {
            post.id = post_id
            post.name = req.body.name
            post.email = req.body.email
            return post;
        }
    })
    res.json({
        status: 'succes',
        message: 'data berhasil di update',
        data: req.body
    });
}

exports.delete = function (req, res) {
    const post_id = Number(req.params.post_id);
    posts = posts.filter(post => post.id != post_id)
    res.send({
        status: 'success',
        message: 'berhasil dihapus',
        data: posts
    })
}