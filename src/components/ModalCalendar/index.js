import React, { useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";

import {
    Container,
    ButtonTextFilter,
    ButtonFilter,
    BoxCalendar
} from './styles'

import { Calendar, LocaleConfig } from "react-native-calendars";

export default function CalendarMovemnets({ setVisible, Filter }){
    const [dateNow, setDateNow] = useState(new Date())
    const [markedDate, setMarkedDate] = useState({})

    function defineDate(date){
        // console.log(date.dateString)
        setDateNow(new Date(date.dateString))

        let markedDay = {};

        markedDay[date.dateString] = {
            selected: true,
            selectedColor: '#118AB2',
            textColor: '#fff'
        }

        setMarkedDate(markedDay)
    }

    function SetFilter(){
        Filter(dateNow)
        setVisible()
    }

    return(
        <Container>
            <TouchableWithoutFeedback onPress={setVisible}>
                <View style={{ flex: 1 }} ></View>
            </TouchableWithoutFeedback>

            <BoxCalendar>
 
                <Calendar
                onDayPress={defineDate}
                markedDates={markedDate}
                enableSwipeMonths={true}
                theme={{
                    todayTextColor: '#EF476F',
                    selectedDayBackgroundColor: '#118AB2',
                    selectedDayTextColor: '#fff'
                }}
                />

                <ButtonFilter onPress={ SetFilter } >
                    <ButtonTextFilter>Filtrar</ButtonTextFilter>
                </ButtonFilter>

            </BoxCalendar>
        </Container>
    )
}