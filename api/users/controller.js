const Users = require('./dao');

exports.createUser = function (req, res, next) {
    const user = {
        name: req.body.name,
        email: req.body.email
    };

    Users.create(user, function(err, user) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            code: '201',
            message: 'success',
            user: user
        })
    })
}

exports.getUsers = function(req, res, next) {
    Users.get({}, function(err, users) {
        if(err) {
            res.json({
                code: '500',
                message: 'Internal Server Error',
                error: err
            })
        }
        res.json({
            code: '200',
            message: 'success',
            users: users
        })
    })
}

exports.getUser = function(req, res, next) {
    Users.get({name: req.params.name}, function(err, users) {
        if(err) {
            res.json({
                code: '500',
                message: 'Internal Server Error',
                error: err
            })
        }
        res.json({
            code: '200',
            message: 'success',
            users: users
        })
    })
}

exports.updateUser = function(req, res, next) {
    const user = {
        name: req.body.name,
        email: req.body.email
    }
    Users.update({_id: req.params.id}, user, function(err, user) {
        if(err) {
            res.json({
                code: '500',
                message: 'Internal Server Error',
                error: err
            })
        }
        res.json({
            code: '200',
            message: 'success',
            user: user
        })
    })
}

exports.removeUser = function(req, res, next) {
    Users.delete({_id: req.params.id}, function(err, user) {
        if(err) {
            res.json({
                code: '500',
                message: 'Internal Server Error',
                error: err
            })
        }
        res.json({
            code: '200',
            message: 'success'
        })
    })
}