# Proyecto: 

Pagina web Hotel Dubrava

# Descripcion del Proyecto

Este proyecto encuadra el front-end de la pagina del Hotel Dubrava donde mostramos las caracteristicas de los servicios que ofrece el hotel tales como sus habitaciones, servicios en general, su historia, su ubicacion, las promociones u ofertas vigentes, cuenta con el apartado de contactos y un check in en linea

# Imagenes de la pagina web

<img src="/hotelDubrava/public/img/readme-page-inicio.jpg">
<img src="/hotelDubrava/public/img/readme-page-nosotros.jpg">
<img src="/hotelDubrava/public/img/readme-page-habitaciones.jpg">
<img src="/hotelDubrava/public/img/readme-page-promociones.jpg">
<img src="/hotelDubrava/public/img/readme-page-checkIn.jpg">
<img src="/hotelDubrava/public/img/readme-page-servicios.jpg">
<img src="/hotelDubrava/public/img/readme-page-contacto.jpg">
<img src="/hotelDubrava/public/img/readme-page-ubicacion.jpg">

# Instrucciones de Instalación y Uso

Este proyecto cuenta los siguientes scrypts para su uso dependiendo del entorno en cual se quiera trabajar:

## Desarrollo (Local)

"scripts": {
    "dev": "vite",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",    
    "scanTailwind": "npx tailwindcss -i ./src/css/config.css -o ./src/css/style.css --watch"
},

### Iniciando el servidor de desarrollo local

npm run dev

### Iniciando el servidor de desarrollo con scanTailwwind

npm run scanTailwind

## Deploy

Para realizar una despliegue a un servidor de producción es necesario utilizar el siguiente scripts:

"scripts": {
    "build": "vite build",
    "preview": "vite preview"
},

### Generando el Build de Producción

npm run build

### Previsualizando el sitio web generado

npm run preview

## Estructura de Carpetas y Archivos

La estructura de carpetas y archivos que encontrará dentro de este repositorio está diseñada para facilitar la organización de la sigiente manera:

<img src="/hotelDubrava/public/img/readme-estructura.jpg">

## Tecnologías Utilizadas

* ViteJS como motor de renderizado de HTML y JSX.
* ReactJS como framework principal para la construcción de componentes interactivos.
* JavaScript para tipado estático y evitar errores en tiempo de ejecución.
* TailwindCSS para una gestión eficiente de clases CSS, facilitando la creación de diseños responsivos y accesible.

## Funcionalidades Destacadas
La aplicación Hotel Dubrava cuenta con las siguientes funcionalidades destacadas:

1. **Formularios de contacto**: Los formularios se encuentran integrados directamente en los componentes de la pagina de Contacto, permitiendo al usuario contactarse a travez de este medio con el Hotel Dubrava mediante e-mail corporativo.
2. **Formularios de checkIn**: Los formularios se encuentran integrados directamente en los componentes de la pagina de Check In, los datos proviniente de este formulario seran administrados por el backend del Hotel Dubrava el cual guardara los datos de manera segura en una base de datos, la cual permitira la persistencia de los mismos.
3. **Mapa de Ubicación**: En la pagina Ubicacion se mostrara el mapa con la ubicación exacta del hotel, permitiendo al usuario verificar su posición geográfica.
4. **Enlaces a Páginas Relevantes**: En el Footer principal de la  pagina del hotel, se encuentran los enlaces a las redes sociales pertenecientes al hotel, estos enlaces se abren en nuevas paginas y resguardan la seguridad de los datos de las paginas de procedencias.

## Licencia
Este proyecto se encuentra bajo licencia CC BY-NC-ND 4.0. Esta licencia permite lo sigiuente:
**Compartir**: copiar y redistribuir el material en cualquier medio o formato.
El licenciante no puede revocar estas libertades siempre y cuando usted siga los términos de la licencia.
En los siguientes términos:
**Atribución** — Debe dar el crédito adecuado , proporcionar un enlace a la licencia e indicar si se realizaron cambios . Puede hacerlo de cualquier manera razonable, pero no de ninguna manera que sugiera que el licenciante lo respalda a usted o a su uso.
**No comercial** — No puede utilizar el material con fines comerciales .
**Sin derivados** : si remezcla, transforma o construye sobre el material, no puede distribuir el material modificado.
