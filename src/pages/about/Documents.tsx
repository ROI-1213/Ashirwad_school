import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const Documents = () => {
  const documents = [
    { title: "Mandatory Public Disclosure (SARAS 7.0)", href: "/documents/mandatory-disclosure-details.pdf?v=20261030" },
    { title: "Society Registration", href: "/documents/society-registration.pdf?v=20261012" },
    { title: "Recognition Certificate", href: "/documents/recognition-certificate.pdf?v=20261012" },
    { title: "Building Safety Certificate", href: "/documents/building-safety-certificate.pdf?v=20261012" },
    { title: "Fire Safety Certificate", href: "/documents/fire-safety.pdf?v=20261012" },
    { title: "Water Sanitation Certificate", href: "/documents/water-sanitation.pdf?v=20261012" },
    { title: "Water Test Report", href: "/documents/water-test.pdf?v=20261012" },
    { title: "PTA (Parent-Teacher Association)", href: "/documents/pta.pdf?v=20261012" },
    { title: "SMC (School Management Committee)", href: "/documents/school-managing-committee.pdf?v=20261012" },
    { title: "Fee Structure", href: "/documents/fee-structure.pdf?v=20261012" },
    { title: "Self Certificate", href: "/documents/self-certification-proforma.pdf?v=20261012" },
    { title: "Academic Calendar", href: "/documents/academic-calendar.pdf?v=20261012" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading font-bold mb-4">Mandatory Disclosure</h1>
          <div className="w-24 h-1.5 bg-white mx-auto rounded-full mb-6 opacity-80"></div>
          <p className="text-xl max-w-2xl mx-auto">Important mandatory public disclosures and school documents</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-card rounded-lg shadow-md border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-6 py-5 font-semibold w-24 border-b border-primary/20">Sl No</th>
                    <th className="px-6 py-5 font-semibold border-b border-primary/20">Document Name</th>
                    <th className="px-6 py-5 font-semibold text-right border-b border-primary/20">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc, index) => (
                    <tr 
                      key={index} 
                      className="border-b border-border last:border-0 even:bg-muted/40 hover:bg-muted/70 transition-colors"
                    >
                      <td className="px-6 py-4 font-bold text-muted-foreground">{index + 1}</td>
                      <td className="px-6 py-4 text-foreground/90 font-medium">{doc.title}</td>
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-2">
                          <Button variant="default" size="sm" className="gap-2" asChild>
                            <a href={doc.href} target="_blank" rel="noopener noreferrer">
                              <Eye className="w-4 h-4" /> View
                            </a>
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documents;
