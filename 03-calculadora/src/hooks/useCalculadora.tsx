import { useRef, useState } from 'react';
import { Operadores } from '../modelos';

export const useCalculadora = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

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
    setNumeroAnterior('0');
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

  const cambiarNumeroPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.substring(0, numero.length - 1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  // const btnDividir = () => {
  //   cambiarNumeroPorAnterior();
  //   ultimaOperacion.current = Operadores.dividir;
  // };
  // const btnMultiplicar = () => {
  //   cambiarNumeroPorAnterior();
  //   ultimaOperacion.current = Operadores.multiplicar;
  // };
  // const btnRestart = () => {
  //   cambiarNumeroPorAnterior();
  //   ultimaOperacion.current = Operadores.restar;
  // };
  // const btnSumar = () => {
  //   cambiarNumeroPorAnterior();
  //   ultimaOperacion.current = Operadores.sumar;
  // };

  const btnOperacion = (operadores: Operadores) => {
    cambiarNumeroPorAnterior();
    ultimaOperacion.current = operadores;
  };

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    // const operacion = {
    //   sumar: () => setNumero(`${num1 + num2}`),
    //   restar: () => setNumero(`${num2 + num1}`),
    //   dividir: () => setNumero(`${num2 + num1}`),
    //   multiplicar: () => setNumero(`${num1 + num2}`),
    // };

    // const result = operacion[btnOperacion]
    //   ? operacion[btnOperacion]()
    //   : setNumeroAnterior('0');
    // return result;
    //
    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`);
        break;
      case Operadores.restar:
        setNumero(`${num2 - num1}`);
        break;
      case Operadores.dividir:
        setNumero(`${num2 / num1}`);
        break;
      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`);
        break;
    }
    setNumeroAnterior('0');
  };

  return {
    armarNumero,
    btnOperacion,
    calcular,
    btnDel,
    limpiar,
    positivoNegativo,
    numero,
    numeroAnterior,
  };
};
