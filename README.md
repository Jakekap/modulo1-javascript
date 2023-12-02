# PREGUNTAS TALLER DE NIVELACIÓN

## MÓDULO SOBRE LÓGICA, LÓGICA DE PROGRAMACIÓN Y PROGRAMACIÓN CON JAVASCRIPT

1. ¿Qué es la lógica en el contexto de la programación? Y explicar por qué es importante
   en el desarrollo web Frontend.
   R: La lógica en programación implica estructurar instrucciones de manera coherente. En Frontend, es crucial para crear interfaces interactivas y respuestas dinámicas. La lógica asegura que las acciones del usuario se traduzcan en cambios visuales y funcionales.

2. Definir el concepto de “algoritmo” y proporcionar un ejemplo sencillo de un algoritmo
   relacionado con la lógica de programación.
   R: Un algoritmo es una secuencia de pasos definidos para realizar una tarea específica. Por ejemplo, un algoritmo de ordenamiento como el de burbuja organiza elementos en una lista de menor a mayor comparando pares de valores.

3. ¿Qué son estructuras de control en la programación?, ¿Cuáles son los tipos de
   estructuras de control y las estructuras más comunes de cada tipo?, Describir al menos
   dos tipos de estructura de control, explicar por qué son importantes y proporcionar
   ejemplos de cada uno de cómo se utilizan en el desarrollo web Frontend.
   R: Son bloques de código que dirigen el flujo de ejecución. Dos tipos esenciales son "if-else" y "for". Son fundamentales para controlar la lógica condicional y la repetición de acciones en Frontend.

4. Describir cómo se declaraban variables y constantes en JavaScript antes de la
   introducción de ECMAScript 6 (ES6). Explicar cómo ES6 mejoró la declaración de
   variables y constantes, y mencionar los problemas que esta mejora resuelve en el
   desarrollo web Frontend.
   R: Antes de ES6, se usaba "var" para variables y "const" y "let" no existían. ES6 introdujo "const" y "let", mejorando la claridad y evitando problemas de ámbito, facilitando el desarrollo Frontend.

5. ¿Cómo se declaran las funciones en JavaScript y cuál es la diferencia entre una
   declaración de función, una expresión de función y una función de flecha (arrow
   function)? Proporcionar ejemplos de cada una.
   R: Se pueden declarar con "function", expresiones de función o funciones de flecha. Cada una tiene su sintaxis y uso específicos.

6. ¿Por qué es necesario el uso de funciones en el desarrollo web Frontend? Enumerar al
   menos tres razones fundamentales y proporcionar ejemplos de situaciones en las que
   las funciones son esenciales. Además, mencionar la ventaja de las funciones flecha en
   el contexto de estas razones.
   R: Las funciones son esenciales para modularizar el código, reutilizar lógica y mejorar la mantenibilidad. Las funciones de flecha ofrecen concisión y contexto lexical.

7. ¿Cuál es la diferencia entre parámetro y argumento?
   R: Un parámetro es una variable en la declaración de función, mientras que un argumento es el valor real que se pasa a la función.

8. Definir el concepto de Callback y proporcionar un ejemplo práctico.
   R: Un callback es una función que se pasa como argumento a otra función y se ejecuta después de que esta finaliza. Ejemplo: setTimeout(función, tiempo).

9. ¿Qué es el hoisting en JavaScript y cómo afecta a las variables y funciones?
   Proporcionar ejemplos de hoisting en declaraciones de variables y funciones.
   R: El hoisting mueve las declaraciones de variables y funciones al inicio del ámbito. Ejemplo: console.log(x) donde x se declara después.

10. Definir brevemente el concepto de objeto en JavaScript y cuál es la visión general sobre
    este concepto. Indicar, también cómo se declaran estas estructuras de datos.
    R: Un objeto es una estructura de datos que almacena propiedades y métodos. Se declara con {}.

