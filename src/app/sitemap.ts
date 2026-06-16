import { MetadataRoute } from "next";
import { diseases } from "@/data/diseases";
import { services } from "@/data/services";
import { symptoms } from "@/data/symptoms";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "http://localhost:3000";

  // Static routes
  const staticRoutes = ["", "/enfermedades", "/servicios", "/sintomas", "/contacto", "/aviso-de-privacidad"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? (1.0 as const) : (0.8 as const),
    })
  );

  // Dynamic diseases/disorders
  const diseaseRoutes = diseases.map((d) => ({
    url: `${baseUrl}/enfermedades/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7 as const,
  }));

  // Dynamic services
  const serviceRoutes = services.map((s) => ({
    url: `${baseUrl}/servicios/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7 as const,
  }));

  // Dynamic symptoms
  const symptomRoutes = symptoms.map((sym) => ({
    url: `${baseUrl}/sintomas/${sym.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6 as const,
  }));

  return [...staticRoutes, ...diseaseRoutes, ...serviceRoutes, ...symptomRoutes];
}
