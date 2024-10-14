import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const main = async () => {
  console.log("Seeding database...");
  await client.post.deleteMany();

  await client.post.createMany({
    data: [
      {
        slug: "introduccion-a-react",
        image: "https://picsum.photos/600/350?random=1",
        title: "Introducción a React",
        author: "John Doe",
        summary:
          "Aprende los fundamentos de React, la biblioteca de JavaScript para construir interfaces de usuario.",
        content:
          "## ¿Qué es React?\n\nReact es una biblioteca de JavaScript para construir interfaces de usuario. Permite crear aplicaciones web interactivas y rápidas.\n\n### Ventajas de React\n- Componentes reutilizables\n- Virtual DOM para mejorar el rendimiento\n- Amplia comunidad y ecosistema\n\n### Instalación\nPara empezar, necesitas tener Node.js instalado. Luego, puedes crear un nuevo proyecto usando Create React App:\n\n```bash\nnpx create-react-app mi-app\n```\n\n### Primer Componente\n```javascript\nfunction App() {\n  return <h1>¡Hola, mundo!</h1>;\n}\n```\n\n¡Explora más y construye tu primera aplicación!",
      },
      {
        slug: "routing-en-nextjs",
        image: "https://picsum.photos/600/350?random=2",
        title: "Routing en Next.js",
        author: "John Doe",
        summary:
          "Descubre cómo manejar el enrutamiento en Next.js, el framework de React para aplicaciones SSR.",
        content:
          "## Introducción al Routing en Next.js\n\nNext.js simplifica el enrutamiento mediante su sistema basado en archivos.\n\n### Estructura de Páginas\nCada archivo en el directorio `pages` se convierte en una ruta.\n\n- `pages/index.js` -> `/`\n- `pages/about.js` -> `/about`\n\n### Navegación\nUsa el componente `Link` de Next.js para navegar entre páginas:\n\n```javascript\nimport Link from 'next/link';\n\nfunction Home() {\n  return (\n    <div>\n      <h1>Página de Inicio</h1>\n      <Link href=\"/about\">Ir a Acerca de</Link>\n    </div>\n  );\n}\n```\n\n### Rutas Dinámicas\nPara crear rutas dinámicas, usa corchetes:\n\n- `pages/posts/[id].js` -> `/posts/1`, `/posts/2`, etc.",
      },
      {
        slug: "mejores-practicas-en-react",
        image: "https://picsum.photos/600/350?random=3",
        title: "Mejores Prácticas en React",
        author: "John Doe",
        summary:
          "Consejos y trucos para escribir código React limpio y eficiente.",
        content:
          "## Mejores Prácticas en React\n\nAl desarrollar con React, es crucial seguir ciertas prácticas para mantener tu código limpio y fácil de mantener.\n\n### 1. Usa Componentes Funcionales\nPrefiere los componentes funcionales sobre los de clase. Son más sencillos y permiten el uso de hooks.\n\n### 2. Manejo del Estado\nUtiliza `useState` y `useEffect` para manejar el estado y los efectos secundarios.\n\n### 3. PropTypes y TypeScript\nAsegúrate de tipar tus componentes usando PropTypes o TypeScript para mejorar la legibilidad.\n\n### 4. Componentes Reutilizables\nCrea componentes que se puedan reutilizar en diferentes partes de tu aplicación.\n\n### 5. Estructura de Archivos\nOrganiza tu código en carpetas como `components`, `hooks`, y `utils` para mantener todo ordenado.",
      },
      {
        slug: "optimizacion-en-nextjs",
        image: "https://picsum.photos/600/350?random=4",
        title: "Optimización en Next.js",
        author: "John Doe",
        summary:
          "Aprende cómo optimizar el rendimiento de tus aplicaciones Next.js.",
        content:
          '## Optimización en Next.js\n\nNext.js ofrece varias características que facilitan la optimización del rendimiento.\n\n### 1. Generación Estática\nUsa `getStaticProps` y `getStaticPaths` para generar páginas estáticas, mejorando la velocidad de carga.\n\n### 2. Imágenes Optimizadas\nUtiliza el componente `Image` de Next.js para cargar imágenes de manera eficiente.\n\n```javascript\nimport Image from \'next/image\';\n\nfunction MyImage() {\n  return <Image src="/mi-imagen.jpg" alt="Descripción" width={500} height={300} />;\n}\n}\n```\n\n### 3. Carga Diferida\nImplementa la carga diferida (`lazy loading`) de componentes y recursos para mejorar el rendimiento inicial.\n\n### 4. Análisis de Rendimiento\nUsa herramientas como Lighthouse y Next.js Analytics para medir el rendimiento de tu aplicación.',
      },
      {
        slug: "hooks-personalizados-en-react",
        image: "https://picsum.photos/600/350?random=5",
        title: "Hooks Personalizados en React",
        author: "John Doe",
        summary:
          "Descubre cómo crear y usar hooks personalizados para reutilizar lógica en tus componentes.",
        content:
          "## Hooks Personalizados en React\n\nLos hooks personalizados te permiten extraer y reutilizar lógica en tus componentes de React.\n\n### Creando un Hook Personalizado\nAquí hay un ejemplo de un hook que maneja el contador:\n\n```javascript\nimport { useState } from 'react';\n\nfunction useCounter(initialValue = 0) {\n  const [count, setCount] = useState(initialValue);\n  \n  const increment = () => setCount(count + 1);\n  const decrement = () => setCount(count - 1);\n  \n  return { count, increment, decrement };\n}\n```\n\n### Usando el Hook\nAhora puedes usar tu hook personalizado en un componente:\n\n```javascript\nfunction Counter() {\n  const { count, increment, decrement } = useCounter(10);\n\n  return (\n    <div>\n      <h1>{count}</h1>\n      <button onClick={increment}>Incrementar</button>\n      <button onClick={decrement}>Decrementar</button>\n    </div>\n  );\n}\n```\n\n¡Explora la creación de más hooks personalizados para mejorar tu código!",
      },
      {
        slug: "useFetch-hook",
        image: "https://picsum.photos/600/350?random=6",
        title: "Hook Personalizado: useFetch",
        author: "John Doe",
        summary:
          "Aprende a crear un hook para manejar la lógica de las peticiones HTTP en tus componentes.",
        content:
          "## Hook Personalizado: useFetch\n\nEl hook `useFetch` te permite realizar peticiones HTTP de manera sencilla y manejar el estado de carga y errores.\n\n### Creando el Hook `useFetch`\nAquí tienes un ejemplo de cómo crear un hook para hacer peticiones:\n\n```javascript\nimport { useState, useEffect } from 'react';\n\nfunction useFetch(url) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    const fetchData = async () => {\n      try {\n        const response = await fetch(url);\n        if (!response.ok) {\n          throw new Error('Error en la respuesta');\n        }\n        const result = await response.json();\n        setData(result);\n      } catch (error) {\n        setError(error);\n      } finally {\n        setLoading(false);\n      }\n    };\n\n    fetchData();\n  }, [url]);\n\n  return { data, loading, error };\n}\n```\n\n### Usando el Hook `useFetch`\nAhora puedes usar `useFetch` en tus componentes:\n\n```javascript\nfunction UserList() {\n  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');\n\n  if (loading) return <p>Cargando...</p>;\n  if (error) return <p>Error: {error.message}</p>;\n\n  return (\n    <ul>\n      {data.map(user => (\n        <li key={user.id}>{user.name}</li>\n      ))}\n    </ul>\n  );\n}\n```\n\n### Conclusión\nEl hook `useFetch` facilita la gestión de datos asíncronos en tus componentes, permitiéndote mantener tu código limpio y organizado.",
      },

      {
        slug: "useLocalStorage-hook",
        image: "https://picsum.photos/600/350?random=7",
        title: "Hook Personalizado: useLocalStorage",
        author: "John Doe",
        summary:
          "Aprende a crear un hook para gestionar el almacenamiento local en tus componentes de React.",
        content:
          "## Hook Personalizado: useLocalStorage\n\nEl hook `useLocalStorage` te permite sincronizar un estado con el almacenamiento local del navegador.\n\n### Creando el Hook `useLocalStorage`\nAquí tienes un ejemplo de cómo crear este hook:\n\n```javascript\nimport { useState } from 'react';\n\nfunction useLocalStorage(key, initialValue) {\n  const [storedValue, setStoredValue] = useState(() => {\n    try {\n      const item = window.localStorage.getItem(key);\n      return item ? JSON.parse(item) : initialValue;\n    } catch (error) {\n      console.error(error);\n      return initialValue;\n    }\n  });\n\n  const setValue = (value) => {\n    try {\n      const valueToStore = value instanceof Function ? value(storedValue) : value;\n      setStoredValue(valueToStore);\n      window.localStorage.setItem(key, JSON.stringify(valueToStore));\n    } catch (error) {\n      console.error(error);\n    }\n  };\n\n  return [storedValue, setValue];\n}\n```\n\n### Usando el Hook `useLocalStorage`\nPuedes utilizar `useLocalStorage` en un componente para gestionar el estado:\n\n```javascript\nfunction ThemeToggle() {\n  const [theme, setTheme] = useLocalStorage('theme', 'light');\n\n  return (\n    <div style={{ background: theme === 'dark' ? '#333' : '#FFF', color: theme === 'dark' ? '#FFF' : '#000' }}>\n      <h1>Tema actual: {theme}</h1>\n      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Toggle Tema</button>\n    </div>\n  );\n}\n```\n\n### Conclusión\nEl hook `useLocalStorage` simplifica la gestión del almacenamiento local, permitiéndote guardar y recuperar datos de manera eficiente.",
      },
      {
        slug: "useToggle-hook",
        image: "https://picsum.photos/600/350?random=8",
        title: "Hook Personalizado: useToggle",
        author: "John Doe",
        summary:
          "Crea un hook simple para alternar un valor booleano en tus componentes.",
        content:
          "## Hook Personalizado: useToggle\n\nEl hook `useToggle` te permite manejar un estado booleano fácilmente.\n\n### Creando el Hook\n```javascript\nimport { useState } from 'react';\n\nfunction useToggle(initialValue = false) {\n  const [value, setValue] = useState(initialValue);\n  const toggle = () => setValue(v => !v);\n  return [value, toggle];\n}\n```\n\n### Usando el Hook\n```javascript\nfunction ToggleButton() {\n  const [isOn, toggle] = useToggle();\n\n  return <button onClick={toggle}>{isOn ? 'Encendido' : 'Apagado'}</button>;\n}\n```\n\n### Conclusión\n`useToggle` es útil para manejar estados de activación/desactivación sin complicaciones.",
      },

      {
        slug: "usePrevious-hook",
        image: "https://picsum.photos/600/350?random=9",
        title: "Hook Personalizado: usePrevious",
        author: "John Doe",
        summary:
          "Aprende a crear un hook que guarda el valor anterior de un estado.",
        content:
          "## Hook Personalizado: usePrevious\n\nEl hook `usePrevious` permite acceder al valor anterior de un estado en React.\n\n### Creando el Hook\n```javascript\nimport { useRef, useEffect } from 'react';\n\nfunction usePrevious(value) {\n  const ref = useRef();\n  useEffect(() => {\n    ref.current = value;\n  });\n  return ref.current;\n}\n```\n\n### Usando el Hook\n```javascript\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  const prevCount = usePrevious(count);\n\n  return <p>Contador: {count} (anterior: {prevCount})</p>;\n}\n```\n\n### Conclusión\n`usePrevious` es ideal para comparar estados anteriores y actuales en tus componentes.",
      },

      {
        slug: "useDebounce-hook",
        image: "https://picsum.photos/600/350?random=10",
        title: "Hook Personalizado: useDebounce",
        author: "John Doe",
        summary:
          "Crea un hook que retrasa la actualización de un valor para evitar cambios rápidos.",
        content:
          "## Hook Personalizado: useDebounce\n\nEl hook `useDebounce` ayuda a controlar el ritmo de actualización de un valor.\n\n### Creando el Hook\n```javascript\nimport { useState, useEffect } from 'react';\n\nfunction useDebounce(value, delay) {\n  const [debouncedValue, setDebouncedValue] = useState(value);\n\n  useEffect(() => {\n    const handler = setTimeout(() => {\n      setDebouncedValue(value);\n    }, delay);\n\n    return () => {\n      clearTimeout(handler);\n    };\n  }, [value, delay]);\n\n  return debouncedValue;\n}\n```\n\n### Usando el Hook\n```javascript\nfunction SearchInput() {\n  const [query, setQuery] = useState('');\n  const debouncedQuery = useDebounce(query, 300);\n\n  return <input value={query} onChange={e => setQuery(e.target.value)} />;\n}\n```\n\n### Conclusión\n`useDebounce` es útil para optimizar búsquedas o eventos que se disparan frecuentemente.",
      },
      {
        slug: "renderizado-estatico-nextjs",
        image: "https://picsum.photos/600/350?random=11",
        title: "Renderizado Estático en Next.js",
        author: "John Doe",
        summary:
          "Explora cómo Next.js permite el renderizado estático para mejorar la velocidad y la SEO.",
        content:
          "## Renderizado Estático en Next.js\n\nEl renderizado estático genera HTML en el momento de la construcción del proyecto. Esto significa que las páginas se renderizan una vez y se sirven directamente como archivos HTML.\n\n### ¿Cómo Funciona?\nPuedes utilizar la función `getStaticProps` en tus páginas:\n\n```javascript\nexport async function getStaticProps() {\n  const data = await fetch('https://api.example.com/data');\n  return {\n    props: { data }, // se pasará a la página como props\n  };\n}\n```\n\n### Ventajas\n- **Velocidad**: Las páginas se sirven rápidamente desde el CDN.\n- **SEO Mejorado**: Los motores de búsqueda pueden indexar el contenido fácilmente.\n\n### Ejemplo\n```javascript\nfunction HomePage({ data }) {\n  return <div>{data.title}</div>;\n}\nexport default HomePage;\n```\n\n### Conclusión\nEl renderizado estático es ideal para contenido que no cambia con frecuencia, como blogs o páginas de productos.",
      },

      {
        slug: "renderizado-dinamico-nextjs",
        image: "https://picsum.photos/600/350?random=12",
        title: "Renderizado Dinámico en Next.js",
        author: "John Doe",
        summary:
          "Descubre cómo Next.js maneja el renderizado dinámico para contenido que cambia frecuentemente.",
        content:
          "## Renderizado Dinámico en Next.js\n\nEl renderizado dinámico permite a Next.js generar HTML en el momento de la solicitud, utilizando la función `getServerSideProps`.\n\n### ¿Cómo Funciona?\nEsta función se ejecuta en cada solicitud al servidor:\n\n```javascript\nexport async function getServerSideProps() {\n  const data = await fetch('https://api.example.com/data');\n  return {\n    props: { data },\n  };\n}\n```\n\n### Ventajas\n- **Contenido Actualizado**: Siempre obtienes datos frescos.\n- **Personalización**: Puedes renderizar contenido diferente basado en la solicitud.\n\n### Ejemplo\n```javascript\nfunction DynamicPage({ data }) {\n  return <div>{data.title}</div>;\n}\nexport default DynamicPage;\n```\n\n### Conclusión\nEl renderizado dinámico es ideal para aplicaciones que requieren datos actualizados, como dashboards o páginas de usuario.",
      },

      {
        slug: "incremental-static-regeneration-nextjs",
        image: "https://picsum.photos/600/350?random=13",
        title: "Regeneración Estática Incremental en Next.js",
        author: "John Doe",
        summary:
          "Aprende sobre la regeneración estática incremental, una característica potente de Next.js.",
        content:
          "## Regeneración Estática Incremental en Next.js\n\nLa regeneración estática incremental (ISR) permite a Next.js actualizar páginas estáticas en el momento de la solicitud.\n\n### ¿Cómo Funciona?\nPuedes definir un tiempo de revalidación utilizando `revalidate` en `getStaticProps`:\n\n```javascript\nexport async function getStaticProps() {\n  const data = await fetch('https://api.example.com/data');\n  return {\n    props: { data },\n    revalidate: 10, // revalida cada 10 segundos\n  };\n}\n```\n\n### Ventajas\n- **Mejor rendimiento**: Combina lo mejor del renderizado estático y dinámico.\n- **Datos frescos**: Las páginas se actualizan automáticamente después del tiempo definido.\n\n### Ejemplo\n```javascript\nfunction ISRPage({ data }) {\n  return <div>{data.title}</div>;\n}\nexport default ISRPage;\n```\n\n### Conclusión\nISR es ideal para sitios con contenido que cambia frecuentemente, como noticias o blogs.",
      },

      {
        slug: "renderizado-por-paginas-nextjs",
        image: "https://picsum.photos/600/350?random=14",
        title: "Renderizado por Páginas en Next.js",
        author: "John Doe",
        summary:
          "Descubre cómo Next.js permite la creación de rutas dinámicas y la carga de contenido específico.",
        content:
          "## Renderizado por Páginas en Next.js\n\nNext.js facilita la creación de rutas dinámicas a través de su sistema de archivos.\n\n### ¿Cómo Funciona?\nPuedes crear rutas dinámicas con corchetes:\n\n```\n/pages/posts/[id].js\n```\n\n### Uso de `getStaticPaths`\nPara prerenderizar rutas dinámicas, usa `getStaticPaths` junto con `getStaticProps`:\n\n```javascript\nexport async function getStaticPaths() {\n  const res = await fetch('https://api.example.com/posts');\n  const posts = await res.json();\n  const paths = posts.map(post => ({ params: { id: post.id } }));\n\n  return { paths, fallback: false };\n}\n```\n\n### Ventajas\n- **SEO Amigable**: Cada ruta está prerenderizada.\n- **Facilidad de Uso**: La estructura de archivos determina las rutas.\n\n### Conclusión\nEl renderizado por páginas en Next.js simplifica la creación de aplicaciones complejas y mejora la experiencia del usuario.",
      },
      {
        slug: "principio-s-o-l-i-d-srp",
        image: "https://picsum.photos/600/350?random=15",
        title: "Principio de Responsabilidad Única (SRP)",
        author: "John Doe",
        summary:
          "Explora el principio de responsabilidad única y su importancia en el diseño de software.",
        content:
          "## Principio de Responsabilidad Única (SRP)\n\nEl principio de responsabilidad única establece que un módulo o clase debe tener una sola razón para cambiar. Esto significa que cada clase debe enfocarse en una única tarea o responsabilidad.\n\n### Importancia\n- **Mantenibilidad**: Facilita la comprensión y el mantenimiento del código.\n- **Reutilización**: Clases con responsabilidades bien definidas son más fáciles de reutilizar.\n\n### Ejemplo\n```javascript\nclass UserService {\n  getUser(id) { /* Lógica para obtener un usuario */ }\n}\n\nclass UserNotifier {\n  sendNotification(user) { /* Lógica para enviar notificaciones */ }\n}\n```\n\n### Conclusión\nAplicar SRP ayuda a crear sistemas más robustos y menos acoplados, lo que a su vez mejora la calidad del software.",
      },

      {
        slug: "principio-s-o-l-i-d-ocp",
        image: "https://picsum.photos/600/350?random=16",
        title: "Principio de Abierto/Cerrado (OCP)",
        author: "John Doe",
        summary:
          "Aprende sobre el principio de abierto/cerrado y cómo promueve la extensibilidad del software.",
        content:
          "## Principio de Abierto/Cerrado (OCP)\n\nEl principio de abierto/cerrado indica que las entidades de software (clases, módulos, funciones) deben estar abiertas para la extensión, pero cerradas para la modificación. Esto significa que deberías poder agregar nuevas funcionalidades sin alterar el código existente.\n\n### Importancia\n- **Estabilidad**: Reducir cambios en el código existente disminuye el riesgo de introducir errores.\n- **Flexibilidad**: Permite adaptaciones sin la necesidad de modificar el código base.\n\n### Ejemplo\n```javascript\nclass Payment { /* Método para procesar pagos */ }\n\nclass CreditCardPayment extends Payment { /* Lógica específica para tarjetas de crédito */ }\n```\n\n### Conclusión\nEl OCP fomenta un diseño flexible y escalable, permitiendo que el software evolucione con facilidad.",
      },

      {
        slug: "principio-s-o-l-i-d-lsp",
        image: "https://picsum.photos/600/350?random=17",
        title: "Principio de Sustitución de Liskov (LSP)",
        author: "John Doe",
        summary:
          "Conoce el principio de sustitución de Liskov y su papel en la herencia de clases.",
        content:
          "## Principio de Sustitución de Liskov (LSP)\n\nEl principio de sustitución de Liskov establece que los objetos de una clase base deben poder ser reemplazados por objetos de una clase derivada sin alterar el comportamiento del programa. En otras palabras, las subclases deben ser intercambiables con sus superclases.\n\n### Importancia\n- **Consistencia**: Asegura que las clases derivadas mantengan el comportamiento esperado.\n- **Polimorfismo**: Permite un uso efectivo del polimorfismo en la programación orientada a objetos.\n\n### Ejemplo\n```javascript\nclass Bird { fly() { /* Lógica para volar */ } }\n\nclass Sparrow extends Bird { /* Lógica específica para el gorrión */ }\n\nfunction makeBirdFly(bird) { bird.fly(); }\n```\n\n### Conclusión\nEl LSP es esencial para garantizar que la herencia se use correctamente, manteniendo la integridad del software.",
      },

      {
        slug: "principio-s-o-l-i-d-isp",
        image: "https://picsum.photos/600/350?random=18",
        title: "Principio de Segregación de Interfaces (ISP)",
        author: "John Doe",
        summary:
          "Explora el principio de segregación de interfaces y su impacto en el diseño de software.",
        content:
          "## Principio de Segregación de Interfaces (ISP)\n\nEl principio de segregación de interfaces sugiere que los clientes no deben estar obligados a depender de interfaces que no utilizan. En lugar de una única interfaz grande, se deben crear interfaces más específicas y enfocadas.\n\n### Importancia\n- **Menos Dependencias**: Reduce el acoplamiento entre componentes.\n- **Mejor Mantenibilidad**: Facilita la comprensión del código y su modificación.\n\n### Ejemplo\n```javascript\ninterface Printer { print(); }\ninterface Scanner { scan(); }\n\nclass MultiFunctionPrinter implements Printer, Scanner { /* Implementación de ambas interfaces */ }\n```\n\n### Conclusión\nEl ISP promueve un diseño limpio y modular, mejorando la claridad y la usabilidad del software.",
      },

      {
        slug: "principio-s-o-l-i-d-dip",
        image: "https://picsum.photos/600/350?random=19",
        title: "Principio de Inversión de Dependencias (DIP)",
        author: "John Doe",
        summary:
          "Aprende sobre el principio de inversión de dependencias y su rol en la arquitectura de software.",
        content:
          "## Principio de Inversión de Dependencias (DIP)\n\nEl principio de inversión de dependencias establece que los módulos de alto nivel no deben depender de módulos de bajo nivel, sino de abstracciones. Además, las abstracciones no deben depender de detalles; los detalles deben depender de las abstracciones.\n\n### Importancia\n- **Desacoplamiento**: Reduce la dependencia entre módulos, mejorando la flexibilidad.\n- **Testabilidad**: Facilita la prueba de componentes al usar interfaces.\n\n### Ejemplo\n```javascript\ninterface NotificationService { sendNotification(); }\n\nclass EmailService implements NotificationService { /* Lógica de envío de correos */ }\n\nclass User { constructor(service) { this.service = service; } }\n```\n\n### Conclusión\nEl DIP es clave para construir sistemas desacoplados y adaptables, permitiendo que el software evolucione con menos fricción.",
      },
    ],
  });
  console.log("Database seeded.");
};

main()
  .then(() => {
    console.log("👌 Process completed");
  })
  .catch((e) => console.log(e));
