import PageShell from "@/app/components/PageShell";
import ServiceCard from "@/app/components/ServiceCard";
import { services } from "@/app/lib/data";

export default function ServicesPage() {
  return (
    <PageShell>
      <div className="mt-8 md:mt-12">
        <h2 className="text-xl font-bold text-heading md:text-2xl">
          My Services
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
