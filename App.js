import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, Button, ToastAndroid, ScrollView, StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from "react-native-vector-icons/MaterialIcons";
import Landmark from "./components/Landmark.js";

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: 'lightgrey',
    },
    container: {
        padding: 16,
        backgroundColor: 'lightgrey',
        flexGrow: 1,
        borderColor: 'steelblue',
        borderWidth: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        backgroundColor: 'skyblue',
        justifyContent: 'space-between',
    },
    question: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'skyblue',
        textAlign: 'center',
    },
    landmarkContainer: {
        alignItems: 'center',
        marginVertical: 20,
        borderColor: 'powderblue',
        borderWidth: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    pickerSelect: {
        fontSize: 16,
        color: 'green',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'green',
    },
    submitButton: {
        backgroundColor: 'green',
        borderRadius: 8,
        marginBottom: 30,
    },
    submitButtonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

const App = () => {
    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');
    const [ans4, setAns4] = useState('');

    const handleSubmit = () => {
        let score = 0;
        const correctAnswers = ['british', '1889', '14 years', '2 million'];
        if (ans1 === correctAnswers[0]) score++;
        if (ans2 === correctAnswers[1]) score++;
        if (ans3 === correctAnswers[2]) score++;
        if (ans4 === correctAnswers[3]) score++;

        let feedbackMessage;
        if (score === 4) {
            feedbackMessage = "Excellent! You got all answers right! " + `You have ${score} correct answers!`;
        } else if (score === 3) {
            feedbackMessage = "Well done! You have a great knowledge! " + `You have ${score} correct answers!`;
        } else if (score === 2) {
            feedbackMessage = "Good job! But there's room for improvement. " + `You have ${score} correct answers!`;
        } else if (score === 1) {
            feedbackMessage = "You can do better next time. " + `You have ${score} correct answers!`;
        } else {
            feedbackMessage = "Don't worry! Keep trying! " + `You have ${score} correct answers!`;
        }

        ToastAndroid.show(feedbackMessage, ToastAndroid.SHORT);
    };

    return (
        <View style={styles.appContainer}>
            <StatusBar hidden={true} />
            <ScrollView contentContainerStyle={styles.container}>
                <Icon name="quiz" size={20} color="#5A5A5A">
                    <Text style={styles.title}>COUNTRY QUIZ</Text>
                </Icon>

                <View style={styles.landmarkContainer}>
                    <Landmark image={require("./img/Landmark_Stonehenge(british).jpg")} />
                    <Text style={styles.question}>Which country does this landmark belong to?</Text>
                    <RNPickerSelect
                        onValueChange={(value) => setAns1(value)}
                        items={[
                            { label: 'Mexico', value: 'mexico' },
                            { label: 'Germany', value: 'germany' },
                            { label: 'British', value: 'british' },
                            { label: 'Russia', value: 'russia' },
                        ]}
                        style={{ inputAndroid: styles.pickerSelect }}
                    />
                </View>

                <View style={styles.landmarkContainer}>
                    <Landmark image={require("./img/the-eiffel-towel(france).jpg")} />
                    <Text style={styles.question}>What year was the Eiffel Tower officially opened to the public?</Text>
                    <RNPickerSelect
                        onValueChange={(value) => setAns2(value)}
                        items={[
                            { label: '1887', value: '1887' },
                            { label: '1889', value: '1889' },
                            { label: '1891', value: '1891' },
                            { label: '1900', value: '1900' },
                        ]}
                        style={{ inputAndroid: styles.pickerSelect }}
                    />
                </View>

                <View style={styles.landmarkContainer}>
                    <Landmark image={require("./img/edited_mountrushmore(usa).jpg")} />
                    <Text style={styles.question}>How long did it take to carve Mount Rushmore?</Text>
                    <RNPickerSelect
                        onValueChange={(value) => setAns3(value)}
                        items={[
                            { label: '10 years', value: '10 years' },
                            { label: '14 years', value: '14 years' },
                            { label: '5 years', value: '5 years' },
                            { label: '20 years', value: '20 years' },
                        ]}
                        style={{ inputAndroid: styles.pickerSelect }}
                    />
                </View>

                <View style={styles.landmarkContainer}>
                    <Landmark image={require("./img/Pyramids of Giza(egypt).jpg")} />
                    <Text style={styles.question}>How many blocks of stone are estimated to have been used to build the Great Pyramid?</Text>
                    <RNPickerSelect
                        onValueChange={(value) => setAns4(value)}
                        items={[
                            { label: '2 million', value: '2 million' },
                            { label: '5 million', value: '5 million' },
                            { label: '10 million', value: '10 million' },
                            { label: '1 million', value: '1 million' },
                        ]}
                        style={{ inputAndroid: styles.pickerSelect }}
                    />
                </View>

                <View style={styles.submitButton}>
                    <Button onPress={handleSubmit} title="Submit Answers"/>
                </View>
            </ScrollView>
        </View>
    );
}

export default App;
