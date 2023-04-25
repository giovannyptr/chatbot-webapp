const router = require('express').Router()
const userController= require('../controllers/userController')
const intentController = require('../controllers/intentController')
const errorHandler = require('../middlewares/errorHandler')
const uploadimage = require('../middlewares/multer')
const imageKit = require('../middlewares/imageKit')



router.get('/', (req, res) => {
    res.send('this is gio-chatbot')
})

router.post('/createprofile', imageKit, uploadimage, userController.createBotProfile)
router.put('/editProfile/:id', userController.editBotProfile)


router.post('/createIntent', intentController.createIntent)
router.post('/addUtterance/:id', intentController.addUtterance)
router.get('/response', intentController.response)

router.use(errorHandler)

module.exports = router