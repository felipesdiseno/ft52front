"use client";
import * as React from "react";
import { CustomCard } from "@/src/components/ui/customCard";
import PageContent from "@/src/components/ui/PageContent";
import { CarouselSize } from "@/src/components/ui/CarouselSize";

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
        
    
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>  
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>

     
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}> 
        <PageContent />
      </div>
    </div>
  );
}
