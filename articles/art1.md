# 1 - Medidas básicas de tendência central e dispersão

**Filipe Chagas Ferraz**

**Julho, 2022**

### 1.1. Somatório

Somatório é a soma de uma sequência de valores. Por exemplo: o somatório da sequência $[1,2,3,4]$ é $1+2+3+4$.

A simbologia padrão do somatório é a seguinte:


$$\sum_{\textbf{índice}=\textbf{índice inicial}}^{\textbf{índice final}} \textbf{expressão}$$

Onde

* $\Sigma$ é a letra grega 'Sigma' maiúscula;
* **índice** é uma variável usada para enumerar a sequência de valores do somatório. As letras $i$ e $j$ costumam ser usadas como variáveis de índice.
* **índice inicial** é o valor inicial da variável de índice.
* **índice final** é o valor final da variável de índice.

Em um somatório, o valor da variável de índice é incrementado de 1 em 1 até atingir o índice final.

$$\sum_{i=1}^4 i^2 = 1^2 + 2^2 + 3^2 + 4^2$$

Neste exemplo, a variável de índice é $i$, o índice inicial é 1, o índice final é 4 e a expressão é $i^2$. Observe que os valores que são atribuídos a $i$ ao longo do somatório são, respectivamente, 1, 2, 3 e 4. 

Quando queremos representar o somatório de uma sequência, podemos usar um índice subscrito no símbolo da sequência para referenciar qual valor da sequência estamos somando. **Exemplo:** o somatório da sequência $x=[2,0,2,2]$ pode ser escrito como:

$$\sum_{i=1}^4 x_i = x_1 + x_2 + x_3 + x_4 = 2 + 0 + 2 + 2 = 6$$

**Outro exemplo:** o somatório dos quadrados de uma sequência $u=[...]$ de $n$ valores pode ser escrito como:

$$\sum_{i=1}^n {u_i}^2 = {u_1}^2 + {u_2}^2 + ... + {u_n}^2$$

Algumas propriedades importantes do somatório são:

* $\sum_{i=m}^n a x_i = a\sum_{i=m}^n x_i$ (distributividade)
* $( \sum_{i=m}^n x_i ) + ( \sum_{i=m}^n y_i ) = \sum_{i=m}^n (x_i + y_i)$ (associatividade)
* $( \sum_{i=u}^n x_i )( \sum_{j=v}^m y_j ) = \sum_{i=u}^n\sum_{j=v}^m x_i y_j$ (distributividade/fatoração)
