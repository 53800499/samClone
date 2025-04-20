/** @format */

"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Typography from "@/ui/design-system/typography/typography";
import clsx from "clsx";

const links = [
  { label: "Service à la clientèle", href: "/service-client" },
  { label: "Bus Sédunois", href: "/bus-sedunois" },
  { label: "Offres d’emploi", href: "/emplois" },
  { label: "Changement d’horaire", href: "/changements-horaires" },
  { label: "Service des objets trouvés", href: "/objets-trouves" }
];
const nbrsTotal = links.length;
const dernierBar = nbrsTotal - 1;


export default function CarPostalElement() {
  return (
    <div className="max-w-xl mx-auto">
      <Typography variant="h2" className="py-8">
        Comment pouvons-nous vous aider ?
      </Typography>
      

      <ul className={clsx(
          "divide-y divide-black/20 border-t  border-black/20",
          dernierBar ? "" : "border-b"
        )}>
        {links.map(({ label, href }, index) => (
          <li key={index}>
            <Link
              href={href}
              className="flex justify-between items-center py-4 hover:bg-gray-100 transition-colors">
              <span className="text-body1">{label}</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
