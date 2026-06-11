import Link from "next/link";
import StructuredData from "./StructuredData";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${baseUrl}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <StructuredData data={schema} />
      <nav aria-label="Breadcrumb" className="py-3 px-6 text-xs sm:text-sm text-teal-800 bg-stone-100/50 rounded-xl mb-6">
        <ol className="flex flex-wrap items-center gap-1.5 font-medium">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1.5">
              {index > 0 && <span aria-hidden="true" className="text-teal-400 font-normal">/</span>}
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-teal-950 hover:underline transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-stone-800 font-semibold">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
