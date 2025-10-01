import { SafeAreaView, Text, Image, StyleSheet, View, Pressable } from "react-native";
import {useState} from 'react'
import {MaterialIcons} from '@expo/vector-icons'
import { createcreateStaticNavigation } from '@react-navigation/elements'

export default function ItemCard ({title, saved}) {
    const [bookmark, setbookmark] = useState(saved)
    return (
    <View style={styles.box}>
        <Text style={styles.title}> {title} </Text>
        <Pressable onPress={() => setbookmark(bookmark == "bookmark" ? "bookmark-outline" : "bookmark")}>
        <MaterialIcons size={22} style={{paddingRight: 5}} name={bookmark} ></MaterialIcons>
        </Pressable>
    </View>
    );
}

const styles = StyleSheet.create(
    {
        box : {
            flex: 1,
            height: 40,
            width: 320, /*<- fill */
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderColor: 'gray',
            borderWidth : 1,
            borderRadius: 12,
            
            maxHeight: 80,
            minHeight: 80,
            margin: 5,
            
        },
        title : {
            paddingRight: 100,
            paddingLeft: 5
        }

    }
)