# Metrocuadrado Test

Proyecto prueba de conocimientos para optar a la posicón Front End developer.

Web App publicada en https://metrocuadrado4.herokuapp.com/

## Pruebe la aplicación en su entorno local:

### Acceso rápido
#### yarn
`git clone https://github.com/du-hernandez/metrocuadrado-test.git && cd metrocuadrado-test && yarn install && yarn start`
#### npm
`git clone https://github.com/du-hernandez/metrocuadrado-test.git && cd metrocuadrado-test && npm install && npm start`

### Acceso detallado

`git clone https://github.com/du-hernandez/metrocuadrado-test.git`

`cd metrocuadrado-test`

`yarn install`
o
`npm install`

`yarn start`
o
`npm start`


## Arquitectura de la aplicación

En línea con los principios de Separación de Preocupaciones (SoC) y SOLID, la estructura de carpetas fue definida como sigue:

- ```src```

    - ```assets```
    Almacena activos como imágenes, fuentes de texto, etc.
    
    - ```common```
    Precisiones comunes a todo el proyecto
    	- ```config```

    		- ```Api```
    		Establece la configuración necesaria para consumir recursos externos, por ejemplo, API Rest. (Singleton design pattern)
    		
    		- ```Environment```
    		  Integra y hace alcanzables las variables de entorno definidas en el archivo .env.
    		
    		- ```Router```
    		  Define la configuración para la gestión de rutas públicas y privadas
    		
    	- ```constants```
    	- ```layouts```
    	- ```utils```
    	  Define utilidades especiales alcanzables desde cualquier ámbito de la aplicaión
    
    - ```components```
    Agrupa todos los componentes reutilizables
    	
    - ```router```
      Mapea todas la rutas de la aplicación. Precisa rutas públicas y privadas
    
    - ```sass```
      Agrupa todos los archivos .scss de la aplicación. Define un árbol de directorios que se corresponse con el origen del archivo
    
    - ```scenes```
      Agrupa todas las visuales de la aplicación
    
    - ```services```
      Precisa las utilidades con las que se comunicará con recursos externos a la aplicación
    	- ```common```
    		- ```loading```
		  Responsable de vigilar el progreso de respuesta de los recursos externos. Los hace visibles a la UI
    		- ```error```
		  Registra los errores al consumir recursos externos y los hace visibles a la UI
    	- ```providers```
		  Punto de negociación entre la aplicación y los recursos externos (Adapter design pattern)
    	- ```...```

    - ```store```
      Agrupa el estado global de la aplicación, entre ellos, la respuesta y le progreso de consumir recursos externos o el avance de un proceso que lleva el usuario, etc.
      


## Precisiones

### Patrones de diseño abordados

	- Singleton design patter
	Tiene lugar en la configuración del API. Allí se hace uso de axios, se configura y retorna una instancia (axios instance) para ser utilizada por los servicios
	
	- Adapter design pattern
	Utilizado en la negociación entre la API y la aplicaión, se define en el directorio src/services/providers
	
## Destacado

- Con el principio SoC como directriz, se crearon servicios especiales para la gestión del estado de carga y el registro de errores de la aplicación. A través de ésta estrategia se desliga esa preocupación de los reducer's
- Se definió archivos de configuración para rutas públicas y privadas. De esa forma, si un usuario sin autorización o con sessión activa intenta acceder a recursos que no corresponden, será redireccionado a la página de login o a la página home, respectivamente.

