import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { BotonCal } from '../components';
import { styles } from '../theme/AppTheme';

const CalculadoraScreen = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('0');

  const armarNumero = (numeroTexto: string) => {
    //No aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') {
      return;
    }
    if (numero.startsWith('0') || numero.startsWith('-0')) {
      //punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
        //Evaluar si es otro cero y hay un punto
      } else if (numeroTexto === '0' && numeroTexto.includes('.')) {
        setNumero(numero + numeroTexto);
        //Evaluar si es diferente de 0 y no tiene un punto
      } else if (numeroTexto !== '0' && !numeroTexto.includes('.')) {
        setNumero(numeroTexto);
        //evita el 000.0
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const limpiar = () => {
    setNumero('0');
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const btnDel = () => {
    if (
      numero.length === 1 ||
      numero === `-${numero.charAt(numero.length - 1)}`
    ) {
      setNumero('0');
    } else {
      setNumero(numero.substring(0, numero.length - 1));
    }
  };

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      {/* fila de botones*/}
      <View style={styles.fila}>
        <BotonCal texto="C" color="#9B9B9B" accion={limpiar} />
        <BotonCal texto="+/-" color="#9B9B9B" accion={positivoNegativo} />
        <BotonCal texto="Del" color="#9B9B9B" accion={btnDel} />
        <BotonCal texto="/" color="#FF9427" accion={limpiar} />
      </View>
      {/* fila de botones*/}
      <View style={styles.fila}>
        <BotonCal texto="7" accion={armarNumero} />
        <BotonCal texto="8" accion={armarNumero} />
        <BotonCal texto="9" accion={armarNumero} />
        <BotonCal texto="X" color="#FF9427" accion={limpiar} />
      </View>
      {/* fila de botones*/}
      <View style={styles.fila}>
        <BotonCal texto="4" accion={armarNumero} />
        <BotonCal texto="5" accion={armarNumero} />
        <BotonCal texto="6" accion={armarNumero} />
        <BotonCal texto="-" color="#FF9427" accion={limpiar} />
      </View>
      {/* fila de botones*/}
      <View style={styles.fila}>
        <BotonCal texto="1" accion={armarNumero} />
        <BotonCal texto="2" accion={armarNumero} />
        <BotonCal texto="3" accion={armarNumero} />
        <BotonCal texto="+" color="#FF9427" accion={limpiar} />
      </View>
      {/* fila de botones*/}
      <View style={styles.fila}>
        <BotonCal texto="0" ancho accion={armarNumero} />
        <BotonCal texto="." accion={armarNumero} />
        <BotonCal texto="=" color="#FF9427" accion={limpiar} />
      </View>
    </View>
  );
};

export { CalculadoraScreen };
