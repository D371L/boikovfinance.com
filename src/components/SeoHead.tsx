import { useMemo } from 'react';
import { usePageSeo } from '@/hooks/usePageSeo';
import JsonLd from '@/components/JsonLd';
import { buildHomeJsonLd, buildHomeSeoMeta } from '@/lib/seo';

export default function SeoHead() {
  const meta = useMemo(() => buildHomeSeoMeta(), []);
  const jsonLd = useMemo(() => buildHomeJsonLd(), []);

  usePageSeo(meta);

  return <JsonLd data={jsonLd} />;
}
