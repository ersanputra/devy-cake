const CakeService = require('../services/cakeService');
const cakeService = new CakeService();

class CakeController {
    async addCake(req, res) {
        try {
            const cakeData = req.body;
            const cake = await cakeService.addCake(cakeData);
            res.status(200).json(cake);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getAllCakes(req, res) {
        try {
            const cakes = await cakeService.getAllCakes();
            res.status(200).json(cakes);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = CakeController;
