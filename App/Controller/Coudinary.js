import File from '../Module/Coudinary.js'

 const uploadFile = async(req, res)=>{
  try {
    const {fileName,fileUrl}=req.body
    if(!fileName||!fileUrl){
         return res.status(400).json({
                message: "All fields are required"
            })
    }
    const file =new File({
fileName,
fileUrl
    })
    await file.save()

    res.json({
      message: 'File uploaded successfully',
      file
    });
  } 
  catch (error) {
    res.status(500).json({ error: error.message });
}
};
const downloadFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) return res.status(404).json({ message: "File not found" });

    if (Date.now() > file.expiryTime.getTime()) {
      return res.status(410).json({ message: "Download link expired" });
    }

    file.downloadCount++;
    await file.save();

    if (req.query.redirect === "1") {
      return res.redirect(file.fileURL);
    }

    res.json({
      url: file.fileURL,
      filename: file.filename,
      downloads: file.downloadCount,
    });
  } catch (err) {
    console.error("Error in downloading the files", err.message);
    return res.status(500).json({message: "Interval server error"});
}
};

export {uploadFile,downloadFile}