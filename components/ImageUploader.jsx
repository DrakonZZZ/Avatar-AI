'use client';

import { useEffect, useState } from 'react';
import { CldUploadButton as Cloudbutton } from 'next-cloudinary';
import Image from 'next/image';

const ImageUploader = ({ value, changehandler, check }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  //prevent hydration
  if (!mounted) {
    return null;
  }
  return (
    <div className="w-full flex flex-col justify-center items-center space-y-4">
      <Cloudbutton
        onUpload={(output) => changehandler(output.info.secure_url)}
        options={{
          maxFiles: 1,
        }}
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET}
      >
        <div className="flex flex-col items-center justify-center ] w-[16rem] md:w-[32rem] h-[10rem] space-y-2 p-4 border-4 border-dashed border-primary/10 rounded-lg hover:opacity-75 transition">
          <div className="relative h-14 w-14">
            <Image
              src={value || '/upload.svg'}
              className="rounded-lg object-cover"
              fill
              alt="image upload"
            />
          </div>
          <span className="text-sm font-semibold text-primary/20">
            UPLOAD IMAGE
          </span>
        </div>
      </Cloudbutton>
    </div>
  );
};

export default ImageUploader;
