import axios from 'axios';

const baseURL = 'https://docufy-api.kainovation.com';
//const baseURL = 'http://localhost:4000';

export async function sendFile(url, file) {
  console.log('calling');
  const response = await axios.put(
    url,
    { file },
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  );
  if (response.status == 200) {
    return { status: 200, data: response.data };
  } else {
    return { status: response.status, data: null };
  }
}

export async function getSignedURL(path) {
  const url = `${baseURL}/file/sign-upload?path=${path}`;
  const response = await axios.get(url);
  if (response.status == 200) {
    return { status: 200, data: response.data };
  } else {
    return { status: response.status, data: null };
  }
}
export async function getDirectoryData(path) {
  const url = `${baseURL}/file/files?path=${path}`;

  const response = await axios.get(url);
  if (response.status == 200) {
    return { status: 200, data: response.data };
  } else {
    return { status: response.status, data: null };
  }
}

export async function getFile(path) {
  const url = `${baseURL}/file/download?path=${path}`;
  const response = await axios.get(url);
  if (response.status == 200) {
    return { status: 200, data: response.data };
  } else {
    return { status: response.status, data: null };
  }
}