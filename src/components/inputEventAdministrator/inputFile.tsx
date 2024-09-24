import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { InputFileProps } from '@/interfaces/IInputFile';
export function InputFile({ onImageUpload }: InputFileProps) {
  const [loading, setLoading] = useState<boolean>(false);
  // const [images, setimages] = useState<string | null>(null);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append(
      'upload_preset',
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || '',
    );

    try {
      setLoading(true);
      // Cargar imagen a Cloudinary
      const response = await fetch(
        process.env.NEXT_PUBLIC_CLOUDINARY_API_URL || '',
        {
          method: 'POST',
          body: formData,
        },
      );

      if (response.ok) {
        const data = await response.json();
        const imageUrl = data.secure_url; // URL de la imagen subida

        // setimages(imageUrl);
        setLoading(false);
        if (onImageUpload) {
          onImageUpload(imageUrl);
        }
        // Llamada al backend para enviar el enlace de la imagen
        await sendImageUrlToBackend(imageUrl);
      } else {
        console.error('Error al subir la imagen');
        setLoading(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  // Función para enviar el URL de la imagen al backend
  const sendImageUrlToBackend = async (url: string) => {
    try {
      const response = await fetch('http://localhost:3005/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageUrl: url }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar la imagen al backend');
      }

      console.log('Imagen enviada exitosamente al backend');
    } catch (error) {
      console.error('Error al enviar la imagen al backend:', error);
    }
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 text-blue-500 cursor-pointer">
      <Label htmlFor="picture" className="mt-2">
        Miniatura del evento:
      </Label>
      <Input
        id="picture"
        type="file"
        onChange={handleImageUpload}
        className="cursor-pointer"
      />
      {loading ? <h3>Cargando imagen...</h3> : null}
    </div>
  );
}
