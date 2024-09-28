import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { InputFileProps } from '@/interfaces/IInputFile';

export function InputFile({ onImageUpload }: InputFileProps) {
  const [loading, setLoading] = useState<boolean>(false);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
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
      const response = await fetch(
        process.env.NEXT_PUBLIC_CLOUDINARY_API_URL || '',
        {
          method: 'POST',
          body: formData,
        },
      );

      if (response.ok) {
        const data = await response.json();
        const imageUrl = data.secure_url;
        onImageUpload(imageUrl); // Envía la URL de la imagen al componente padre
      } else {
        console.error('Error al subir la imagen');
      }
    } catch (error) {
      console.error('Error en la carga de la imagen:', error);
    } finally {
      setLoading(false); // Finaliza la carga
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
      {loading && <h3>Cargando imagen...</h3>}
    </div>
  );
}
