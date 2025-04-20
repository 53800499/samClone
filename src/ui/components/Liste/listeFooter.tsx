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

export default function ListeFooter({ data, className }: Props) {
  return (
    <div className={className}>
      {data.map((footerGroup) => {

        return (
          <div key={footerGroup.label}>
            <Typography variant="navTitle" className="py-1">
              {footerGroup.label}
            </Typography>

            <ul
              className={clsx(
                ""
              )}>
              {footerGroup.links.map((link) => {
                const commonClasses =
                  "flex justify-between items-center py-1 hover:text-bold transition-colors";

                return (
                  <li key={link.baseUrl}>
                    {link.type === LinkType.INTERNAL ? (
                      <ActiveLink href={link.baseUrl} className={commonClasses}>
                        <span className="text-navBodyTitle">{link.label}</span>
                      </ActiveLink>
                    ) : (
                      <a
                        href={link.baseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={commonClasses}
                        aria-label={`${link.label} (lien externe)`}>
                        <span className="text-navBodyTitle">{link.label}</span>
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
