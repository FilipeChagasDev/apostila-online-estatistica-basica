# Medidas de tendência central

**Filipe Chagas Ferraz**

Medidas de tendência central são métricas que generalizam, de alguma forma, uma sequência de números. As principais medidas de tendência central são:

* Média
* Mediana
* Moda

## Média

Média é a medida de tendência central mais usada. Existem dois tipos de média: média simples e média ponderada. A média simples de uma sequência $x=[x_1,x_2,...,x_n]$ é definida como:

$$\bar{x} = \frac{1}{n} \sum_{i=1}^n x_i = \frac{x_1+x_2+...+x_n}{n}$$

Já a média ponderada considera pesos. A média ponderada de uma sequência $x=[x_1,x_2,...,x_n]$ com pesos $w=[w_1,w_2,...,w_n]$ é definida como:

$$\bar{x} = \frac{\sum_{i=1}^n w_i x_i}{\sum_{i=1}^n w_i} = \frac{w_1 x_1 + w_2 x_2 + ... + w_n x_n}{w_1 + w_2 + ... + w_n}$$

## Mediana

Mediana é uma medida de tendência central que corresponde ao elemento central de uma sequência \textbf{em ordem crescente}. Por exemplo: a mediana de uma sequência $[1,3,4,6,9]$ é $4$, pois 4 é o elemento central da sequência.

A definição de mediana para uma sequência $x=[x_1,x_2,...x_n]$ depende da divisibilidade de $n$ por dois. Se $n$ é impar, a sequência tem apenas um elemento central, que é $x_{(n+1)/2}$, portanto a mediana é definida como:

$$\textbf{mediana}(x) = x_{(n+1)/2}$$

Se $n$ é par, então há dois elementos centrais na sequência, que são $x_{(n/2)}$ e $x_{(n/2)+1}$. Neste caso, a mediana é definida como a média simples dos dois elementos centrais da sequência, ou seja:

$$\textbf{mediana}(x) = \frac{x_{(n/2)}+x_{(n/2)+1}}{2}$$

## Moda

Moda é o valor mais frequente de uma sequência. Exemplo: a moda da sequência $[5,2,4,2,3,5,4,5,5,6]$ é 5, pois 5 é o valor que aparece mais vezes na sequência.

