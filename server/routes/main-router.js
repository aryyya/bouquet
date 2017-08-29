// MODULES

const router = new require('express').Router()

// ROUTES

router.get('/', (req, res) => {
  res.end('Hello, world!')
})

router.post('/greet-me', (req, res) => {
  res.json({
    greeting: `Hello, ${req.body.name}!`
  })
})

// EXPORTS

module.exports = router
