import { Auth } from "aws-amplify";
import { LocationGeocodedLocation } from "expo-location";
import { Dispatch } from "react";
import { Activity } from "../../util/data/types";


export interface UpdateLocationAction {
  readonly type: "ON_UPDATE_LOCATION";
  payload: LocationGeocodedLocation;
}

export interface UpdateUserLoginAction {
  readonly type: "ON_UPDATE_USERLOGIN";
  payload: Array<any> | null;
}

export interface UpdateTagsAction {
  readonly type: "ON_UPDATE_TAGS";
  payload: Array<Activity>;
}
//

export interface UserErrorAction {
  readonly type: "ON_USER_ERROR";
  payload: any;
}

export type UserAction =
  | UpdateLocationAction
  | UpdateTagsAction
  | UserErrorAction
  | UpdateUserLoginAction;

export const ON_UPDATE_LOCATION = (location: LocationGeocodedLocation) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({
        type: "ON_UPDATE_LOCATION",
        payload: location,
      });
    } catch (error) {
      dispatch({
        type: "ON_USER_ERROR",
        payload: error,
      });
    }
  };
};

export const ON_UPDATE_TAGS = (tags: Array<Activity>) => {
  return (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({
        type: "ON_UPDATE_TAGS",
        payload: tags,
      });
    } catch (error) {
      dispatch({
        type: "ON_USER_ERROR",
        payload: error,
      });
    }
  };
};

export const ON_UPDATE_USERLOGIN = (userAuth: Array<any>) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({
        type: "ON_UPDATE_USERLOGIN",
        payload: userAuth,
      });
    } catch (error) {
      dispatch({
        type: "ON_USER_ERROR",
        payload: error,
      });
    }
  };
};
