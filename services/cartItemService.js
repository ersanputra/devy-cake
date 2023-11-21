const { CartItem, Cake } = require("../models");

class CartItemService {
      // Add a new cart item
      async addCartItem(cartId, cakeId, quantity) {
        try {
          // Fetch cake details based on cakeId
          const cake = await Cake.findByPk(cakeId);
          if (!cake) {
            throw new Error('Cake tidak ditemukan');
          }
    
          // Check if the cake is active
          if (!cake.active) {
            throw new Error('This cake is currently not available');
          }
    
          // Check if the cart item already exists
          let cartItem = await CartItem.findOne({
            where: { cart_id: cartId, cake_id: cakeId }
          });
    
          if (cartItem) {
            // Update quantity and sub_total if item exists
            cartItem.quantity += quantity;
            cartItem.sub_total = cartItem.quantity * cake.price;
            await cartItem.save();
          } else {
            // Calculate sub_total for new item
            const subTotal = cake.price * quantity;
    
            // Create new cart item with fetched cake details
            cartItem = await CartItem.create({
              cart_id: cartId,
              cake_id: cakeId,
              quantity,
              sub_total: subTotal,
            });
          }
    
          return cartItem;
        } catch (error) {
          // Handle the error appropriately
          console.error("Error adding cart item:", error);
          throw error; // Rethrow the error to be handled by the caller
        }
      }

  // Get a cart item by ID
  async getCartItemById(cartItemId) {
    try {
      const cartItem = await CartItem.findByPk(cartItemId);
      return cartItem;
    } catch (error) {
      console.error("Error fetching cart item:", error);
    }
  }

  // Update a cart item
  async updateCartItem(cartItemId, updateData) {
    try {
      const cartItem = await CartItem.findByPk(cartItemId);
      if (cartItem) {
        await cartItem.update(updateData);
        return cartItem;
      }
      return null;
    } catch (error) {
      console.error("Error updating cart item:", error);
    }
  }

  // Delete a cart item
  async deleteCartItem(cartItemId) {
    try {
      const cartItem = await CartItem.findByPk(cartItemId);
      if (cartItem) {
        await cartItem.destroy();
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  }

  // List all cart items for a specific cart
  async listCartItems(cartId) {
    try {
      const cartItems = await CartItem.findAll({
        where: { cart_id: cartId },
      });
      return cartItems;
    } catch (error) {
      console.error("Error listing cart items:", error);
    }
  }
}

module.exports = CartItemService;
