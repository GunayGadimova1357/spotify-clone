import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loading: React.FC = () => (
  <div className="flex justify-center items-center h-screen bg-black">
    <ClipLoader color="#1DB954" size={60} />
  </div>
);

export default Loading;