11. ¿Qué son propiedades?, y ¿Cuál es la diferencia entre una propiedad y un método en
    un objeto?
    R:Una propiedad almacena un valor, mientras que un método es una función asociada al objeto.

12. Explicar las dos formas de acceder a una propiedad de objetos e indicar las situaciones
    en que conviene usar una manera sobre la otra.
    R: Se accede mediante la notación de punto (objeto.propiedad) o notación de corchetes (objeto['propiedad']), según la situación.

13. ¿Existe alguna forma de recorrer las propiedades de un objeto? En caso negativo,
    explicar por qué no es posible y en caso positivo proporcionar un ejemplo. Mencionar
    una situación en la cual sea muy útil recorrer las propiedades de un objeto.
    R: Sí, mediante bucles como for...in. Útil para manipular dinámicamente propiedades.

14. ¿Por qué son útiles los objetos en la programación web y qué tipos de datos pueden
    almacenar?
    R: Los objetos organizan y almacenan datos complejos, facilitando la gestión de información en aplicaciones web. Pueden almacenar cualquier tipo de dato.

15. ¿Qué es un array en JavaScript y por qué son esenciales?
    R: Un array es una estructura que almacena elementos de manera secuencial. Es esencial para manejar conjuntos de datos.

16. ¿Cómo acceder a un elemento dentro de un array? Explicar con un ejemplo.
    R: Se accede mediante el índice. Ejemplo: miArray[0] para el primer elemento.

17. Mencionar al menos tres funciones de arrays y describir su utilidad en la programación
    web.
    R: Funciones como map, filter y reduce son cruciales para manipular arrays. Permiten transformar, filtrar y resumir datos de manera eficiente.

18. Proporcionar un ejemplo de cómo se utiliza una función de array para transformar y
    filtrar datos en un array.
    R: filter se utiliza para seleccionar elementos que cumplan ciertos criterios. Ejemplo: númerosPares = miArray.filter(numero => numero % 2 === 0).

## MÓDULO SOBRE HTML, CSS Y RESPONSIVE DESIGN

1. ¿Qué significa HTML y cuál es su función en el desarrollo web?
   R: HTML, que significa "Hypertext Markup Language", es el lenguaje de marcado estándar para crear páginas web. Su función principal es estructurar el contenido de una página, utilizando etiquetas para definir elementos como encabezados, párrafos, enlaces, imágenes y más.

2. ¿Cuál es la estructura básica de un documento HTML? Describir las etiquetas
   esenciales.
   R: La estructura esencial incluye las etiquetas <html>, <head>, <title>, <body>, y otras como <meta charset="UTF-8">. Define la información básica y el contenido de la página.

3. ¿Qué es CSS y cuál es su propósito en el desarrollo web?
   R: CSS, que significa "Cascading Style Sheets", es un lenguaje de estilo utilizado para dar estilo y diseño a documentos HTML. Su propósito es separar la estructura del contenido y la presentación visual.

