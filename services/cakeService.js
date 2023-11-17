const { Cake } = require("../models");

class CakeService {
    async addCake(cakeData) {
        try {
            // Validasi input (Anda mungkin ingin melakukan validasi yang lebih rumit di sini)
            if (!cakeData.name || !cakeData.price) {
                throw new Error('Nama dan harga kue diperlukan');
            }

            // Menambahkan kue baru
            const cake = await Cake.create(cakeData);

            return cake;
        } catch (error) {
            console.error('Error saat menambahkan kue:', error);
            throw error;
        }
    }

    async getAllCakes() {
        try {
            const cakes = await Cake.findAll();
            return cakes;
        } catch (error) {
            console.error('Error saat mengambil semua kue:', error);
            throw error;
        }
    }
}

module.exports = CakeService;
