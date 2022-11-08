import { API, graphqlOperation } from "aws-amplify";
import React from "react";
import { View } from "react-native";
import { Button } from "@rneui/themed";
import { connect } from "react-redux";
import { CATEGORY, Event, Location } from "../../../API";
import { createActivity } from "../../../graphql/mutations";
import { getActivity, listActivities } from "../../../graphql/queries";
import { Activity } from "../../../models/activity/activity";
import { Company } from "../../../models/activity/company";
import { Opendays } from "../../../models/activity/opendays";
import { CategoryModel } from "../../../models/event/categoryTypes";
import {
  ActivitiesState,
  ApplicationState,
  ON_UPDATE_EVENTPREFERENCES,
  UserState,
} from "../../../Store";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../navigation/types";

interface FavouritesScreenProps {
  userReducer: UserState;
  activitiesReducer: ActivitiesState;
}

export const _FavouritesScreen: React.FC<FavouritesScreenProps> = (props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  function parseData() {}

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button title="Select Document" onPress={() => parseData()} />
    </View>
  );
};

export const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
  activitiesReducer: state.ActivitiesReducer,
});

const FavouritesScreen = connect(mapToStateProps, {
  ON_UPDATE_EVENTPREFERENCES,
})(_FavouritesScreen);

export default FavouritesScreen;
