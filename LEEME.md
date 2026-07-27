# ETAPA 1 — SEO de todas las páginas

Este paquete agrega SEO individual a las páginas existentes sin modificar el diseño.

## Archivos
- `seo.js`: titles, descriptions, canonical, Open Graph, Twitter Cards, H1 y Schema.org por página.
- `APLICAR-SEO.py`: agrega automáticamente la referencia a `seo.js` en todos los HTML.
- `sitemap.xml`: mapa del sitio actualizado.

## Aplicación
1. Copiá estos tres archivos a la carpeta principal del repositorio.
2. Ejecutá una sola vez:
   `python APLICAR-SEO.py`
3. Subí a GitHub:
   - todos los HTML modificados;
   - `seo.js`;
   - `sitemap.xml`.
4. No hace falta subir nuevamente `APLICAR-SEO.py`.
5. Commit sugerido:
   `Optimiza SEO individual de todas las páginas`

## Páginas configuradas
Home, Servicios, Personas y Familias, Empresas y Emprendedores, Familia,
Sucesiones, Jubilaciones, Empresas, Marcas, Payroll, Guías y Cuota Alimentaria.

## Nota técnica
La solución conserva el contenido y diseño actuales. Los metadatos y datos
estructurados se aplican según la URL de cada página.
