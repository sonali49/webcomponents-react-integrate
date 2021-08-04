/* eslint-disable no-restricted-globals */
import React from "react";
import Header  from './Header/header';
import ArticleHeader from "./ArticleHeader/articleHeader";
import DataTable from "./DataTable/dataTable";
import { dataSet } from "../model/dataSet";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Fleet Portal" />
      <main>
        <article>
          <ArticleHeader title="Driver Evaluation" />
          <main className="content-page">
            <DataTable dataSet={dataSet} />
          </main>
        </article>
      </main>
    </div>
  );
}

export default App;
