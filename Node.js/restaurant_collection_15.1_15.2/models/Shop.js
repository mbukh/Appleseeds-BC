import mongoose from 'mongoose';
// import slugify from 'slugify';
//name
// a city
// a street
// An array of coordinates e.g. [-77,564, 40.677]
// ●	a type of cuisine
// ●	a boolean if it is Kosher/Halal or not
// ●	An array of at least 3 reviews that include:
// ●	 a date
// ●	 an integer score


const ShopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: [true, 'Shop name already exists'],
    trim: true,
    maxlength: [50, 'Name can not be more than 50 characters']
  },
  address: {
    city: {
      type: String,
    },
    street: {
      type: String,
    },
    coordinates: {
      type: [Number],
      points: ['lt', 'ln']
    }
  },
  typeOfCuisine: {
    type: String,
    enum: [
      'JAPANESE',
      'THAI',
      'FRENCH',
      'CHINESE',
    ]
  },
  kosher: {
    type: Boolean,
  },
  reviews: {
    type: [{date: String, score: Number}]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Middleware - Create slug from name
// ShopSchema.pre('save', function (next) {
//   this.slug = slugify(this.name, { lower: true });
//   next();
// });

export default mongoose.model('Shop', ShopSchema);