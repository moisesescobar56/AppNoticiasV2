import { useState, useEffect } from 'react';
import { Layout, Input, ButtonRounded } from '../components';

export default function RegisterNewScreen({ navigation }){
    const [titulo, setTitulo] = useState('');
    const [imagenUrl, setImagenUrl] = useState('');
    const [contenido, setContenido] = useState('');

    function guardar(){

    }

    return (
        <Layout>
            <Input 
                label="Titulo"
                placeholder="titulo principal"
                type="default"
                value={titulo}
                onChangeText={setTitulo} />               
            <Input 
                label="ImagenUrl"
                placeholder="http://sitio.com/imagen.png"
                type="default"
                value={imagenUrl}
                onChangeText={setImagenUrl} />
            <Input 
                label="Contenido"
                placeholder="escribir aqui..."
                value={contenido}
                onChangeText={setContenido} />

            <ButtonRounded title="Guardar" />    
            <ButtonRounded title="Cancelar" isPrimary={false} onPress={()=> navigation.popToTop()} />    
        </Layout>
    );
}