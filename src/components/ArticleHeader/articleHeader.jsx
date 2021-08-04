
import React from "react";
import "./articleHeader.scss";

export const ArticleHeader = ({ title }) => {
  
  return (
    <header className="article-header">
      <span>{title}</span>
    </header>
  );
};

export default ArticleHeader;