const { Schema, model, Types } = require('mongoose');
// const moment = require('moment');


const reactionSchema = new Schema({

  reactionId: {
    type: Schema.Types.ObjectId,
    default: ()=> new Types.ObjectId()

  },

  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,

  },

  username: {
    type: String,
    required: true,

  },

  createAt: {
    type: Date,
    default: Date.now,
    // get: moment().format('L'),

  }
},

  {
    toJSON: {
      getters: true,
      // setters: true,
      // runSettersOnQuery: true 
    }

  }
);


const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },

    createAt: {
      type: Date,
      default: Date.now,
      // get: moment().format('L'),

    },

    username: {
      type: String,
      required: true,

    },

    reactions: [reactionSchema]


  },

  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false
  }
);





// ThoughtSchema.virtual('reactionCount').get(function () {
//   return this.reactions.length;
// });

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
