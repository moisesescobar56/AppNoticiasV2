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