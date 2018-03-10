const router = require('express').Router()
const Account = require('../accountmodel')

router.get('/', (req, res, next) => {
    Account.find({}, null, null, (error, accounts) => {
        if(error) return next(error)
        res.status(200).send(accounts)
    })
})

router.get('/:id', (req, res, next) => {
    Account.findById(req.params.id, (error, account) => {
        if(error) return next(error)
        res.status(200).send(account)
    })
})

router.post('/', (req, res, next) => {
    let newAccount = new Account(req.body)
    newAccount.save((error, account) => {
        if(error) return next(error)
        return res.status(201).send(account)
    })
})

router.put('/:id', (req, res, next) => {
    Account.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, account) => {
        if(error) next(error)
        return res.status(200).send(account)
    })
})

router.delete('/:id', (req, res, next) => {
    Account.findByIdAndRemove(req.params.id, (error, account) => {
        if(error) return next(error)
        return res.status(200).send(account)
    })
})

module.exports = router