4. ¿Qué son selectores CSS, cuáles son los principales tipos de selectores y porqué es
   importante entender la especificidad en el contexto de las hojas de estilo en cascada
   (CSS)? Describir al menos tres tipos de selectores CSS y cómo la especificidad afecta
   a la aplicación de estilos en un proyecto de desarrollo web Frontend. Proporcionar
   ejemplos de situaciones en las que se utiliza la especificidad de selectores para resolver
   conflictos de estilos.
   R: Los selectores apuntan a elementos específicos para aplicar estilos. La especificidad determina cuál estilo prevalece en conflictos. Ejemplos de selectores: clase (.clase), ID (#id), y tipo (elemento). La especificidad se basa en el peso de estos selectores.

5. Explicar las diferencias entre los estilos en línea (inline), estilos internos (embedded) y
   estilos externos (external) en CSS. Indicar cuál de los tres estilos es el recomendado
   usar y por qué.
   R: En línea (Inline): Estilos aplicados directamente en la etiqueta HTML.
   Internos (Embedded): Estilos dentro de la etiqueta <style> en el head.
   Externos (External): Estilos en un archivo separado. Se recomienda usar estilos externos para mejorar la mantenibilidad y la reutilización del código.

6. ¿Qué es flexbox y cómo se utiliza para el diseño de páginas web?
   R: Flexbox es un modelo de diseño unidimensional que simplifica la alineación y distribución de elementos en un contenedor, especialmente útil para diseños flexibles y alineación en una sola fila o columna.

7. Explicar cómo se emplean las propiedades flexbox y explicar la función de las
   principales propiedades en la creación de diseños flexibles.
   R: Principales propiedades: display: flex;, flex-direction, justify-content, align-items, y align-self. Estas controlan la dirección del flujo, la alineación y la distribución de elementos en un contenedor flexible.

8. ¿Qué es CSS Grid Layout y en qué se diferencia de flexbox?
   R: CSS Grid Layout es un modelo bidimensional que permite crear diseños más complejos. A diferencia de Flexbox, que trabaja en un solo eje, Grid permite organizar elementos en filas y columnas.

9. Proporcionar un ejemplo de cómo crear una cuadrícula sencilla con CSS Grid.
   R: .contenedor {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 10px;
   }

10. ¿Qué significa el diseño responsivo en el contexto del desarrollo web?
    R: Diseño responsivo se refiere a la capacidad de una página web para adaptarse a diferentes tamaños de pantalla y dispositivos, garantizando una experiencia de usuario óptima.

11. Enumerar al menos tres técnicas o estrategias utilizadas para lograr el diseño
    responsivo en una página web.
    R: Media Queries: Cambios en estilos según el tamaño de la pantalla.
    Imágenes Fluidas: Imágenes que se ajustan al ancho del contenedor.
    Flexbox y Grid: Utilización de estos modelos para crear diseños flexibles.

## MÓDULO SOBRE DOM E INTERACCIÓN CON EL DOM

1. ¿Qué es el DOM (Modelo de Objeto de Documento) en el contexto de la programación
   web?
   R: El DOM es una interfaz de programación que representa la estructura de un documento HTML/XML como un árbol de objetos. Permite a los programadores acceder, modificar y manipular dinámicamente el contenido y la estructura de una página web.

2. ¿Cuál es la diferencia entre el DOM y el HTML en una página web?
   R: Mientras que HTML es el lenguaje de marcado para estructurar la información en una página web, el DOM es una interfaz de programación que representa y permite la manipulación de esa estructura en tiempo real.

3. ¿Porqué es importante entender y manipular el DOM en el desarrollo web Frontend?
   R: Entender y manipular el DOM es crucial para crear aplicaciones web interactivas. Permite la actualización dinámica de contenido, respuesta a eventos del usuario y la creación de experiencias de usuario más fluidas.

4. ¿Qué son los eventos del DOM y cuáñ es su función en una página web?
   R: Los eventos son acciones detectadas por la interfaz del usuario que desencadenan funciones o scripts. En una página web, ejemplos comunes incluyen clics, envíos de formularios, cargas y más.

5. Proporcionar ejemplos de eventos prácticos y comunes, como “click”, “submit” y “load o
   DOMContentLoad”.
   R: "click": Se activa al hacer clic en un elemento.
   "submit": Se activa al enviar un formulario.
   "load" o "DOMContentLoaded": Se activa cuando la página o el DOM se carga.

6. ¿Por qué es importante manejar eventos en la interacción usuario-web y cómo se
   añaden controladores de eventos a los elementos del DOM?
   R: La interacción usuario-web se basa en eventos. Agregar controladores de eventos permite ejecutar código en respuesta a acciones del usuario, haciendo las páginas web más dinámicas.

7. Describir al menos tres métodos para seleccionar elementos del DOM en JavaScript.
   R: getElementById(): Selecciona un elemento por su ID.
   getElementsByClassName(): Selecciona elementos por su clase.
   querySelector(): Selecciona el primer elemento que coincida con un selector CSS.

8. ¿Cómo se crea un nuevo elemento HTML y se agrega al DOM utilizando JavaScript?
   R: const nuevoElemento = document.createElement("div");
   document.body.appendChild(nuevoElemento);

9. ¿Cuál es la importancia de la manipulación del DOM en la creación de aplicaciones web
   dinámicas e interactivas?
   R: La manipulación del DOM permite actualizar la interfaz de usuario en respuesta a acciones del usuario o cambios en los datos, creando experiencias interactivas y dinámicas.

10. Explicar brevemente los conceptos “event bubbling” y “event delegation” en el contexto
    de eventos del DOM.
    R: Event Bubbling: Es el proceso en el que un evento se propaga desde el elemento objetivo hasta el ancestro.
    Event Delegation: Es la técnica de asignar un solo controlador de eventos a un ancestro común en lugar de a múltiples elementos hijos.

11. ¿Por qué son relevantes los conceptos “event bubbling” y “event delegation” en la
    gestión de eventos en páginas web con múltiples elementos interactivos?
    R: Permiten gestionar eficientemente eventos en páginas con múltiples elementos, mejorando el rendimiento y facilitando la gestión de eventos dinámicos.

## MÓDULO SOBRE COMUNICACIÓN CON EL SERVIDOR (STORAGE, PROMESAS, ASINCRONÍAS Y PETICIONES HTTPS)

1. Definir brevemente el concepto de localStorage y sessionStorage.
   R: localStorage: Almacena datos de manera persistente en el navegador.
   sessionStorage: Almacena datos de forma temporal mientras la sesión del navegador está abierta.

2. Describir las diferencias claves entre localStorage y sessionStorage.
   R: Persistencia: localStorage es persistente, sessionStorage se borra al cerrar la sesión.
   Ámbito: localStorage comparte datos entre pestañas, sessionStorage no.

3. ¿Por qué son útiles para almacenar datos en el navegador y cuál es su límite de
   capacidad?
   R: Útiles para almacenar datos localmente.
   Capacidad típica de al menos 5 MB por dominio.
4. ¿Qué son las promesas en JavaScript y para qué se utilizan en el desarrollo web?
   R: Promesas representan un valor futuro que puede estar disponible de inmediato, después de un tiempo, o nunca. Se utilizan para manejar operaciones asincrónicas.

5. Explica el concepto de asincronía en programación y cómo las promesas ayudan a
   manejar operaciones asincrónicas.
   R: La asincronía implica que las operaciones no se ejecutan en secuencia. Las promesas ayudan a manejar este comportamiento, permitiendo un código más limpio y estructurado.

6. Proporciona un ejemplo de cómo se utiliza una promesa para realizar una operación
   asincrónica, como una solicitud de red.
   R: const fetchData = () => {
   return new Promise((resolve, reject) => {
   // Simulación de solicitud de red
   setTimeout(() => {
   const data = { resultado: "Datos recuperados" };
   resolve(data);
   }, 1000);
   });
   };

7. ¿Qué es JSON Server y cómo se utiliza en el desarrollo web?
   R: JSON Server es una herramienta que permite simular una API REST falsa utilizando un archivo JSON. Facilita el desarrollo frontend al proporcionar un backend falso.

8. ¿Por qué es útil simular una API REST falsa con JSON Server en el desarrollo frontend?
   R: Desarrollo frontend sin depender de un backend real.
   Pruebas sin afectar el servidor real.

9. ¿Cuáles son las diferencias claves entre los métodos del objeto promesa .then().catch()
   y las palabras claves async/await?
   R: .then().catch(): Utilizado con promesas de forma encadenada.
   async/await: Proporciona una sintaxis más limpia y legible para manejar promesas.

10. Proporciona un ejemplo de cómo configurar una API falsa con JSON Server y realizar
    solicitudes (GET, POST, PUT, PATCH y DELETE) a través de ella.
    R: npm install -g json-server
    json-server --watch db.json

11. Describe las diferencias entre Fetch y Axios como métodos para realizar solicitudes
    HTTP en JavaScript.
    R: Fetch: API nativa del navegador, más verbosa.
    Axios: Librería externa, más simple y potente.

12. ¿Por qué es importante considerar las peticiones HTTP en aplicaciones web modernas?
    R: Intercambio de datos entre frontend y backend.
    Actualizaciones dinámicas sin recargar la página.

13. Proporciona ejemplos de cómo se utilizan Fetch y Axios para realizar solicitudes GET y
    POST.
    R: // Fetch
    fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    // Axios
    axios.get("https://api.example.com/data")
    .then(response => console.log(response.data))
    .catch(error => console.error(error));

14. Explica la importancia del manejo de errores al trabajar con promesas en el desarrollo
    web.
    R: Evita fallas silenciosas.
    Mejora la detección y solución de problemas.

15. Describe cómo se manejan los errores en las promesas, incluyendo el uso de catch.
    R: fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));

