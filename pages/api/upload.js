import multiparty from 'multiparty';
import {Storage} from '@google-cloud/storage';
import fs from 'fs';
import mime from 'mime-types';
import {mongooseConnect} from "@/lib/mongoose";
import {isAdminRequest} from "@/pages/api/auth/[...nextauth]";

const bucketName = 'heritage_selective';

export default async function handle(req,res) {
  await mongooseConnect();
  await isAdminRequest(req,res);

  const form = new multiparty.Form();
  const {fields,files} = await new Promise((resolve,reject) => {
    form.parse(req, (err, fields, files) => {


      if (err) reject(err);
      resolve({fields,files});
    });
  });
  console.log('length:', files.file.length);
  const client = new Storage({
    projectId: process.env.GCP_PROJECT_ID,
    credentials: {
      client_email: process.env.GCP_CLIENT_EMAIL,
      private_key: process.env.GCP_PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
  });
  
  const links = [];
  for (const file of files.file) {
  const ext = file.originalFilename.split('.').pop();
  const newFilename = Date.now() + '.' + ext;
  const bucket = client.bucket(bucketName);
  const fileData = fs.readFileSync(file.path);
  const contentType = mime.lookup(file.path);
  const gcsFile = bucket.file(newFilename);
  await gcsFile.save(fileData, {
    metadata: {contentType},
    public: true,
    validation: 'md5',
  });
  const link = `https://storage.googleapis.com/${bucketName}/${newFilename}`;
  links.push(link);
}
  return res.json({links});
}

