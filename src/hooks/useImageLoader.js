import { useRef, useCallback } from 'react';

export const useImageLoader = (canvasRef, setImageInfo) => {
  const drawImage = useCallback((imgElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = imgElement.width;
    canvas.height = imgElement.height;
    ctx.drawImage(imgElement, 0, 0);
    setImageInfo({
      width: imgElement.width,
      height: imgElement.height,
      colorDepth: 24,
    });
  }, [canvasRef, setImageInfo]);

  const loadImageFromUrl = useCallback(({ url }) => {
    const img = new Image();
    img.onload = () => {
      drawImage(img);
      URL.revokeObjectURL(url);
    };
    img.src = url;
  }, [drawImage]);

  return { loadImageFromUrl };
};