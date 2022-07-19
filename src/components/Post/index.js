import React from 'react';
import parseEditorJsData from '../../helpers/parseEditorJsData';

const Post = ({ data }) => {
  return (
    <div>
      <div className="parsed">
        {parseEditorJsData({ content: data.description, scripts: true })}
      </div>
    </div>
  );
};

export default Post;
