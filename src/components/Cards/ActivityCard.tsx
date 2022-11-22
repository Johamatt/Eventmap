import { ListItem } from "@rneui/base";
import React from "react";
import { Activity } from "../../API";
import { ListIcon } from "../Icon/ListIcon";

interface ActivitiesListProps {
  activity: Activity;
}

export const ActivityCard: React.FC<ActivitiesListProps> = (props) => {
  const activity: Activity = props.activity;

  let day = new Date().getDay();

  return (
    <ListItem
      bottomDivider
      onPress={() => console.log(activity.Names.fi)} // navigate TODO
    >
      <ListItem.Content>
        <ListIcon data={activity.categories} />
      </ListItem.Content>

      <ListItem.Content>
        {activity.Names.fi !== "Unknown" ? (
          <ListItem.Title style={{ color: "black" }}>
            {activity.Names.fi}
          </ListItem.Title>
        ) : (
          <ListItem.Subtitle style={{ color: "black" }}>
            {activity.Names.en}
          </ListItem.Subtitle>
        )}
      </ListItem.Content>

      <ListItem.Content right>
        {activity.OpenDays[day]?.timeFrom !== null && //fix typechecks later
        activity.OpenDays[day]?.timeTo !== null ? (
          <>
            <ListItem.Title
              right
              style={{
                color: "green",
              }}
            >
              {activity.OpenDays[day]?.timeFrom}
            </ListItem.Title>
            <ListItem.Subtitle right>
              {activity.OpenDays[day]?.timeTo}
            </ListItem.Subtitle>
          </>
        ) : (
          <>
            <ListItem.Title right style={{ color: "green" }}>
              Open Today
            </ListItem.Title>
            <ListItem.Subtitle right>Check</ListItem.Subtitle>
          </>
        )}
      </ListItem.Content>
    </ListItem>
  );
};
