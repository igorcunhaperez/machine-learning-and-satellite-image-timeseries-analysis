# Glossário de Sensoriamento Remoto e Machine Learning

Este projeto se destina a ter um glossário das principais palavras para auxiliar os participantes da Mentoria IaC.

- Os termos estão em ordem alfabética, podendo estar em Português, Inglês ou em formas aportuguesadas.
- O significado de cada termo está em Português.
- Cada termo possui um link de referência e, quando houver um artigo relacionado no blog da Mentoria IaC, ele poderá ser adicionado ao verbete.

## Escolha a letra do Alfabeto

[A](#a) | [B](#b) | [C](#c) | [D](#d) | [E](#e) | [F](#f) | [G](#g) | [H](#h) | [I](#i) | [J](#j) | [K](#k) | [L](#l) | [M](#m) | [N](#n) | [O](#o) | [P](#p) | [Q](#q) | [R](#r) | [S](#s) | [T](#t) | [U](#u) | [V](#v) | [W](#w) | [X](#x) | [Y](#y) | [Z](#z) |

## A

### [Active learning](https://e-sensing.github.io/sitsbook/cl_uncertainty.html)
Estratégia de aprendizagem que busca selecionar amostras ou áreas mais informativas para rotulagem adicional. Em sensoriamento remoto, pode priorizar regiões com alta incerteza, reduzindo esforço de coleta de amostras e melhorando o modelo de forma iterativa.

### [Analysis-Ready Data (ARD)](https://e-sensing.github.io/sitsbook/dc_ardcollections.html)
Dados de satélite previamente processados para uso direto em análises. Normalmente incluem correções radiométricas, geométricas e atmosféricas, além de organização padronizada. Dados ARD reduzem etapas manuais de pré-processamento e facilitam análises reprodutíveis.

### [Application Programming Interface (API)](https://e-sensing.github.io/sits/reference/index.html)
Conjunto estruturado de funções, regras e entradas que permite interagir com um software. No `sits`, a API corresponde às funções usadas para criar cubos, extrair dados, treinar modelos, classificar imagens, validar resultados e executar outras etapas do fluxo de análise.

### [ARD image collections](https://e-sensing.github.io/sitsbook/dc_ardcollections.html)
Coleções de imagens de satélite em formato Analysis-Ready Data. Elas são organizadas por provedor, sensor, produto, resolução, sistema de grade e intervalo temporal, permitindo o acesso consistente a imagens preparadas para análise em cubos de dados.

## B

### [Bounding box](https://e-sensing.github.io/sitsbook/intro_quicktour.html)
Retângulo que delimita uma área de interesse por coordenadas mínimas e máximas, como longitude e latitude. É usado para definir a extensão espacial de consultas, cubos, extrações de dados ou visualizações.

### [Brazil Data Cube (BDC)](https://e-sensing.github.io/sitsbook/dc_ardcollections.html)
Iniciativa brasileira que fornece coleções de imagens de Observação da Terra em formato de cubos de dados e produtos Analysis-Ready Data. O BDC facilita o acesso a séries temporais padronizadas para monitoramento ambiental e aplicações de sensoriamento remoto.

## C

### [Classification model](https://e-sensing.github.io/sits/reference/index.html)
Resultado do treinamento de um algoritmo de machine learning com dados rotulados. O modelo armazena relações aprendidas entre atributos de entrada e classes, podendo ser aplicado a novas amostras, pixels, objetos ou cubos de dados para gerar previsões.

### [Commission error](https://e-sensing.github.io/sitsbook/val_map.html)
Erro em que casos são incluídos em uma classe mapeada, mas pertencem a outra classe nos dados de referência. Está relacionado a falsos positivos e indica excesso de inclusão incorreta em uma classe.

### [Confusion matrix](https://e-sensing.github.io/sitsbook/val_map.html)
Tabela que compara classes previstas pelo modelo com classes de referência. Os valores da diagonal representam acertos, enquanto os valores fora da diagonal indicam confusões entre classes. É a base para várias métricas de acurácia.

### [Cross-validation](https://e-sensing.github.io/sitsbook/val_kfold.html)
Técnica de avaliação em que os dados são divididos repetidamente em partes de treinamento e validação. Ela permite estimar a capacidade de generalização do modelo de forma mais robusta do que uma única divisão dos dados.

## D

### [Dataset](https://e-sensing.github.io/sitsbook/ts_basics.html)
Coleção estruturada de dados usada para análise, treinamento, validação ou teste. Em machine learning e sensoriamento remoto, um dataset pode conter amostras, séries temporais, rótulos, bandas, índices, metadados e divisões experimentais.

### [Deep learning](https://e-sensing.github.io/sitsbook/cl_machinelearning.html)
Subárea de machine learning baseada em redes neurais com múltiplas camadas de processamento. Em séries temporais de imagens de satélite, modelos de deep learning podem aprender padrões temporais e espectrais complexos, especialmente quando há grande volume de amostras e muitas datas disponíveis.

### [Directory](https://e-sensing.github.io/sitsbook/dc_localcubes.html)
Local de armazenamento no sistema de arquivos, também chamado de pasta. Em fluxos com `sits`, diretórios são usados para organizar cubos locais, imagens, resultados intermediários, modelos treinados, mapas classificados e arquivos de validação.

## E

### [Earth observation data cube (EO data cube)](https://e-sensing.github.io/sitsbook/intro_quicktour.html)
Estrutura que organiza imagens de Observação da Terra por espaço, tempo, bandas e metadados. Um cubo de dados facilita consultas, extração de séries temporais, análise multitemporal e classificação, pois reúne imagens compatíveis em uma representação padronizada.

### [Event](https://e-sensing.github.io/sitsbook/cl_rasterclassification.html)
Ocorrência relevante de mudança no uso ou cobertura da terra em um local e período específico. Em séries temporais de satélite, eventos podem incluir desmatamento, queimada, colheita, inundação ou recuperação da vegetação.

### [Event-based sample](https://e-sensing.github.io/sitsbook/ts_basics.html)
Amostra definida em torno da ocorrência de um evento específico e de sua janela temporal. Esse tipo de amostra permite relacionar mudanças observadas na série temporal com processos reais de transformação da paisagem.

## F

### [F1-score](https://e-sensing.github.io/sitsbook/val_map.html)
Métrica que combina precision e recall em um único valor por meio da média harmônica. É útil quando existe desequilíbrio entre classes ou quando se deseja avaliar simultaneamente erros de inclusão e exclusão de uma classe.

### [False negative (FN)](https://e-sensing.github.io/sitsbook/val_map.html)
Caso que pertence a uma classe nos dados de referência, mas não foi previsto como tal pelo modelo. Em mapas temáticos, falsos negativos indicam áreas reais da classe que foram omitidas na classificação.

### [False positive (FP)](https://e-sensing.github.io/sitsbook/val_map.html)
Caso previsto como pertencente a uma classe, mas que pertence a outra segundo os dados de referência. Em mapas temáticos, falsos positivos representam áreas incluídas incorretamente em uma classe mapeada.

## G

### [Good fitting](https://e-sensing.github.io/sitsbook/cl_machinelearning.html)
Condição desejável em que o modelo captura padrões relevantes sem memorizar ruídos do treinamento. Um modelo bem ajustado apresenta desempenho consistente entre treinamento, validação e teste, indicando boa capacidade de generalização.

### [Ground truth values](https://e-sensing.github.io/sitsbook/intro_quicktour.html)
Informações de referência consideradas como a classe ou condição correta de uma amostra ou área. Em classificação supervisionada, esses valores são usados para treinar modelos e avaliar a qualidade das previsões por meio de métricas e matrizes de confusão.

## H

### [Hyperparameter](https://e-sensing.github.io/sitsbook/cl_machinelearning.html)
Configuração do modelo definida antes ou durante o treinamento, mas não aprendida diretamente a partir dos dados. Exemplos incluem número de árvores, taxa de aprendizado, profundidade máxima, tamanho do batch, número de épocas e arquitetura de rede neural.

## I

### [Imbalanced dataset](https://e-sensing.github.io/sitsbook/ts_balance.html)
Dataset em que algumas classes possuem muito mais amostras do que outras. Esse desequilíbrio pode fazer o modelo favorecer classes majoritárias e prejudicar classes raras, sendo comum aplicar balanceamento, ponderação ou estratégias de amostragem.

## J

Nenhum termo cadastrado até o momento.

## K

### [K-fold cross-validation](https://e-sensing.github.io/sitsbook/val_kfold.html)
Procedimento de validação cruzada que divide o conjunto de amostras em k partes aproximadamente iguais. O modelo é treinado k vezes, usando uma parte para validação e as demais para treinamento, alternando a parte de validação a cada repetição.

## L

### [Label](https://e-sensing.github.io/sitsbook/intro_quicktour.html)
Nome da classe associado a uma amostra ou predição. Em classificação supervisionada, o label representa a categoria de referência usada no treinamento ou a classe atribuída pelo modelo, como floresta, água, agricultura ou desmatamento.

### [Library](https://github.com/e-sensing/sits?tab=readme-ov-file)
Coleção de funções, estruturas de dados e documentação reutilizáveis em um ambiente de programação. Em R, uma library é carregada para disponibilizar pacotes como o `sits`, permitindo usar suas funções no fluxo de análise.

### [Lightweight Temporal Attention Encoder (LTAE)](https://e-sensing.github.io/sitsbook/cl_machinelearning.html)
Arquitetura de deep learning que utiliza atenção temporal em uma forma mais leve de encoder. Ela busca identificar datas ou padrões temporais mais relevantes para a classificação, reduzindo custo computacional em relação a arquiteturas mais complexas.

### [Local cube](https://e-sensing.github.io/sitsbook/dc_localcubes.html)
Cubo de dados de Observação da Terra armazenado no computador do usuário ou em um sistema de arquivos acessível localmente. Ele permite executar análises sem depender diretamente de serviços remotos durante todo o processamento.

## M

### [Machine learning](https://e-sensing.github.io/sitsbook/cl_machinelearning.html)
Área da computação em que algoritmos aprendem padrões a partir de dados e usam esses padrões para realizar previsões, classificações ou agrupamentos. Em sensoriamento remoto, é usado para associar valores espectrais, temporais e espaciais a classes de uso e cobertura da terra.

### [Machine learning algorithm](https://e-sensing.github.io/sitsbook/cl_machinelearning.html)
Método computacional usado para aprender relações entre variáveis de entrada e classes ou valores de saída. Exemplos incluem Random Forest, XGBoost e redes neurais. O algoritmo define como os padrões são aprendidos durante o treinamento.

### [Map accuracy measures](https://e-sensing.github.io/sitsbook/val_map.html)
Conjunto de métricas usadas para avaliar a qualidade de um mapa classificado por comparação com dados de referência. Incluem acurácia global, producer's accuracy, user's accuracy, erros de omissão, erros de comissão e métricas derivadas.

### [memsize](https://e-sensing.github.io/sitsbook/cl_rasterclassification.html)
Parâmetro do `sits` que controla a quantidade aproximada de memória, geralmente em gigabytes, reservada para processar blocos de dados. Ajustar esse valor ajuda a equilibrar desempenho e uso de recursos computacionais durante classificações raster.

### [Model training](https://e-sensing.github.io/sits/reference/index.html)
Processo de ajuste de um modelo a dados rotulados para que ele aprenda relações entre variáveis de entrada e classes. No `sits`, o treinamento usa amostras de séries temporais e algoritmos de machine learning ou deep learning.

### [multicores](https://e-sensing.github.io/sitsbook/annex_parallel.html)
Parâmetro do `sits` que define quantos núcleos de CPU serão usados no processamento paralelo. Ele ajuda a acelerar tarefas como extração de dados, classificação e pós-processamento, especialmente em cubos grandes ou fluxos computacionalmente intensivos.

## N

### [Non-regular data cube](https://e-sensing.github.io/sitsbook/dc_regularize.html)
Cubo de dados com imagens irregulares no espaço ou no tempo. Pode conter lacunas, diferentes coberturas, intervalos temporais desiguais ou cenas parcialmente disponíveis. No fluxo do `sits`, esse tipo de cubo pode ser regularizado antes da análise temporal.

## O

### [Object](https://e-sensing.github.io/sits/reference/index.html)
Na programação, é uma entidade estruturada que armazena dados e atributos relacionados. No contexto do `sits`, objetos podem representar amostras, cubos, modelos, resultados de classificação ou estruturas internas usadas pelas funções do pacote.

### [Object-Based Image Analysis (OBIA)](https://e-sensing.github.io/sitsbook/vec_obia.html)
Abordagem de sensoriamento remoto que agrupa pixels vizinhos em objetos ou segmentos com significado espacial. Em vez de classificar pixels isolados, a OBIA utiliza regiões homogêneas, permitindo incorporar forma, textura, vizinhança e estatísticas internas dos objetos.

### [Omission error](https://e-sensing.github.io/sitsbook/val_map.html)
Erro em que casos de referência de uma classe são omitidos dessa classe no mapa classificado. Está relacionado a falsos negativos e indica a proporção de elementos reais que o modelo deixou de mapear corretamente.

### [Outliers](https://e-sensing.github.io/sitsbook/cl_rasterclassification.html)
Observações, pixels ou amostras com comportamento muito diferente do padrão esperado. Em séries temporais, podem ocorrer por ruído, nuvens, erros de rotulagem ou eventos incomuns. A identificação de outliers ajuda no controle de qualidade de amostras e resultados.

### [Overall accuracy (OA)](https://e-sensing.github.io/sitsbook/val_map.html)
Proporção total de amostras ou unidades espaciais classificadas corretamente em relação ao total avaliado. É uma métrica geral de desempenho, mas pode mascarar problemas em classes minoritárias quando o dataset está desbalanceado.

### [Overfitting](https://e-sensing.github.io/sitsbook/cl_machinelearning.html)
Problema em que o modelo aprende excessivamente os detalhes dos dados de treinamento, incluindo ruídos e particularidades. Como resultado, apresenta bom desempenho no treinamento, mas pior desempenho em validação, teste ou dados novos.

## P

### [Parameter](https://e-sensing.github.io/sits/reference/index.html)
Valor configurável usado por uma função ou algoritmo para controlar seu comportamento. Em `sits`, parâmetros definem aspectos como entrada de dados, bandas, intervalo temporal, diretórios, quantidade de memória, número de núcleos e opções de processamento.

### [Path](https://e-sensing.github.io/sitsbook/dc_localcubes.html)
Endereço textual que indica onde um arquivo ou diretório está localizado no sistema. Em R e no `sits`, paths são usados para ler cubos locais, salvar resultados, acessar modelos e indicar pastas de entrada ou saída.

### [Performance](https://e-sensing.github.io/sitsbook/val_map.html)
Termo geral que descreve o quão bem um modelo ou mapa classificado atende aos critérios de avaliação. Pode ser medido por métricas como acurácia global, F1-score, precisão, recall, erros de omissão e comissão.

### [Pixel-based classification](https://e-sensing.github.io/sitsbook/cl_rasterclassification.html)
Abordagem de classificação em que cada pixel é tratado como unidade individual de análise. O modelo usa os valores espectrais e temporais daquele pixel para atribuir uma classe, sem considerar inicialmente objetos, regiões vizinhas ou limites espaciais mais amplos.

### [Precision](https://e-sensing.github.io/sitsbook/val_map.html)
Métrica que mede a proporção de predições positivas que estão corretas. Em classificação temática, alta precisão indica que os pixels ou objetos mapeados como uma classe realmente pertencem a essa classe segundo os dados de referência.

### [Probability cube](https://e-sensing.github.io/sitsbook/cl_rasterclassification.html)
Cubo raster produzido após a classificação, no qual cada classe possui uma camada de probabilidade ou escore. Ele representa o grau de confiança do modelo para cada classe em cada posição espacial e pode ser usado para gerar mapas temáticos e mapas de incerteza.

### [Producer's accuracy (PA)](https://e-sensing.github.io/sitsbook/val_map.html)
Métrica de acurácia por classe vista da perspectiva dos dados de referência. Indica a proporção de elementos reais de uma classe que foram corretamente classificados, sendo diretamente relacionada ao erro de omissão.

## Q

Nenhum termo cadastrado até o momento.

## R

### [R language](https://github.com/e-sensing/sits?tab=readme-ov-file)
Linguagem de programação amplamente usada em estatística, ciência de dados, visualização e análise espacial. O pacote `sits` é desenvolvido principalmente em R, permitindo construir fluxos de trabalho para séries temporais de imagens de satélite.

### [Random Forest](https://e-sensing.github.io/sitsbook/cl_machinelearning.html)
Algoritmo de aprendizado de máquina que combina várias árvores de decisão. Cada árvore é treinada com subconjuntos dos dados e variáveis, e a predição final é obtida por votação ou média. É muito usado em classificação de imagens e séries temporais.

### [Recall](https://e-sensing.github.io/sitsbook/val_map.html)
Métrica que mede a proporção de casos reais de uma classe que foram corretamente identificados pelo modelo. Em mapas de classificação, recall baixo indica que muitos elementos da classe foram deixados de fora da predição.

### [Regular data cube](https://e-sensing.github.io/sitsbook/dc_regularize.html)
Cubo de dados em que as imagens cobrem a área selecionada de forma consistente, com mesma grade espacial, resolução, bandas e intervalos temporais regulares. Essa estrutura facilita a extração de séries temporais comparáveis e a aplicação de modelos de classificação.

### [RStudio](https://e-sensing.github.io/sitsbook/)
Ambiente de desenvolvimento integrado usado para escrever, executar, depurar e organizar códigos em R. É bastante utilizado com o pacote `sits` por facilitar a execução de scripts, instalação de pacotes, visualização de objetos e gerenciamento de projetos.

## S

### [Sample balancing](https://e-sensing.github.io/sitsbook/ts_balance.html)
Estratégia de pré-processamento usada para reduzir desequilíbrio entre classes no conjunto de treinamento. Pode envolver subamostragem, sobreamostragem ou seleção controlada de amostras, ajudando o modelo a não favorecer apenas classes majoritárias.

### [Sample locations](https://e-sensing.github.io/sitsbook/intro_quicktour.html)
Posições geográficas usadas para relacionar informações de referência com séries temporais de imagens. No `sits`, essas amostras geralmente são armazenadas com longitude, latitude, data inicial, data final e rótulo, permitindo extrair valores espectrais e temporais de um cubo de dados para treinamento ou validação.

### [Satellite Image Time Series (SITS)](https://e-sensing.github.io/sitsbook/)
Sequência de observações de satélite obtidas sobre a mesma localização em diferentes datas. Em análises com `sits`, uma SITS armazena bandas espectrais e índices ao longo do tempo, permitindo descrever dinâmicas da cobertura da terra, como vegetação, inundação, ciclos agrícolas ou desmatamento.

### [Segmentation](https://e-sensing.github.io/sitsbook/vec_obia.html)
Processo de agrupar pixels vizinhos em regiões ou objetos espacialmente coerentes. Em fluxos baseados em objetos, a segmentação define unidades espaciais que podem receber estatísticas, séries temporais resumidas ou classes temáticas.

### [Self-organized maps (SOM)](https://e-sensing.github.io/sitsbook/ts_som.html)
Método neural não supervisionado que projeta dados de alta dimensão em uma grade bidimensional preservando relações de vizinhança. No `sits`, SOM pode apoiar o controle de qualidade de amostras e a identificação de padrões ruidosos ou confusos.

### [Simple non-iterative clustering (SNIC)](https://e-sensing.github.io/sits/reference/index.html)
Algoritmo de segmentação que agrupa pixels em superpixels compactos e espectralmente semelhantes. No `sits`, o SNIC pode ser usado por meio da função `sits_snic()` para apoiar fluxos de análise orientada a objetos.

### [sits package](https://github.com/e-sensing/sits?tab=readme-ov-file)
Pacote de código aberto em R, também com interface em Python, voltado à análise de séries temporais de imagens de satélite e cubos de dados de Observação da Terra. O `sits` apoia criação de cubos, extração de amostras, treinamento de modelos, classificação, pós-processamento, incerteza e validação.

### [Smoothed probability cube](https://e-sensing.github.io/sitsbook/cl_smoothing.html)
Cubo de probabilidades após aplicação de suavização espacial. Essa etapa reduz ruídos locais, pixels isolados e variações abruptas entre vizinhos, tornando o resultado mais coerente espacialmente antes da geração do mapa temático final.

### [Source](https://e-sensing.github.io/sitsbook/intro_quicktour.html)
Origem ou provedor dos dados utilizados em uma coleção ou cubo. No `sits`, a source identifica de onde vêm as imagens, como serviços de cubos de dados, coleções locais ou provedores específicos de imagens de satélite.

### [Spatial smoothing](https://e-sensing.github.io/sitsbook/cl_smoothing.html)
Etapa de pós-processamento que usa informação de vizinhança para reduzir ruídos no mapa classificado ou no cubo de probabilidades. O objetivo é tornar o resultado mais coerente espacialmente, diminuindo pixels isolados e variações locais improváveis.

### [start_date and end_date](https://e-sensing.github.io/sitsbook/intro_quicktour.html)
Campos de data que definem o intervalo temporal associado a uma amostra, cubo ou evento. No `sits`, esses campos ajudam a delimitar o período de extração da série temporal e a relacionar observações de satélite com eventos ou classes de referência.

## T

### [Temporal Attention Encoder (TAE)](https://e-sensing.github.io/sitsbook/cl_machinelearning.html)
Arquitetura de deep learning que usa mecanismos de atenção para codificar informações temporais. Em séries temporais de satélite, o TAE permite que o modelo atribua maior peso a datas mais importantes para diferenciar classes.

### [Temporal Convolutional Neural Network (TempCNN)](https://e-sensing.github.io/sitsbook/cl_machinelearning.html)
Modelo de deep learning baseado em convoluções unidimensionais aplicadas ao eixo temporal. Em séries temporais de satélite, a TempCNN aprende padrões sequenciais em bandas e índices para classificar pixels, amostras ou objetos.

### [Temporal patterns](https://e-sensing.github.io/sitsbook/cl_rasterclassification.html)
Comportamentos característicos das bandas ou índices espectrais ao longo do tempo. Esses padrões ajudam a diferenciar classes, pois vegetação, água, solo exposto, agricultura e desmatamento tendem a apresentar trajetórias temporais distintas.

### [Thematic map](https://e-sensing.github.io/sitsbook/cl_rasterclassification.html)
Mapa em que cada unidade espacial recebe uma classe temática, como floresta, água, agricultura ou desmatamento. No `sits`, mapas temáticos geralmente são gerados a partir de cubos de probabilidade, selecionando a classe com maior probabilidade para cada pixel ou objeto.

### [Tibble](https://e-sensing.github.io/sitsbook/ts_basics.html)
Formato moderno de tabela usado no ecossistema tidyverse do R. O `sits` utiliza tibbles para representar amostras, séries temporais e metadados, combinando colunas comuns com colunas complexas que podem armazenar listas ou séries temporais.

### [Tiles](https://e-sensing.github.io/sitsbook/dc_ardcollections.html)
Partições espaciais usadas para organizar grandes coleções de imagens de satélite. Um tile cobre uma área específica da grade e permite dividir o processamento em blocos menores, facilitando armazenamento, consulta e classificação de grandes regiões.

### [Time instances](https://e-sensing.github.io/sitsbook/intro_quicktour.html)
Datas de referência disponíveis em um cubo de dados ou série temporal. Cada instância temporal representa uma observação, composição ou período específico, permitindo acompanhar mudanças na superfície terrestre ao longo do tempo.

### [Time-first, space-later](https://e-sensing.github.io/sitsbook/cl_rasterclassification.html)
Estratégia de processamento em que o comportamento temporal é analisado antes do contexto espacial. No `sits`, essa abordagem trata a série temporal de cada pixel ou amostra como elemento central da classificação e, depois, aplica etapas espaciais, como suavização ou segmentação, quando necessário.

### [Timeline](https://e-sensing.github.io/sitsbook/intro_quicktour.html)
Conjunto ordenado de datas associado a amostras, cubos ou modelos. No `sits`, a timeline indica quais instâncias temporais estão disponíveis e ajuda a verificar a compatibilidade temporal entre dados de treinamento, cubos e modelos.

### [Training samples](https://e-sensing.github.io/sitsbook/intro_quicktour.html)
Amostras rotuladas usadas para ajustar um modelo de classificação. Em `sits`, as amostras de treinamento geralmente contêm coordenadas, intervalo temporal, classe e valores extraídos das bandas ou índices de um cubo de dados.

### [Transformers](https://e-sensing.github.io/sitsbook/cl_machinelearning.html)
Arquiteturas de redes neurais baseadas em mecanismos de atenção. Em séries temporais, Transformers podem aprender relações entre diferentes datas e variáveis, sendo úteis para capturar dependências temporais complexas em dados de satélite.

### [True negative (TN)](https://e-sensing.github.io/sitsbook/val_map.html)
Caso corretamente previsto como não pertencente à classe de interesse. Os verdadeiros negativos representam acertos fora da classe avaliada e são usados em análises binárias e métricas derivadas da matriz de confusão.

### [True positive (TP)](https://e-sensing.github.io/sitsbook/val_map.html)
Caso corretamente previsto como pertencente à classe de interesse. Os verdadeiros positivos representam acertos do modelo para uma determinada classe e são usados no cálculo de métricas como precision, recall e F1-score.

## U

### [Uncertainty map](https://e-sensing.github.io/sitsbook/cl_uncertainty.html)
Mapa que representa o grau de incerteza da classificação em cada posição espacial. Normalmente é derivado das probabilidades das classes e ajuda a identificar áreas onde o modelo tem baixa confiança ou onde novas amostras podem ser úteis.

### [Underfitting](https://e-sensing.github.io/sitsbook/cl_machinelearning.html)
Problema em que o modelo é simples demais, mal configurado ou insuficientemente treinado para capturar os padrões relevantes dos dados. Nesse caso, o desempenho tende a ser baixo tanto no treinamento quanto em dados de validação ou teste.

### [User's accuracy (UA)](https://e-sensing.github.io/sitsbook/val_map.html)
Métrica de acurácia por classe vista da perspectiva do usuário do mapa. Indica a proporção dos elementos mapeados como uma classe que realmente pertencem a essa classe, sendo relacionada ao erro de comissão.

## V

### [Validation samples](https://e-sensing.github.io/sitsbook/val_map.html)
Amostras rotuladas independentes ou separadas do treinamento, usadas para avaliar o desempenho do modelo. Elas permitem verificar se a classificação generaliza para dados não usados no ajuste e são base para métricas como acurácia, precisão, recall e F1-score.

## W

### [Workflow](https://github.com/e-sensing/sits?tab=readme-ov-file)
Sequência organizada de etapas usada para realizar uma análise. Em `sits`, um workflow pode incluir preparação de cubos, extração de amostras, treinamento do modelo, classificação, suavização, estimativa de incerteza e validação do mapa produzido.

## X

Nenhum termo cadastrado até o momento.

## Y

Nenhum termo cadastrado até o momento.

## Z

Nenhum termo cadastrado até o momento.
