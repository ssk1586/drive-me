import React, {useState} from 'react'
import { EditorState, ContentState, convertToRaw} from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import htmlToDraft from 'html-to-draftjs'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html'

import {
  EditorContainer,
  Button,
  Content
} from '../PolicyComponent/PolicyComponent.styled'
import { fetchNewPolicy } from '../../services/API';


const EditorComponent = ({ data, name }) => {
  
  const blocksFromHtml = htmlToDraft(data);
  const { contentBlocks, entityMap } = blocksFromHtml;

  const contentDataState = ContentState.createFromBlockArray(contentBlocks, entityMap);
  const editorDataState = EditorState.createWithContent(contentDataState);
  
  const [editorState, setEditorState] = useState(editorDataState);
  
  const onEditorStateChange = (editorStateData) => {
    setEditorState(editorStateData);
  };

  const handleSaveText = (name) => {
    let currentContentAsHTML = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    fetchNewPolicy(currentContentAsHTML, name);
  };

  return (
    <Content>
      <EditorContainer>
        {
          data?.length > 0 &&
          <Editor
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
          />
        }
      </EditorContainer>
      <Button onClick={()=>handleSaveText(name)}>Зберегти зміни</Button>
    </Content>
  );
}

export default EditorComponent;
