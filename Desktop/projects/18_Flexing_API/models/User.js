const { Schema, model, } = require('mongoose');
const moment = require ('moment')

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      trim: true,
      unique: true,
      required: true
    },

    email: {
      type: String,
      unique: true,
      match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      
    }],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      
    }],

  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

UserSchema.virtual('friendCount').get(function() {
  return this.friends,length;
});

const User = model('User', UserSchema);

module.exports = User;
