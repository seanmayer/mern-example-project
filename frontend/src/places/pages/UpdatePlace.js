import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import Card from "../../shared/components/UIElements/Card";
import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Tokyo",
    description: "The capital of Japan",
    imageUrl:
      "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/06/Tokyo-Tower--1024x683.jpg",
    address: "4 Chome-2-8 Shibakoen, Minato City, Tokyo 105-0011, Japan",
    location: {
      lat: 35.6585805,
      lng: 139.7454329,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Tokyo",
    description: "The capital of Japan!",
    imageUrl:
      "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/06/Tokyo-Tower--1024x683.jpg",
    address: "4 Chome-2-8 Shibakoen, Minato City, Tokyo 105-0011, Japan",
    location: {
      lat: 35.6585805,
      lng: 139.7454329,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please set a valid description (5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
