# Glossary of Remote Sensing and Machine Learning

This project provides a glossary of key terms to support participants in Mentoria IaC.

- Terms are organized alphabetically and may appear in Portuguese, English, or localized/adapted forms when they are common in technical practice.
- The meaning of each term is written in English.
- Each term includes a reference link and, when relevant, a related article from the Mentoria IaC blog may also be added to the entry.

## Choose a Letter of the Alphabet

[A](#a) | [B](#b) | [C](#c) | [D](#d) | [E](#e) | [F](#f) | [G](#g) | [H](#h) | [I](#i) | [J](#j) | [K](#k) | [L](#l) | [M](#m) | [N](#n) | [O](#o) | [P](#p) | [Q](#q) | [R](#r) | [S](#s) | [T](#t) | [U](#u) | [V](#v) | [W](#w) | [X](#x) | [Y](#y) | [Z](#z) |

## A

### [Active learning](https://e-sensing.github.io/sitsbook/cl_uncertainty.html)
A learning strategy that selects the most informative samples or areas for additional labeling. In remote sensing, it can prioritize regions with high classification uncertainty, reducing the effort required to collect reference samples while improving the model iteratively.

### [Analysis-Ready Data (ARD)](https://e-sensing.github.io/sitsbook/dc_ardcollections.html)
Satellite data previously processed for direct analytical use. ARD products usually include radiometric, geometric, and atmospheric corrections, as well as standardized organization. They reduce manual preprocessing steps and support reproducible analyses in remote sensing workflows.

### [Application Programming Interface (API)](https://e-sensing.github.io/sits/reference/index.html)
A structured set of functions, rules, and inputs that allows users to interact with software. In `sits`, the API corresponds to the functions used to create data cubes, extract data, train models, classify images, validate results, and perform other steps in the analysis workflow.

### [ARD image collections](https://e-sensing.github.io/sitsbook/dc_ardcollections.html)
Satellite image collections organized as Analysis-Ready Data. They are usually described by provider, sensor, product, resolution, grid system, and temporal interval, enabling consistent access to images prepared for analysis in Earth observation data cubes.

## B

### [Bounding box](https://e-sensing.github.io/sitsbook/intro_quicktour.html)
A rectangle that defines an area of interest using minimum and maximum coordinates, such as longitude and latitude. It is used to specify the spatial extent for data queries, cube creation, data extraction, processing, or visualization.

### [Brazil Data Cube (BDC)](https://e-sensing.github.io/sitsbook/dc_ardcollections.html)
A Brazilian initiative that provides Earth observation image collections as data cubes and Analysis-Ready Data products. BDC facilitates access to standardized satellite image time series for environmental monitoring and remote sensing applications.

## C

### [Classification model](https://e-sensing.github.io/sits/reference/index.html)
The result of training a machine learning algorithm with labeled data. A classification model stores learned relationships between input features and target classes and can be applied to new samples, pixels, objects, or data cubes to generate predictions.

### [Commission error](https://e-sensing.github.io/sitsbook/val_map.html)
An error in which cases are included in a mapped class but belong to another class in the reference data. It is related to false positives and indicates excessive incorrect inclusion in a given class.

### [Confusion matrix](https://e-sensing.github.io/sitsbook/val_map.html)
A table that compares classes predicted by a model with reference classes. Values on the diagonal represent correct classifications, while values outside the diagonal indicate confusion between classes. It is the basis for several accuracy metrics.

### [Cross-validation](https://e-sensing.github.io/sitsbook/val_kfold.html)
An evaluation technique in which data are repeatedly split into training and validation subsets. It provides a more robust estimate of model generalization capacity than a single data split, especially when the available sample size is limited.

## D

### [Dataset](https://e-sensing.github.io/sitsbook/ts_basics.html)
A structured collection of data used for analysis, training, validation, or testing. In machine learning and remote sensing, a dataset may contain samples, time series, labels, spectral bands, indices, metadata, and experimental partitions.

### [Deep learning](https://e-sensing.github.io/sitsbook/cl_machinelearning.html)
A subfield of machine learning based on neural networks with multiple processing layers. In satellite image time series, deep learning models can learn complex temporal and spectral patterns, especially when many samples and observation dates are available.

### [Directory](https://e-sensing.github.io/sitsbook/dc_localcubes.html)
A storage location in a file system, also called a folder. In `sits` workflows, directories are used to organize local cubes, images, intermediate results, trained models, classified maps, validation files, and other processing outputs.

## E

### [Earth observation data cube (EO data cube)](https://e-sensing.github.io/sitsbook/intro_quicktour.html)
A structure that organizes Earth observation images by space, time, bands, and metadata. A data cube facilitates queries, time series extraction, multitemporal analysis, and classification by storing compatible images in a standardized representation.

### [Event](https://e-sensing.github.io/sitsbook/cl_rasterclassification.html)
A relevant occurrence of land use or land cover change at a specific location and time period. In satellite time series, events may include deforestation, fire, harvest, flooding, vegetation recovery, or other landscape transformations.

### [Event-based sample](https://e-sensing.github.io/sitsbook/ts_basics.html)
A sample defined around the occurrence of a specific event and its temporal window. This type of sample helps relate changes observed in a satellite image time series to real processes of landscape transformation.

## F

### [F1-score](https://e-sensing.github.io/sitsbook/val_map.html)
A metric that combines precision and recall into a single value using the harmonic mean. It is useful when classes are imbalanced or when the goal is to evaluate both inclusion and omission errors for a class.

### [False negative (FN)](https://e-sensing.github.io/sitsbook/val_map.html)
A case that belongs to a class in the reference data but was not predicted as that class by the model. In thematic maps, false negatives indicate real areas of the class that were omitted from the classification.

### [False positive (FP)](https://e-sensing.github.io/sitsbook/val_map.html)
A case predicted as belonging to a class but assigned to another class in the reference data. In thematic maps, false positives represent areas incorrectly included in a mapped class.

## G

### [Good fitting](https://e-sensing.github.io/sitsbook/cl_machinelearning.html)
A desirable condition in which a model captures relevant patterns without memorizing noise from the training data. A well-fitted model shows consistent performance across training, validation, and test data, indicating good generalization capacity.

### [Ground truth values](https://e-sensing.github.io/sitsbook/intro_quicktour.html)
Reference information considered to represent the correct class or condition of a sample or area. In supervised classification, ground truth values are used to train models and evaluate prediction quality through metrics and confusion matrices.

## H

### [Hyperparameter](https://e-sensing.github.io/sitsbook/cl_machinelearning.html)
A model configuration defined before or during training but not learned directly from the data. Examples include the number of trees, learning rate, maximum depth, batch size, number of epochs, and neural network architecture.

## I

### [Imbalanced dataset](https://e-sensing.github.io/sitsbook/ts_balance.html)
A dataset in which some classes have many more samples than others. This imbalance can cause the model to favor majority classes and perform poorly on rare classes, making balancing, weighting, or sampling strategies important.

## J

No terms registered yet.

## K

### [K-fold cross-validation](https://e-sensing.github.io/sitsbook/val_kfold.html)
A cross-validation procedure that divides the sample set into k approximately equal parts. The model is trained k times, each time using one part for validation and the remaining parts for training, rotating the validation subset at each iteration.

## L

### [Label](https://e-sensing.github.io/sitsbook/intro_quicktour.html)
The class name associated with a sample or prediction. In supervised classification, the label represents either the reference category used for training or the class assigned by the model, such as forest, water, agriculture, or deforestation.

### [Library](https://github.com/e-sensing/sits?tab=readme-ov-file)
A reusable collection of functions, data structures, and documentation within a programming environment. In R, a library is loaded to make packages such as `sits` available, allowing users to apply their functions in analytical workflows.

### [Lightweight Temporal Attention Encoder (LTAE)](https://e-sensing.github.io/sitsbook/cl_machinelearning.html)
A deep learning architecture that uses temporal attention in a lighter encoder design. It aims to identify the most relevant dates or temporal patterns for classification while reducing computational cost compared with more complex architectures.

### [Local cube](https://e-sensing.github.io/sitsbook/dc_localcubes.html)
An Earth observation data cube stored on the user's computer or in a locally accessible file system. It allows analyses to be performed without depending on remote services during the entire processing workflow.

## M

### [Machine learning](https://e-sensing.github.io/sitsbook/cl_machinelearning.html)
A field of computing in which algorithms learn patterns from data and use them to make predictions, classifications, or groupings. In remote sensing, machine learning links spectral, temporal, and spatial values to land use and land cover classes.

### [Machine learning algorithm](https://e-sensing.github.io/sitsbook/cl_machinelearning.html)
A computational method used to learn relationships between input variables and output classes or values. Examples include Random Forest, XGBoost, and neural networks. The algorithm defines how patterns are learned during training.

### [Map accuracy measures](https://e-sensing.github.io/sitsbook/val_map.html)
A set of metrics used to evaluate the quality of a classified map by comparing it with reference data. They include overall accuracy, producer's accuracy, user's accuracy, omission errors, commission errors, and derived metrics.

### [memsize](https://e-sensing.github.io/sitsbook/cl_rasterclassification.html)
A `sits` parameter that controls the approximate amount of memory, usually in gigabytes, reserved for processing data blocks. Adjusting this value helps balance performance and computational resource usage during raster classification.

### [Model training](https://e-sensing.github.io/sits/reference/index.html)
The process of fitting a model to labeled data so that it learns relationships between input variables and target classes. In `sits`, training uses satellite image time series samples and machine learning or deep learning algorithms.

### [multicores](https://e-sensing.github.io/sitsbook/annex_parallel.html)
A `sits` parameter that defines how many CPU cores will be used in parallel processing. It helps accelerate tasks such as data extraction, classification, and post-processing, especially when working with large data cubes or computationally intensive workflows.

## N

### [Non-regular data cube](https://e-sensing.github.io/sitsbook/dc_regularize.html)
A data cube with images that are irregular in space or time. It may contain gaps, different coverages, uneven temporal intervals, or partially available scenes. In `sits`, this type of cube can be regularized before temporal analysis.

## O

### [Object](https://e-sensing.github.io/sits/reference/index.html)
In programming, an object is a structured entity that stores related data and attributes. In `sits`, objects may represent samples, data cubes, models, classification results, or internal structures used by package functions.

### [Object-Based Image Analysis (OBIA)](https://e-sensing.github.io/sitsbook/vec_obia.html)
A remote sensing approach that groups neighboring pixels into spatially meaningful objects or segments. Instead of classifying isolated pixels, OBIA uses homogeneous regions, allowing shape, texture, neighborhood, and internal statistics to be included in the analysis.

### [Omission error](https://e-sensing.github.io/sitsbook/val_map.html)
An error in which reference cases of a class are omitted from that class in the classified map. It is related to false negatives and indicates the proportion of real elements that the model failed to map correctly.

### [Outliers](https://e-sensing.github.io/sitsbook/cl_rasterclassification.html)
Observations, pixels, or samples that behave very differently from the expected pattern. In time series, they may result from noise, clouds, labeling errors, or unusual events. Identifying outliers helps improve sample and output quality control.

### [Overall accuracy (OA)](https://e-sensing.github.io/sitsbook/val_map.html)
The total proportion of samples or spatial units classified correctly relative to the total evaluated. It is a general performance metric, but it can hide problems in minority classes when the dataset is imbalanced.

### [Overfitting](https://e-sensing.github.io/sitsbook/cl_machinelearning.html)
A problem in which a model learns the details of the training data too closely, including noise and specific peculiarities. As a result, it performs well on training data but worse on validation, test, or new data.

## P

### [Parameter](https://e-sensing.github.io/sits/reference/index.html)
A configurable value used by a function or algorithm to control its behavior. In `sits`, parameters define aspects such as input data, bands, temporal interval, directories, memory allocation, number of CPU cores, and processing options.

### [Path](https://e-sensing.github.io/sitsbook/dc_localcubes.html)
A textual address that indicates where a file or directory is located in the file system. In R and `sits`, paths are used to read local cubes, save results, access models, and define input or output folders.

### [Performance](https://e-sensing.github.io/sitsbook/val_map.html)
A general term that describes how well a model or classified map meets evaluation criteria. It can be measured with metrics such as overall accuracy, F1-score, precision, recall, omission error, and commission error.

### [Pixel-based classification](https://e-sensing.github.io/sitsbook/cl_rasterclassification.html)
A classification approach in which each pixel is treated as an individual analysis unit. The model uses the spectral and temporal values of that pixel to assign a class, without initially considering objects, neighboring regions, or broader spatial boundaries.

### [Precision](https://e-sensing.github.io/sitsbook/val_map.html)
A metric that measures the proportion of positive predictions that are correct. In thematic classification, high precision means that pixels or objects mapped as a given class actually belong to that class according to the reference data.

### [Probability cube](https://e-sensing.github.io/sitsbook/cl_rasterclassification.html)
A raster cube produced after classification in which each class has a probability or score layer. It represents the model confidence for each class at each spatial position and can be used to generate thematic maps and uncertainty maps.

### [Producer's accuracy (PA)](https://e-sensing.github.io/sitsbook/val_map.html)
A class-level accuracy metric viewed from the perspective of the reference data. It indicates the proportion of real elements of a class that were correctly classified and is directly related to omission error.

## Q

No terms registered yet.

## R

### [R language](https://github.com/e-sensing/sits?tab=readme-ov-file)
A programming language widely used in statistics, data science, visualization, and spatial analysis. The `sits` package is mainly developed in R, enabling workflows for satellite image time series and Earth observation data cubes.

### [Random Forest](https://e-sensing.github.io/sitsbook/cl_machinelearning.html)
A machine learning algorithm that combines multiple decision trees. Each tree is trained with subsets of the data and variables, and the final prediction is obtained by voting or averaging. It is widely used for image and time series classification.

### [Recall](https://e-sensing.github.io/sitsbook/val_map.html)
A metric that measures the proportion of real cases of a class correctly identified by the model. In classification maps, low recall indicates that many elements of the class were left out of the prediction.

### [Regular data cube](https://e-sensing.github.io/sitsbook/dc_regularize.html)
A data cube in which images cover the selected area consistently, using the same spatial grid, resolution, bands, and regular temporal intervals. This structure facilitates the extraction of comparable time series and the application of classification models.

### [RStudio](https://e-sensing.github.io/sitsbook/)
An integrated development environment used to write, run, debug, and organize R code. It is commonly used with the `sits` package because it facilitates script execution, package installation, object visualization, and project management.

## S

### [Sample balancing](https://e-sensing.github.io/sitsbook/ts_balance.html)
A preprocessing strategy used to reduce class imbalance in the training set. It may involve undersampling, oversampling, or controlled sample selection, helping the model avoid favoring only the majority classes.

### [Sample locations](https://e-sensing.github.io/sitsbook/intro_quicktour.html)
Geographic positions used to connect reference information with satellite image time series. In `sits`, these samples are usually stored with longitude, latitude, start date, end date, and label, enabling the extraction of spectral and temporal values from a data cube for training or validation.

### [Satellite Image Time Series (SITS)](https://e-sensing.github.io/sitsbook/)
A sequence of satellite observations acquired over the same location at different dates. In analyses with `sits`, a SITS stores spectral bands and indices through time, allowing users to describe land cover dynamics such as vegetation growth, flooding, agricultural cycles, or deforestation.

### [Segmentation](https://e-sensing.github.io/sitsbook/vec_obia.html)
The process of grouping neighboring pixels into spatially coherent regions or objects. In object-based workflows, segmentation defines spatial units that can receive statistics, summarized time series, or thematic classes.

### [Self-organized maps (SOM)](https://e-sensing.github.io/sitsbook/ts_som.html)
An unsupervised neural method that projects high-dimensional data onto a two-dimensional grid while preserving neighborhood relationships. In `sits`, SOM can support sample quality control and the identification of noisy, inconsistent, or confusing temporal patterns.

### [Simple non-iterative clustering (SNIC)](https://e-sensing.github.io/sits/reference/index.html)
A segmentation algorithm that groups pixels into compact and spectrally similar superpixels. In `sits`, SNIC can be used through the `sits_snic()` function to support object-based image analysis workflows.

### [sits package](https://github.com/e-sensing/sits?tab=readme-ov-file)
An open-source R package, also with a Python interface, designed for the analysis of satellite image time series and Earth observation data cubes. `sits` supports cube creation, sample extraction, model training, classification, post-processing, uncertainty estimation, and validation.

### [Smoothed probability cube](https://e-sensing.github.io/sitsbook/cl_smoothing.html)
A probability cube after spatial smoothing has been applied. This step reduces local noise, isolated pixels, and abrupt variation among neighboring pixels, making the result more spatially coherent before the final thematic map is generated.

### [Source](https://e-sensing.github.io/sitsbook/intro_quicktour.html)
The origin or provider of the data used in a collection or cube. In `sits`, the source identifies where images come from, such as data cube services, local collections, or specific satellite image providers.

### [Spatial smoothing](https://e-sensing.github.io/sitsbook/cl_smoothing.html)
A post-processing step that uses neighborhood information to reduce noise in the classified map or probability cube. Its goal is to make the result more spatially coherent by reducing isolated pixels and unlikely local variations.

### [start_date and end_date](https://e-sensing.github.io/sitsbook/intro_quicktour.html)
Date fields that define the temporal interval associated with a sample, cube, or event. In `sits`, these fields help delimit the time period for time series extraction and connect satellite observations with reference classes or events.

## T

### [Temporal Attention Encoder (TAE)](https://e-sensing.github.io/sitsbook/cl_machinelearning.html)
A deep learning architecture that uses attention mechanisms to encode temporal information. In satellite time series, TAE allows the model to assign greater weight to the dates that are most important for distinguishing classes.

### [Temporal Convolutional Neural Network (TempCNN)](https://e-sensing.github.io/sitsbook/cl_machinelearning.html)
A deep learning model based on one-dimensional convolutions applied along the temporal axis. In satellite time series, TempCNN learns sequential patterns in bands and indices to classify pixels, samples, or objects.

### [Temporal patterns](https://e-sensing.github.io/sitsbook/cl_rasterclassification.html)
Characteristic behaviors of spectral bands or indices through time. These patterns help distinguish classes because vegetation, water, bare soil, agriculture, and deforestation tend to show different temporal trajectories.

### [Thematic map](https://e-sensing.github.io/sitsbook/cl_rasterclassification.html)
A map in which each spatial unit receives a thematic class, such as forest, water, agriculture, or deforestation. In `sits`, thematic maps are usually generated from probability cubes by selecting the class with the highest probability for each pixel or object.

### [Tibble](https://e-sensing.github.io/sitsbook/ts_basics.html)
A modern table format used in the R tidyverse ecosystem. `sits` uses tibbles to represent samples, time series, and metadata, combining regular columns with complex columns that can store lists or time series.

### [Tiles](https://e-sensing.github.io/sitsbook/dc_ardcollections.html)
Spatial partitions used to organize large satellite image collections. A tile covers a specific area of a grid and allows processing to be divided into smaller blocks, facilitating storage, querying, and classification of large regions.

### [Time instances](https://e-sensing.github.io/sitsbook/intro_quicktour.html)
Reference dates available in a data cube or time series. Each time instance represents a specific observation, composite, or period, allowing changes on the Earth's surface to be monitored through time.

### [Time-first, space-later](https://e-sensing.github.io/sitsbook/cl_rasterclassification.html)
A processing strategy in which temporal behavior is analyzed before spatial context. In `sits`, this approach treats the time series of each pixel or sample as the central element of classification and later applies spatial steps, such as smoothing or segmentation, when needed.

### [Timeline](https://e-sensing.github.io/sitsbook/intro_quicktour.html)
An ordered set of dates associated with samples, cubes, or models. In `sits`, the timeline indicates which temporal instances are available and helps verify temporal compatibility among training data, data cubes, and models.

### [Training samples](https://e-sensing.github.io/sitsbook/intro_quicktour.html)
Labeled samples used to fit a classification model. In `sits`, training samples usually contain coordinates, temporal interval, class label, and values extracted from the bands or indices of a data cube.

### [Transformers](https://e-sensing.github.io/sitsbook/cl_machinelearning.html)
Neural network architectures based on attention mechanisms. In time series, Transformers can learn relationships among different dates and variables, making them useful for capturing complex temporal dependencies in satellite data.

### [True negative (TN)](https://e-sensing.github.io/sitsbook/val_map.html)
A case correctly predicted as not belonging to the class of interest. True negatives represent correct decisions outside the evaluated class and are used in binary analyses and metrics derived from the confusion matrix.

### [True positive (TP)](https://e-sensing.github.io/sitsbook/val_map.html)
A case correctly predicted as belonging to the class of interest. True positives represent model hits for a given class and are used to calculate metrics such as precision, recall, and F1-score.

## U

### [Uncertainty map](https://e-sensing.github.io/sitsbook/cl_uncertainty.html)
A map that represents the degree of classification uncertainty at each spatial position. It is usually derived from class probabilities and helps identify areas where the model has low confidence or where new samples may be useful.

### [Underfitting](https://e-sensing.github.io/sitsbook/cl_machinelearning.html)
A problem in which a model is too simple, poorly configured, or insufficiently trained to capture relevant data patterns. In this case, performance tends to be low on both training data and validation or test data.

### [User's accuracy (UA)](https://e-sensing.github.io/sitsbook/val_map.html)
A class-level accuracy metric viewed from the perspective of the map user. It indicates the proportion of elements mapped as a class that truly belong to that class and is related to commission error.

## V

### [Validation samples](https://e-sensing.github.io/sitsbook/val_map.html)
Labeled samples that are independent from or separated from the training set and used to evaluate model performance. They help verify whether the classification generalizes to data not used during fitting and support metrics such as accuracy, precision, recall, and F1-score.

## W

### [Workflow](https://github.com/e-sensing/sits?tab=readme-ov-file)
An organized sequence of steps used to perform an analysis. In `sits`, a workflow may include cube preparation, sample extraction, model training, classification, smoothing, uncertainty estimation, and validation of the produced map.

## X

No terms registered yet.

## Y

No terms registered yet.

## Z

No terms registered yet.
