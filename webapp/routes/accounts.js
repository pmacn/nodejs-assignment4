const router = require('express').Router()

router.get('/', (req, res) => {
    // TODO: make a call to database for accounts
    return res.status(200).send([])
})

router.post('/', (req, res) => {
    let newAccount = req.body
    // TODO: Store account in database
    return res.status(201).send({id:newAccount.id})
})

router.put('/', (req, res) => {
    // TODO: read account from database
    let account = {}
    account = Object.assign(account, req.body)
    return res.status(200).send(account)
})

router.delete('/', (req, res) => {
    // TODO: delete account from database
    return res.status(200).send()
})