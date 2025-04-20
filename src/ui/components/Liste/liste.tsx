/** @format */

"use client";

import React from "react";
import Typography from "@/ui/design-system/typography/typography";
import { FooterLink } from "@/types/app-links";
import ActiveLink from "../navigation/active-link";
import { LinkType } from "@/lib/link-type";
import clsx from "clsx";

interface Props {
  data: FooterLink[];
  className?: string;
}

export default function Liste({ data, className }: Props) {
  return (
    <div className={className}>
      {data.map((footerGroup, index) => {
        const isLastGroup = index === data.length - 1;

        return (
          <div key={footerGroup.label}>
            <Typography variant="navTitle" className="">
              {footerGroup.label}
            </Typography>

            <ul
              className={clsx(
                "divide-y divide-black/20 border-t border-black/20",
                !isLastGroup && ""
              )}>
              {footerGroup.links.map((link) => {
                const commonClasses =
                  "flex justify-between items-center py-4 hover:bg-gray-100 transition-colors";

                return (
                  <li key={link.baseUrl}>
                    {link.type === LinkType.INTERNAL ? (
                      <ActiveLink href={link.baseUrl} className={commonClasses}>
                        <span className="text-body2">{link.label}</span>
                      </ActiveLink>
                    ) : (
                      <a
                        href={link.baseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={commonClasses}
                        aria-label={`${link.label} (lien externe)`}>
                        <span className="text-body2">{link.label}</span>
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
