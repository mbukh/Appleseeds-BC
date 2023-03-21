import asyncHandler from "../middleware/asyncHandler.js";
import Shop from "../models/Shop.js";

// @desc    Get all Shops
// @route   GET /api/v1/shops
// @access  Public
export const getShops = asyncHandler(async (req, res, next) => {
  // console.log('typeof JSON.parse(req.query.coordinates)', JSON.parse(req.query.coordinates));

  const queryObject = {
    ...(req.query?.cuisine && { typeOfCuisine: req.query.cuisine }),
    ...(req.query?.kosher && {
      kosher: req.query.kosher === "true" ? true : false
    }),
    ...(req.query?.name && { city: req.query.name }),
    ...(req.query?.lat && req.query?.lon && { address:{city: req.query.city, street: req.query.street,coordinates:[Number(req.query.lat),Number(req.query.lon)]}}),
    ...(req.query?.address && { address: req.query.address })
  };

  console.log("QueryObject:", queryObject);

  const shops = await Shop.find(queryObject);
  console.log(shops)

  res.status(200).json({
    success: true,
    data: shops
  });
});

// @desc    Create a Shop
// @route   POST /api/v1/shops
// @access  Private
export const createShop = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  const shop = await Shop.create(req.body);

  res.status(200).json({
    success: true,
    data: shop
  });
});

// @desc    Get a single Shop
// @route   GET /api/v1/shops/:id
// @access  Public
export const getShop = asyncHandler(async (req, res, next) => {
  const shop = await Shop.findById(req.params.id);

  if (!shop) {
    return next(new Error(`Bootcamp with id: ${req.params.id} not found`));
  }

  res.status(200).json({
    success: true,
    data: shop
  });
});

// @desc    Upadte a Shop
// @route   PUT /api/v1/shops/:id
// @access  Private
export const updateShop = asyncHandler(async (req, res, next) => {
  const restaurant = await Shop.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!restaurant) {
    return next(
      new Error(
        `Restaurant that end with '${req.params.id.slice(-6)}' not found`
      )
    );
  }

  res.status(200).json({
    success: true,
    data: restaurant
  });
});

// @desc    Delete a Shop
// @route   DELETE /api/v1/shops/:id
// @access  Private
export const deleteShop = asyncHandler(async (req, res, next) => {
  const shop = await Shop.findByIdAndDelete(req.params.id);

  if (!shop) {
    return next(new Error(`restaurant with id: ${req.params.id} not found`));
  }

  res.status(200).json({
    success: true,
    data: shop
  });
});
