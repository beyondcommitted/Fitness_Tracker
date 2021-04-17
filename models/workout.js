const mongoose = require('mongoose');
const workoutSchema = new mongoose.Schema({
    day: {type: Date, default: Date.now},
    exercises: [
        {
          type: {type: String},
          name: {type: String},
          duration: {type: Number},
          distance: {type: Number},
          weight: {type: Number},
          reps: {type: Number},
          sets: {type: Number},
        }
      ] 
});

// workoutSchema.virtual("totalDuration").get(function(){
//   return this.exercises.reduce(((total, {duration}) => total + duration),0)
// })

module.exports = mongoose.model('Workout', workoutSchema);