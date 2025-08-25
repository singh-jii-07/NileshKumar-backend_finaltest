import File from '../Module/Coudinary.js'

export const uploadFile = async(req, res)=>{
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