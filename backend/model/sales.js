const mongoose = require('mongoose');
const Sale = require('./models/Sale');

// This function creates a new sale
async function createSale(saleData) {
  try {
    // Create a new sale object using the Sale model
    const newSale = new Sale(saleData);

    // Save the new sale to the database
    const savedSale = await newSale.save();

    // Return the saved sale object
    return savedSale;
  } catch (error) {
    // If there was an error, throw it
    throw error;
  }
}

// This function retrieves all sales
async function getAllSales() {
  try {
    // Find all sales in the database
    const allSales = await Sale.find();

    // Return the array of sale objects
    return allSales;
  } catch (error) {
    // If there was an error, throw it
    throw error;
  }
}

// This function retrieves a sale by ID
async function getSaleById(saleId) {
  try {
    // Find the sale with the given ID
    const sale = await Sale.findById(saleId);

    // If no sale is found, return null
    if (!sale) {
      return null;
    }

    // Return the sale object
    return sale;
  } catch (error) {
    // If there was an error, throw it
    throw error;
  }
}

// This function updates a sale by ID
async function updateSaleById(saleId, updateData) {
  try {
    // Find the sale with the given ID and update its properties
    const updatedSale = await Sale.findByIdAndUpdate(saleId, updateData, { new: true });

    // If no sale is found, return null
    if (!updatedSale) {
      return null;
    }

    // Return the updated sale object
    return updatedSale;
  } catch (error) {
    // If there was an error, throw it
    throw error;
  }
}

// This function deletes a sale by ID
async function deleteSaleById(saleId) {
  try {
    // Find the sale with the given ID and delete it
    const deletedSale = await Sale.findByIdAndDelete(saleId);

    // If no sale is found, return null
    if (!deletedSale) {
      return null;
    }

    // Return the deleted sale object
    return deletedSale;
  } catch (error) {
    // If there was an error, throw it
    throw error;
  }
}

module.exports = {
  createSale,
  getAllSales,
  getSaleById,
  updateSaleById,
  deleteSaleById,
};
