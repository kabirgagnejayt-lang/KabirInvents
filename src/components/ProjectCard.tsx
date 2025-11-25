"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Store, Lock, Archive } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: ImagePlaceholder;
  link?: string;
  storeLink?: string;
  status?: "Live" | "Discontinued" | "In Development" | "Archived";
}

export function ProjectCard({ title, description, image, link, storeLink, status }: ProjectCardProps) {
  const isDiscontinued = status === 'Discontinued';
  const isWip = status === 'In Development';
  const isArchived = status === 'Archived';
  const isInactive = isDiscontinued || isArchived || isWip;
  const hasLinks = (link || storeLink) && !isInactive;
  const isClickable = !isInactive && link;

  const CardLinkWrapper = ({ children }: { children: React.ReactNode }) => {
    if (!isClickable) {
      return <>{children}</>;
    }
    const isExternal = link?.startsWith('http');
    if (isExternal) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          {children}
        </a>
      );
    }
    return <Link href={link}>{children}</Link>;
  };

  return (
    <Card
      className={cn(
        "h-full overflow-hidden transition-all duration-300 ease-in-out flex flex-col group",
        isInactive ? "opacity-70" : "hover:shadow-xl hover:-translate-y-1",
        isWip && "border-dashed"
      )}
    >
      <CardHeader className="p-0 relative">
        <CardLinkWrapper>
          <div className="aspect-[4/3] w-full overflow-hidden">
            {image && (
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={600}
                height={450}
                className={cn(
                  "h-full w-full object-cover transition-transform duration-300",
                  !isInactive && "group-hover:scale-105"
                )}
                data-ai-hint={image.imageHint}
              />
            )}
          </div>
        </CardLinkWrapper>
        {status && (
          <Badge 
            variant={isDiscontinued ? "secondary" : isWip ? "outline" : isArchived ? "outline" : "default"}
            className="absolute top-3 right-3"
          >
             {isWip && <Lock className="mr-1 h-3 w-3" />}
             {isArchived && <Archive className="mr-1 h-3 w-3" />}
            {status}
          </Badge>
        )}
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">{title}</CardTitle>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardContent>
      {hasLinks && (
        <CardFooter className="flex-wrap gap-2 pt-0">
           {link && (
            <Button asChild variant="link" className="px-0 group/link text-base">
              <CardLinkWrapper>
                Visit Project <ArrowRight className="ml-1.5 h-4 w-4 transform transition-transform group-hover/link:translate-x-1" />
              </CardLinkWrapper>
            </Button>
          )}
          {storeLink && (
            <Button asChild variant="link" className="px-0 group/link text-base text-green-600 hover:text-green-700">
              <Link href={storeLink} target="_blank" rel="noopener noreferrer">
                <Store className="mr-2"/> View on Play Store
              </Link>
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
