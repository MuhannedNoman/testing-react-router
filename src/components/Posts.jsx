import queryString from 'query-string';
import React from 'react';

const Posts = (props) => {
  const result = queryString.parse(props.location.search);
  console.log(result);
  return (
    <div>
      <h1>Posts</h1>
      Year: {props.match.params.year} , Month:{props.match.params.month}
    </div>
  );
};

export default Posts;
