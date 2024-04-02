// AvatarComponent.jsx
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {cn} from "@/lib/utils.ts";

// @ts-ignore
export const AvatarComponent = ({ src, alt, fallbackText, cName }) => {
    return (
        <Avatar className={cn(cn(cName))}>
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback>{fallbackText}</AvatarFallback>
        </Avatar>
    );
};