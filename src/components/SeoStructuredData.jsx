import { Helmet } from 'react-helmet-async'

function SeoStructuredData({ schemas = [] }) {
  const normalizedSchemas = Array.isArray(schemas) ? schemas : [schemas]

  return (
    <Helmet>
      {normalizedSchemas.map((schema, index) => (
        <script key={`${schema['@type'] || 'schema'}-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}

export default SeoStructuredData