16. ¿Cuáles son las diferencias claves entre los métodos del objeto promesa .then().catch()
    y la estructura try/catch?
    R: .then().catch(): Se usa con promesas.
    try/catch: Para manejar errores en bloques de código síncrono.

17. Proporciona un ejemplo de cómo se puede manejar un error en una promesa al realizar
    una solicitud de red.
    R: fetchData()
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));

## MÓDULO SOBRE REACT JS

1. Explicar brevemente el concepto de ReactJS y sus principales características.
   R: ReactJS es una biblioteca de JavaScript para construir interfaces de usuario. Sus características clave incluyen el uso de componentes reutilizables, el Virtual DOM para optimizar las actualizaciones de la interfaz y la programación declarativa.

2. Definir qué es un componente en ReactJS y mencionar los tipos de componentes que
   existen.
   R: Un componente en ReactJS es una parte reutilizable e independiente de la interfaz de usuario. Tipos de componentes: Funcionales (basados en funciones) y de Clase (basados en clases ES6).

3. ¿Qué es el Virtual DOM y cuál es su función en ReactJS?
   R: El Virtual DOM es una representación virtual de la estructura de la interfaz de usuario. React lo utiliza para realizar actualizaciones eficientes, minimizando las manipulaciones directas del DOM.

4. ¿Qué es JSX en ReactJS y porqué es importante?
   R: JSX es una extensión de JavaScript que permite escribir código similar a XML/HTML en JavaScript. Es importante en React para definir la estructura del componente de manera más clara y concisa.

