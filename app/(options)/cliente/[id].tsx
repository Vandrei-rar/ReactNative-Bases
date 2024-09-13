import { useLocalSearchParams } from "expo-router";
import { Button, ScrollView, StyleSheet, Text } from "react-native";
import TextoDiferente from "@/components/TextoDiferente"
import { useEffect, useState } from "react";

type DadosApi = {
    cep?: string,
    logradouro?: string,
    bairro?: string,
    estado?: string
}

type Pokemon = {
    abilities: [{
        ability: {
            name: string
        }
    }]
}

export default function Cliente() {
    const [number, setNumber] = useState(0);
    const [dados, setDados] = useState<DadosApi>({});
    const [pokemon, setPokemon] = useState<Pokemon>();

    const { id } = useLocalSearchParams()

    /* A tag na linha 14 se chama Fragmento/Fragment, é apenas uma tag react vazia, aqui usamos ele para "abraçar" 
        outros elementos React, semelhante com o que uma div faria. 
        Porém é usado apenas em casos especificos como esse, onde as tags precisam de um elemento "pai" qualquer.
    */

    function callApi() {
        fetch('https://viacep.com.br/ws/15406026/json/')
            .then(async (resposta) => {
                const data = await resposta.json()
                setDados(data)
            })
    }

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
            .then((response) => response.json())
            .then((dataPokemon) => setPokemon(dataPokemon))
        console.log("Atribuiu")

    }, [])

    return (
        <ScrollView>
            <Text>O id enviado foi {id}</Text>
            <TextoDiferente />
            <Button
                title="chamar api"
                onPress={() => callApi()}
            />
            <Text style={styles.textSoma}>{number}</Text>
            <Text style={styles.textSoma}>{dados?.cep}</Text>
            <Text style={styles.textSoma}>
                {pokemon?.abilities.map((data) => data.ability.name)}
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textSoma: {
        fontSize: 50
    }
})