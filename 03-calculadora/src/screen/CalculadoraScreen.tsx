import React from 'react';
import { Text, View } from 'react-native';
import { BotonCal } from '../components';
import { useCalculadora } from '../hooks';
import { Operadores } from '../modelos';
import { styles } from '../theme/AppTheme';

const CalculadoraScreen = () => {
  const {
    numeroAnterior,
    numero,
    positivoNegativo,
    limpiar,
    btnDel,
    calcular,
    btnOperacion,
    armarNumero,
  } = useCalculadora();
  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      {/* fila de botones*/}
      <View style={styles.fila}>
        <BotonCal texto="C" color="#9B9B9B" accion={limpiar} />
        <BotonCal texto="+/-" color="#9B9B9B" accion={positivoNegativo} />
        <BotonCal texto="Del" color="#9B9B9B" accion={btnDel} />
        <BotonCal
          texto="/"
          color="#FF9427"
          accion={() => btnOperacion(Operadores.dividir)}
        />
      </View>
      {/* fila de botones*/}
      <View style={styles.fila}>
        <BotonCal texto="7" accion={armarNumero} />
        <BotonCal texto="8" accion={armarNumero} />
        <BotonCal texto="9" accion={armarNumero} />
        <BotonCal
          texto="X"
          color="#FF9427"
          accion={() => btnOperacion(Operadores.multiplicar)}
        />
      </View>
      {/* fila de botones*/}
      <View style={styles.fila}>
        <BotonCal texto="4" accion={armarNumero} />
        <BotonCal texto="5" accion={armarNumero} />
        <BotonCal texto="6" accion={armarNumero} />
        <BotonCal
          texto="-"
          color="#FF9427"
          accion={() => btnOperacion(Operadores.restar)}
        />
      </View>
      {/* fila de botones*/}
      <View style={styles.fila}>
        <BotonCal texto="1" accion={armarNumero} />
        <BotonCal texto="2" accion={armarNumero} />
        <BotonCal texto="3" accion={armarNumero} />
        <BotonCal
          texto="+"
          color="#FF9427"
          accion={() => btnOperacion(Operadores.sumar)}
        />
      </View>
      {/* fila de botones*/}
      <View style={styles.fila}>
        <BotonCal texto="0" ancho accion={armarNumero} />
        <BotonCal texto="." accion={armarNumero} />
        <BotonCal texto="=" color="#FF9427" accion={calcular} />
      </View>
    </View>
  );
};

export { CalculadoraScreen };
