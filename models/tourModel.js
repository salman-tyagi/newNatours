import mongoose from 'mongoose';

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    trim: true,
    unique: true,
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a group size'],
  },
  difficulty: {
    type: String,
    required: true,
    enum: {
      values: ['easy', 'medium', 'difficult'],
      message: `Difficulty either Easy, Medium or Hard`,
    },
  },
  ratingsAverage: {
    type: Number,
    required: [true, 'Tour must have a ratings average'],
    min: 0,
    max: 5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'Tour must have a price'],
  },
  priceDiscount: Number,
  summary: {
    type: String,
    required: [true, 'Tour must have a summary'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Tour must have a description'],
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'Tour must have a image cover'],
  },
  images: [String],
  startDates: [Date],
  createdAt: {
    type: Date,
    defautl: Date.now(),
  },
});

const Tour = mongoose.model('Tour', tourSchema);
export default Tour;
