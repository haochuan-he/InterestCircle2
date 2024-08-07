import React from 'react';

function InterestDetail({ match }) {
  const id = match.params.id;
  return <h1>兴趣详情: {id}</h1>;
  //完成个人所在兴趣圈内容展示
}

export default InterestDetail;