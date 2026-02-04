import { useEffect, useState } from 'react';

export function useZoomNavigation(sectionId: string) {
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    const handleZoomTrigger = (e: CustomEvent) => {
      if (e.detail.targetSection === sectionId) {
        setIsZooming(true);
        setTimeout(() => setIsZooming(false), 1000);
      }
    };

    window.addEventListener('zoomToSection' as any, handleZoomTrigger as any);
    return () => window.removeEventListener('zoomToSection' as any, handleZoomTrigger as any);
  }, [sectionId]);

  return isZooming;
}
