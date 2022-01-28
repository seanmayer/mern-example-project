const { v4: uuidv4 } = require('uuid');
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

let DUMMY_PLACES = [
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

const getPlaceById = (req, res, next) => {
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.find(p => {
        return p.id === placeId;
    });
    
    if(!place) {
        throw new HttpError('Could not find a place for the provided id.', 404);
    }

    res.json({ place });
};

const getPlacesByUserId = (req,res,next) => {
    const userId = req.params.uid;
    const places = DUMMY_PLACES.filter(p => {
        return p.creator === userId;
    });

    if(!places || places.length === 0) {
        return next(
            new HttpError('Could not find a places for the provided user id.',404)
        );
    }

    res.json({ place: places });

};

const createPlace = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        console.log(errors);
        throw new HttpError('Invalid inputs passed.', 422)
    }

    const { title, description, coordinates, address, creator } = req.body;
    const createdPlace = {
        id: uuidv4(),
        title,
        description,
        location: coordinates,
        address,
        creator
    };

    DUMMY_PLACES.push(createdPlace);

    res.status(201).json(createdPlace);
};

const updatePlace = (req, res, next) => {
    const { title, description } = req.body;
    const placeId = req.params.pid;

    const updatedPlace = { ...DUMMY_PLACES.find(p => p.id === placeId) };
    const placeIndex = DUMMY_PLACES.findIndex(p => p.id == placeId);
    updatedPlace.title = title;
    updatedPlace.description = description;

    DUMMY_PLACES[placeIndex] = updatedPlace;

    res.status(200).json({place: updatedPlace});

};

const deletePlace = (req, res, next) => {
    const placeId = req.params.pid;
    DUMMY_PLACES = DUMMY_PLACES.filter(p => p.id !== placeId);
    res.status(200).json({ message: 'Deleted place.' });
};

exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;


