# Metrocuadrado Test

Proyecto prueba de conocimientos para optar a la posicón Front End developer

## Scripts disponibles

### `yarn start`

Corre la aplicación en modo desarrollo

### `yarn build`

Construye la aplicación para producción en la carpeta `build`. \


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
