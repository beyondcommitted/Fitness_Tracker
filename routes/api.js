const router = require('express').Router();
const { Workout } = require('../models');

router.get('/api/workouts', async function(req, res) {
    try {
        const data = await Workout.aggregate([{
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration',
                },
            },
        },]);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/api/workouts', async function(req, res) {
    try {
        const data = await Workout.create({})
    res.json(data)
    } catch (error) {
        console.log(error);
        res.status(500).send(error);

    }
});
// router.put('/api/workouts/:id', async function(req, res) {
//     try {
//         const data = await Workout.updateMany({
//             _id: req.params.id
//         },
//         {
//             $push: {
//                 exercises: req.body
//             }
//         },
//         {
//             new: true,
//         });

//     res.json(data)
//     } catch (error) {
//         console.log(error);
//         res.status(500).send(error);

//     }
// });
router.put("/api/workouts/:id", async (req, res) => {
    try {
      const info = await Workout.updateMany(
        { _id: req.params.id },
        { $push: { exercises: req.body } }
      );
      res.json(info);
    } catch (error) {
      console.log(error);
    }
  });
  
router.get('/api/workouts/range', async function(req, res) {
    try {
        const data = await Workout.find({})
        .sort({
            $natural: 1
        })
        .limit(7);
    res.json(data)
    } catch (error) {
        console.log(error);
        res.status(500).send(error);

    }
});

module.exports = router;
