
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function InterestDetail() {
  const { id } = useParams();
  const [interest, setInterest] = useState(null);

  useEffect(() => {
    const fetchInterest = async () => {
      try {
        const response = await axios.get(`/api/interest/${id}`);
        setInterest(response.data);

        // setInterest(null);//ONLY FOR TEST
      } catch (error) {
        console.error('Error fetching interest:', error);
      }
    };

    fetchInterest();
  }, [id]);//副作用函数，仅当首次挂载和id改变时触发

  if (interest == null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>兴趣详情: {interest.title}</h1>
      <p>{interest.description}</p>
      {/* 显示更多兴趣详情 */}
    </div>
  );
}

export default InterestDetail;