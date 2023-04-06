import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import Colors from "../../../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ApplicationState } from "../../../Store/reducers";
import { connect } from "react-redux";
import { CATEGORY } from "../../../API";

interface UserPreferenceProps {
  userReducer: any;
}

const _UserPreferenceModal: React.FC<UserPreferenceProps> = ({
  userReducer,
}) => {
  const [selectedDate, setSelectedDate] = useState<String>("All");
  const [selectedCategories, setSelectedCategories] = useState<Array<CATEGORY>>(
    []
  );
  const [selectAllCategories, setSelectAllCategories] =
    useState<boolean>(false);

  const dateButtons = [
    { label: "All", value: "All" },
    { label: "Today", value: "Today" },
    { label: "Tomorrow", value: "Tomorrow" },
    { label: "This week", value: "This week" },
    { label: "This Weekend", value: "This Weekend" },
    { label: "Later", value: "Later" },
  ];

  const categoryButtonLabels: Array<CATEGORY> = [
    CATEGORY.MUSIC,
    CATEGORY.FESTIVAL,
    CATEGORY.EXPO,
    CATEGORY.SPORT,
    CATEGORY.GAMES,
    CATEGORY.NIGHTLIFE,
    CATEGORY.FOODDRINKS,
    CATEGORY.TECHNOLOGY,
    CATEGORY.TRIP,
    CATEGORY.STANDUP,
    CATEGORY.FAMILY,
    CATEGORY.HEALTH,
    CATEGORY.EDUCATION,
    CATEGORY.MUSEUM,
    CATEGORY.NATURE,
  ];

  // <--------- Render buttons ------->
  const renderDateButton = ({
    item,
  }: {
    item: { label: string; value: string };
  }) => {
    return (
      <TouchableOpacity
        onPress={() => handleDateSelectPress(item.value)}
        style={
          selectedDate === item.value ? styles.selectedButton : styles.button
        }
      >
        <Text style={styles.buttonLabel}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  const renderCategoryButton = ({ item }: { item: CATEGORY }) => {
    return (
      <TouchableOpacity
        onPress={() => handleCategorySelectPress(item)}
        style={
          selectedCategories.includes(item)
            ? styles.selectedButton
            : styles.button
        }
      >
        <Text style={styles.buttonLabel}>{item}</Text>
      </TouchableOpacity>
    );
  };
  //

  // <----- Handle Select Press ------>
  const handleDateSelectPress = (value: string) => {
    setSelectedDate(value);
  };

  const handleCategorySelectPress = (label: CATEGORY) => {
    const index = selectedCategories.indexOf(label);
    if (index > -1) {
      // Remove the label from the array if it's already selected
      setSelectedCategories([
        ...selectedCategories.slice(0, index),
        ...selectedCategories.slice(index + 1),
      ]);
    } else {
      setSelectedCategories([...selectedCategories, label]);
    }
    setSelectAllCategories(false);
  };
  //

  console.log(userReducer);
  const handleSubmit = () => {
    // TODO
    console.log("Form submitted");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonGroupHeader}>
        <FontAwesome name="calendar" size={18} color="white" />
        <Text style={styles.optionsTitle}> Select Date</Text>
      </View>
      <FlatList
        keyExtractor={(item) => item.value}
        data={dateButtons}
        renderItem={(item) => renderDateButton(item)}
        numColumns={3}
      />

      <View style={styles.buttonGroupHeader}>
        <MaterialCommunityIcons name="lightning-bolt" size={18} color="white" />
        <Text style={styles.optionsTitle}> Select Categories</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          setSelectAllCategories(true);
          setSelectedCategories([]);
        }}
        style={[
          selectAllCategories === true ? styles.selectedButton : styles.button,
          { width: Dimensions.get("window").width - 10 },
        ]}
      >
        <Text style={styles.buttonLabel}>Select All</Text>
      </TouchableOpacity>

      <FlatList
        keyExtractor={(item) => item}
        data={categoryButtonLabels}
        renderItem={(item) => renderCategoryButton(item)}
        numColumns={3}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
});

const UserPreferenceModal = connect(mapToStateProps)(_UserPreferenceModal);
export default UserPreferenceModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingBottom: 20,
  },
  optionsTitle: {
    fontSize: 18,
    color: "white",
    marginLeft: 10,
    fontWeight: "bold",
  },
  datebuttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 10,
    flex: 1,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 3,
    margin: 5,
    flex: 1,
    width: 100, // add a fixed width
    height: 40, // add a fixed height
    alignItems: "center",
    justifyContent: "center",
  },

  submitButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },

  selectedButton: {
    backgroundColor: "#f1c40f",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 3,
    margin: 5,
    flex: 1,
    width: 100, // add a fixed width
    height: 40, // add a fixed height
    alignItems: "center",
    justifyContent: "center",
  },

  buttonLabel: {
    color: "#1a1a1a",
    fontSize: 14,
    fontWeight: "bold",
  },

  buttonGroupHeader: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
    alignContent: "center",
  },

  submitButton: {
    backgroundColor: "#f1c40f",
    alignSelf: "center",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
