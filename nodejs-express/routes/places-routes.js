const express = require('express');

const router = express.Router();

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Tokyo',
        description: 'The capital of Japan',
        imageUrl: 'https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/06/Tokyo-Tower--1024x683.jpg',
        address: '4 Chome-2-8 Shibakoen, Minato City, Tokyo 105-0011, Japan',
        location:{
            lat:35.6585805,
            lng:139.7454329
        },
        creator: 'u1'
    }
];

router.get('/:pid', (req, res, next) => {
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.find(p => {
        return p.id === placeId;
    });
    
    if(!place) {
        const error = new Error('Could not find a place for the provided id.')
        error.code = 404;
        throw error;
    }

    res.json({ place });
});

router.get('/user/:uid',(req,res,next) => {
    const userId = req.params.uid;
    const place = DUMMY_PLACES.find(p => {
        return p.creator === userId;
    });

    if(!place) {
        const error = new Error('Could not find a place for the provided user id.')
        error.code = 404;
        return next(error);
    }

    res.json({ place });

});

module.exports = router;