5. ¿Qué es un Hook en ReactJS y cuál es su propósito?
   R: Un Hook en ReactJS es una función especial que permite agregar estado y otras características de React en componentes de función.

6. Mencionar al menos tres tipos de Hooks en ReactJS y explicar brevemente para qué se
   utilizan.
   R: useState: Agrega estado a componentes de función.
   useEffect: Maneja efectos secundarios en componentes funcionales.
   useContext: Permite acceder al contexto de React en componentes de función.

7. ¿Cuáles son las reglas de uso para los Hooks en ReactJS?
   R: Solo usarlos en el nivel superior del componente de función.
   No usar Hooks dentro de bucles, condiciones ni funciones anidadas.

8. Explicar qué es React Router DOM versión 6, para qué se utiliza y cuáles son sus
   principales componentes y Hooks.
   R: React Router DOM v6 es una biblioteca para manejar la navegación en aplicaciones React. Sus componentes principales incluyen <BrowserRouter>, <Route>, y <Link>. Hooks como useNavigate se utilizan para la navegación programática.

9. Explicar cómo se realiza la navegación entre diferentes páginas utilizando React Router
   DOM.
   R: La navegación se realiza mediante la utilización de <Link> para los enlaces y useNavigate para la navegación programática. Los componentes <Route> determinan qué componente renderizar según la URL.

