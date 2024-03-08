# Movie App

El proyecto "Movie App" es una aplicación web que permite a los usuarios acceder y visualizar información sobre películas almacenadas en una base de datos Firestore de Firebase. Además, ofrece funciones de registro, inicio de sesión y cierre de sesión para los usuarios.

## Páginas
- Página de Inicio de Sesión (Login): En esta página, los usuarios pueden acceder al formulario de inicio de sesión, donde ingresarán sus credenciales para acceder a la lista de películas y disfrutar de todas las funcionalidades del sitio.
- Página de Registro (Register): En esta página, los usuarios pueden acceder al formulario de registro, donde ingresarán sus datos de usuario (correo electrónico y contraseña), los cuales se guardarán en el servicio de autenticación proporcionado por Firebase.
- Página de Inicio (Home): Aquí se encuentra la lista completa de categorías de películas. Esta lista solo se mostrará si el usuario ha iniciado sesión previamente. En caso contrario, será redirigido automáticamente a la página de inicio de sesión.
- Categoría (Category/categoryId): En esta página se muestra el detalle de una categoría específica. Además, se muestran todas las películas de esa categoría almacenadas en la colección de Firestore.
- Película (Movie/movieId): En esta página se muestra el detalle de una película, donde los usuarios pueden ver información como la sinopsis, el director, la duración, el año de publicación y un tráiler de la película.

## Funcionalidades
- Visualización de categorías: Los usuarios pueden explorar tuan lista de categorías disponibles y obtener información detallada sobre estas, como, las películas disponibles de esta categoría.
- Visualización de películas: Los usuarios pueden explorar una lista de películas por categoría disponibles y obtener información detallada sobre cada una, como el título, el director, el año de lanzamiento, la sinopsis, la duración, la categoría y el tráiler.
- Autenticación de usuarios: Los usuarios pueden registrarse en la plataforma mediante un formulario de registro y luego iniciar sesión utilizando sus credenciales. También tienen la opción de cerrar sesión cuando lo deseen dándole click al botón de salir ubicado en el header.
  
## Uso
- Para comenzar, se debe iniciar sesión con la dirección de correo electrónico. Si se desea crear una cuenta nueva, se debe dar click en el botón Sign Up que redigirá al formulario de registro, de lo contrario se puede acceder con las siguientes credenciales.
  - Email: adm@gmail.com
  - Password: 12345678
- La información de inicio de sesión se almacena localmente usando un contexto de React para que varios componentes tengan acceso a esto, y se elimina automáticamente al cerrar la sesión. Además, al cerrar sesión, también se hace uso del método signOut proveído por firebase/auth.
- Una vez iniciada la sesión, se podrá visualizar la lista de categorías disponible
- Es posible dar clic en cualquier categoría para redirigir a la página Category, que muestra todas las películas almacenadas que pertenecen a esta categoría.
- Es posible dar click en cualquier película para redigir a la página Movie, que muestra información adicional de la película.
- El header cuenta con un navbar que le permite al usuario ir a una categoría en específico, se puede cerrar sesión y redirigir al inicio dando click en el logo de la página. 

## Tecnologías Usadas
- Firebase Firestore: La base de datos Firestore de Firebase se utiliza para almacenar y gestionar la información de las películas y categorías. Se crearon dos colecciones moviesCategory y moviesCollection, que almacenan información de las categorías y películas, respectivamente. 
- React.js: La interfaz de usuario de la aplicación se construye utilizando React.js, una biblioteca de JavaScript de código abierto para construir interfaces de usuario.
- React Router: Se utiliza React Router para la navegación dentro de la aplicación, permitiendo a los usuarios acceder a diferentes vistas y páginas, como la página de inicio, página de login, página de register, la página de detalles de la película y la página de detalle de la categoría.
- Firebase Authentication: La autenticación de usuarios se gestiona utilizando Firebase Authentication, lo que proporciona una capa de seguridad para el acceso a la aplicación.

## Instalación
- Clona el repositorio del proyecto desde GitHub.
- Instala las dependencias del proyecto utilizando `npm install`.
- Ejecuta la aplicación utilizando el comando  `npm run dev`.
- Abre tu navegador web y accede a la dirección local donde se ejecuta la aplicación.




  
