# OneMedia

[English](#English)    
&emsp;[OneMedia](#OneMedia)  
&emsp;[Required Programms](#required-programms)  
&emsp;[Installation](#installation)  
&emsp;[Running](#running)  
&emsp;[You Should Know](#you-should-know)  

[Español](#Español)  
&emsp;[OneMedia](#OneMedia-1)  
&emsp;[Programas Necesarios](#programas-necesarios)  
&emsp;[Instalación](#instalación)   
&emsp;[Ejecución](#ejecución)    
&emsp;[Tener en cuenta](#tener-en-cuenta)  

# English

## OneMedia

OneMedia is a web application that displays information about films and the users can consult them, create list to save them and vote. This project requires a serv3er and you can find it in [OneMediaBack](https://github.com/iDelTer/OneMediaBack).

## Required Programms

[Git](https://git-scm.com/downloads)  
[Node](https://nodejs.org/en)  
[VSCode](https://code.visualstudio.com/) Or any other IDE

## Installation

To install all the packages required you have to run the next command in the base folder of the proyect

```
npm install
```

## Running

If you want to run the application as in develope mode

```
npm run dev
```

In other hand, if you want the files for deployment, then run

```
npm run build
```

Take all the files of the folder build/dist.

## You should know
You may change the API endpoints depending if you are not running the client in the same server or enviroment as the back. This can find this file in `src/utils/endpoints.js`.

# Español

## OneMedia

OneMedia es una aplicación web donde se almacena información sobre películas y los usuarios pueden consultarlas, crear listas donde guardarlas y votarlas. Este proyecto requiere un cliente y puede encontrar en [OneMediaBack](https://github.com/iDelTer/OneMediaBack).

## Programas Necesarios

[Git](https://git-scm.com/downloads)  
[Node](https://nodejs.org/en)  
[VSCode](https://code.visualstudio.com/) Or any other IDE

## Instalación

Para instalar todos los paquetes necesarios debes ejecutar el siguiente comando en la carpeta base del proyecto

```
npm install
```

## Ejecución

Si quieres ejecutar la aplicación en modo desarrollo

```
npm run dev
```

Por otro lado, si quieres los archivos para el despliegue

```
npm run build
```

coge todos los archivos de la carpeta build/dist.

## Tener en cuenta
Puede que tengas que cambiar los endpoints de la API si el cliente no está en el mismo servidor o entorno que el back. Puedes encontrar este archvio en `src/utils/endpoints.js`.
