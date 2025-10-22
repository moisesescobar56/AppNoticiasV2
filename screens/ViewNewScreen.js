import { useState, useEffect } from 'react';
import { Layout, Input, ButtonRounded } from '../components';
import { ScrollView, Text, Image, ActivityIndicator, StyleSheet } from "react-native";

export default function ViewNewScreen({ route }){

    return (
        <Layout>
            <ScrollView style={styles.container} >
                <Text style={styles.title}>Titulo</Text>
                <Text style={styles.date}>Fecha</Text>
                <Image style={styles.image} source={{uri: ""}} />
                <Text style={styles.text} > Texto </Text>
            </ScrollView>
        </Layout>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginBottom: 20,
},
title: {
    fontWeight: "bold",
    fontSize: 22,
},
date: {
    color: "#666",
    marginTop: 5,
},
text:{
    textAlign: "justify",
    fontSize: 14,
    lineHeight: 22.5,
    marginBottom: 15,
  },
  image: {
    height: 250,
    width: '100%',
    marginTop: 5,
  },
});