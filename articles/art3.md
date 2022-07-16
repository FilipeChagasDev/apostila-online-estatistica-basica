# Medidas de dispersão

**Filipe Chagas Ferraz**

Medidas de dispersão servem para medir o quão discrepantes ou 'espalhados' os valores de uma sequência estão. As principais medidas de dispersão são:

* variância
* desvio padrão

## Variância

A variância é uma medida de dispersão que indica o 'quão longe' os valores de uma sequência estão da média. A variância de uma sequência $x=[x_1,x_2,...,x_n]$ é definida como:

$$\textbf{var}(x) = \frac{1}{n}\sum_{i=1}^n (x_i - \bar{x})^2$$

Obs: lembre-se de que $\bar{x}$ é a média de $x$.

$\textbf{var}(x)$ é um dos símbolos que representam a variância da sequência $x$. Outros símbolos comuns são $\textbf{Var}[x]$ e $\sigma^2$ ('$\sigma$' é a letra grega Sigma minúscula).

A ideia da variância é basicamente ser a média de todas as diferenças $x_i - \bar{x}$ da sequência elevadas ao quadrado. Elevar as diferenças ao quadrado faz com que não haja valores negativos no somatório. Quanto mais 'longe' os valores da sequência estiverem da média da sequência, maior será a variância.

**Exemplo:** considere a sequência $x=[5,5,5,5]$. A média da sequência é:

$$\bar{x} = \frac{1}{4}\sum_{i=1}^4 x_i = \frac{5+5+5+5}{4} = \frac{4 \times 5}{4} = 5$$

A variância da sequência é:

$$\textbf{var}(x) = \frac{1}{4} \sum_{i=1}^4 (x_i - \bar{x})^2 = \frac{(5 - 5)^2 + (5 - 5)^2 + (5 - 5)^2 + (5 - 5)^2}{4} = 0$$

A variância de $x$ é nula pois não há diferença entre os valores da sequência e a média.

**Outro exemplo:** considere a sequência $y=[1,5,1,9,9,]$. A média da sequência é:

$$\bar{y} = \frac{1}{5} \sum_{i=1}^5 y_i = \frac{1+5+1+9+9}{5} = 5$$

A variância da sequência é:

$$\textbf{var}(x) = \frac{1}{5} \sum_{i=1}^5 (y_i - \bar{y})^2 = \frac{(1 - 5)^2 + (5 - 5)^2 + (1 - 5)^2 + (9 - 5)^2 + (9- 5)^2}{5} = 12.8$$

Como há valores em $y$ 'longe' da média $\bar{y}$, a variância de $y$ é maior que zero.

## Desvio padrão

Desvio padrão é uma medida de tendência central que segue a mesma ideia da variância, mas é definida de forma um pouco diferente. A definição do desvio padrão para uma sequência $x=[...]$ de $n$ valores é:

$$\sigma = \sqrt{\textbf{var}(x)} = \sqrt{\frac{1}{n}\sum_{i=1}^n (x_i - \bar{x})^2}$$

$\sigma$ é o principal símbolo usado para o desvio padrão. Outros símbolos menos comuns são $\textbf{dp}(x)$ e $\textbf{std}(x)$ (acrônimo de _standard deviation_).