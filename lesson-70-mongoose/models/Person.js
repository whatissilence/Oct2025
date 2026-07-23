import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  age: {
    type: Number,
    min: 0,
    max: 120,
    default: 18,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    validate: {
      validator: function(val) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val);
      },
      message: function(props) {
        return `${props.value} is not a valid email address!`;
      }
    }
  },
  mother: mongoose.SchemaTypes.ObjectId,
  hobbies: [String],
  address: {
    street: String,
    city: String,
    country: String,
  }
}, {
  collection: 'persons',
  timestamps: true,
})

export default mongoose.model('Person', personSchema);