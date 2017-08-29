// MODULES

const router = new require('express').Router()

// ROUTES

router.post('/greet-me', (req, res) => {
  res.json({
    greeting: `Hello, ${req.body.name}!`
  })
})

// EXPORTS

module.exports = router
