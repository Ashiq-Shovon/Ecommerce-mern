const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "dpbkrwm2v",
  api_key: "877168141743913",
  api_secret: "kFTOH_GWxQ_rYVLRvgqFrB5Cnss",
});

const storage = new multer.memoryStorage();
async function imageUploadUtils(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return result;
}
const upload = multer({ storage });

module.exports = { upload, imageUploadUtils };
