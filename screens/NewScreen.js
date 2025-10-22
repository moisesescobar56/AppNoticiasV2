import { useState, useEffect } from 'react';
import { Layout, Input, ButtonRounded } from '../components';

export default function NewScreen({ navigation }){
    const [titulo, setTitulo] = useState('');

    return (
        <Layout>
            <ButtonRounded title="Agregar noticia" onPress={() => navigation.navigate('RegisterNew')} />

        </Layout>
    );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderWidth: 2,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  date: {
    color: "#666",
    marginTop: 5,
  },
  image: {
    height: 160,
    width: '100%',
    marginTop: 5,
  },
});