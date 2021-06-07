## **Probando el entorno de la rama CSS-WORKSHOP-CRAFTER-WEB**
Abrimos el proyecto desde VS Code. Podemos cambiar de rama directamente dentro del editor (1).  

Hacemos lo siguiente para probar si está todo bien:  

1. 	**Ver si se activa el visor de git (1) y el live server (2)**. (Salen en la barra de estado).

	Pulsad en "Go Live" (2) y debería abrirse el proyecto en el navegador.

	Nota: el servidor está configurado en el puerto 3001, si lo tenéis ocupado con otra cosa tenéis que cambiarlo en los user settings, si no sabéis, me lo decís.
	
	No me sale, ¿qué hago?:

	- Hay que darle un momento, en Windows a mí me tarda un poco, en Mac es casi inmediato al abrir el proyecto.
	- Si no reconoce el repositorio, pinchad en el explorador de git (3) a ver si así espabila.
	- Si no se activa el live server, poneos encima del index.html -> botón derecho -> "Open with live server".
	
	Si nada de esto funciona, haced algún plan para el día del taller y no vengáis. :-P
	
	Es broma, enviadme un mail y lo intentamos solucionar.  
	
	
	![Prueba web crafter](images/prueba-server-git.jpg)


## **Probando el entorno de la rama CSS-WORKSHOP-CRAFTER-WEB**
Entráis en dicha rama desde VSCode y hacéis lo siguiente para asegurarnos que funciona todo bien.

1. 	**Ver si se activa compilador de SASS**.

	Tiene que salir en la barra de estado **"Watch Sass"**.
	
	![Prueba web crafter](images/watch.png)
	
2. 	**Poner en marcha el compilador Sass**

	Arranco el compilador pulsando donde pone **“Watch Sass”** cambiará a **“Watching…”** y en consola nos dice que está escuchando.(1)

3. 	**Probar el compilador Sass**

	Me voy a **steps/01/_site.scss** (2), lo abro, pongo arriba del todo cualquier cosa en css (3), guardo, y **me aseguro que me está modificando styles.min.css dentro de dist/css/** (4)

4. 	**BORRO el código que he puesto de prueba** para que no nos quede ahí para el taller.

	![Prueba web crafter](images/prueba-web.jpg)

