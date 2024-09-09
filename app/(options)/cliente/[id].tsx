import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import TextoDiferente from "@/components/TextoDiferente"

export default function Cliente() {
    const { id } = useLocalSearchParams()

    /* A tag na linha 14 se chama Fragmento/Fragment, é apenas uma tag react vazia, aqui usamos ele para "abraçar" 
        outros elementos React, semelhante com o que uma div faria. 
        Porém é usado apenas em casos especificos como esse, onde as tags precisam de um elemento "pai" qualquer.
    */

    return (
        <>
            <Text>O id enviado foi {id}</Text>
            <TextoDiferente />
        </>
    )
}