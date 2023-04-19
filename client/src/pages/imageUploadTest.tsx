import React, { useState, useRef } from 'react';

function ImageUploader() {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileInputChange = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result?.toString();
      if(base64String){
        setImage(base64String);
      }
      // Save the base64String to state or upload it to a server
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSaveImage = () => {
    if(image){
            // Create a new image element with the base64-encoded string as the src attribute
    const img = new Image();
    img.src = image!;
    // Use the canvas API to convert the image to a blob
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx?.drawImage(img, 0, 0);
    canvas.toBlob((blob) => {
      // Save the blob to a file or upload it to a server
    }, 'image/jpeg', 1);
  };
    }

  return (
    <div>
      <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileInputChange} />
      {image && <img src={image} alt="Uploaded image" />}
      {image && <button onClick={handleSaveImage}>Save Image</button>}
    </div>
  );
}

export default ImageUploader;
