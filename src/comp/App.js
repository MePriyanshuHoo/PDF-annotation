import React, { useState , useEffect } from 'react';
import DocList from './DocList';
import DocPage from './DocPage';

function App() {
  const [showpage, setShowpage] = useState(0);
  const [documentList, setDocumentList] = useState({});
  const URL = "https://api.dev.classforma.com:5010/get_app_tasks?app_id=menu_parser"

  useEffect(() => {
      fetch(URL)
          .then((list) => list.json())
          .then((data) => {
              setDocumentList(data);
          })
          .catch((err) => {
              console.log("error", err);
          })
  }, [])

  const PageHandler = (e) => {
    setShowpage(e.target.value)
  }

  const PageContent = () => {
    if (showpage == 0) {
      return <DocList documentList = {documentList} PageHandler={PageHandler} />
    }
    else {
      return <div>
        {`${showpage}th Page`}
        <button onClick={PageHandler} value={0}> reset </button>
        <DocPage task = {documentList.tasks[showpage - 1]}/>
      </div>
    }
  };

  return (
    <div>
      {showpage}
      <PageContent/>
    </div>
  );
}

export default App;
