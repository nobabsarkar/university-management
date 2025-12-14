import { v2 as cloudinary } from 'cloudinary';

export const sendImageToCloudinary = () => {
  cloudinary.config({
    cloud_name: 'dei2eoj4b',
    api_key: '959959466236624',
    api_secret: 'good',
  });

  cloudinary.uploader.upload(
    'https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg',
    { public_id: 'olympic_flag' },
    function (error, result) {
      console.log(result);
    },
  );
};