10. ¿Cómo se definen rutas en React Router DOM?
    R: Rutas se definen con el componente <Route>:
    <Route path="/inicio" element={<Inicio />} />

11. Describir cómo crear un proyecto ReactJS con Vite
    R: npm create vite my-react-app --template react
    cd my-react-app
    npm install
    npm run dev

12. Describir cómo desplegar un JSON server en cualquier Hosting free o servicio en la
    nube gratuito de su elección
    R: Instalar JSON Server: npm install -g json-server
    Crear archivo JSON: db.json
    Desplegar en hosting gratuito (por ejemplo, Vercel, Netlify) con el comando: json-server --watch db.json

13. Describir cómo desplegar una aplicación en cualquier Hosting de su elección.
    R: Crear una versión de producción: npm run build
    Desplegar en el hosting de elección (Vercel, Netlify, GitHub Pages, etc.).

## MÓDULO SOBRE GESTION DE ESTADOS Y DATOS CON REACT CONTEXT Y USEREDUCER

1. ¿Qué es React Context y para qué se utiliza en el desarrollo web con React?
   R: React Context es una característica que permite pasar datos a través del árbol de componentes sin tener que pasar props manualmente a través de cada nivel. Se utiliza para gestionar el estado global, como temas, autenticación, etc.

2. Describir cómo se crea un contexto en React y cómo se proporciona y consume
   información a través de él.
   R: const MiContexto = React.createContext();
   Para proporcionar y consumir información:
   // Proporcionar información
   <MiContexto.Provider value={informacion}>
   {/_ Componentes hijos _/}
   </MiContexto.Provider>
   // Consumir información
   <MiContexto.Consumer>
   {valor => /_ Renderizar con el valor _/}
   </MiContexto.Consumer>

3. ¿Cuál es la ventaja de utilizar React Context en lugar de pasar props a través de múltiples
   componentes?
   R: Evita pasar props a través de múltiples niveles.
   Facilita el acceso a datos en cualquier parte del árbol de componentes.

4. Explicar el propósito de useReducer en React y cómo se diferencia de useState.
   R: useReducer es un hook que se utiliza para gestionar el estado de componentes más complejos. Se utiliza cuando el estado depende del anterior o cuando se manejan actualizaciones de estado en función de acciones.

5. Describe los argumentos que toma la función useReducer.
   R: useReducer(reducer, initialState)

reducer: Función que especifica cómo se cambia el estado en respuesta a acciones.
initialState: Estado inicial del componente.

6. ¿Por qué es útil utilizar useReducer para gestionar el estado en aplicaciones más
   complejas?
   R: useReducer es útil cuando el estado es complejo o depende de acciones específicas. Facilita la gestión de lógica de estado más compleja.

7. ¿Cómo se puede utilizar React Context junto con useReducer para gestionar el estado
   global en una aplicación de React?
   R: Puedes combinar React Context y useReducer para gestionar el estado global de una aplicación React, proporcionando el dispatch del useReducer a través del contexto.

8. ¿Por qué es importante tener un sistema de gestión de estado global en aplicaciones
   React más grandes?
   R: Evita la prop drilling (pasar props a través de muchos componentes).
   Facilita el acceso y la actualización del estado desde cualquier componente.

9. Menciona al menos tres ventajas de utilizar una combinación de React Context y
   useReducer en comparación con el manejo de estado local en componentes.
   R: Simplicidad: Evita pasar props manualmente.
   Escalabilidad: Maneja fácilmente el estado en aplicaciones más grandes.
   Mantenibilidad: Facilita la organización del código y la lógica de estado.

10. ¿En qué situaciones podría ser beneficioso migrar de un enfoque de manejo de estado
    local a un enfoque de estado global utilizando React Context y useReducer?
    R: Escalabilidad: A medida que la aplicación crece, el manejo global se vuelve más eficiente.
    Reusabilidad: Evita duplicar la lógica de estado en múltiples componentes.
    Mantenibilidad: Facilita la gestión y actualización del estado global.
