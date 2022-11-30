import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import List from './list';
import Edit from './edit';
import CamReview from './camera_review';
import CameraScan from './camera';
import CamReviewList from './camera_review_list';

const Stack = createStackNavigator();

export default function Pantry() {
    const screenOptionStyle = {
        headerShown: false,
    };
    
    return (
        <Stack.Navigator initialRouteName={"List"} screenOptions={screenOptionStyle}>
            <Stack.Screen name="List" component={List} />
            <Stack.Screen name="Edit" component={Edit} />
            <Stack.Screen name="CameraScan" component={CameraScan} /> 
            <Stack.Screen name="CamReview" component={CamReview} />
            <Stack.Screen name="CamReviewList" component={CamReviewList} />
                  
        </Stack.Navigator>
    )
}