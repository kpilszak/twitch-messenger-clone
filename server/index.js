const PORT = 8000
const express = require('express')
const app = express()

app.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body
        console.log(username, password)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error})
    }
})

app.listen(PORT, () => console.log('Server running on PORT ' + PORT))