import React, {
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { EditorState } from "draft-js";
import Editor, { createEditorStateWithText } from "@draft-js-plugins/editor";
import createInlineToolbarPlugin from "@draft-js-plugins/inline-toolbar";
import { DraftailEditor } from "draftail";
import "../../../styles/medium-editor.css";
import "../../../styles/editorStyles.css";
import "@draft-js-plugins/inline-toolbar/lib/plugin.css";

const text =
  "In this editor a toolbar shows up once you select part of the text …";

const SimpleInlineToolbarEditor = (): ReactElement => {
  const [plugins, InlineToolbar] = useMemo(() => {
    const inlineToolbarPlugin = createInlineToolbarPlugin();
    return [[inlineToolbarPlugin], inlineToolbarPlugin.InlineToolbar];
  }, []);

  const [editorState, setEditorState] = useState(() =>
    createEditorStateWithText("")
  );

  useEffect(() => {
    // fixing issue with SSR https://github.com/facebook/draft-js/issues/2332#issuecomment-761573306
    setEditorState(createEditorStateWithText(text));
  }, []);

  const editor = useRef<Editor | null>(null);

  const onChange = (value: EditorState): void => {
    setEditorState(value);
  };

  const focus = (): void => {
    editor.current?.focus();
  };

  return (
    <DraftailEditor
      editorState={editorState}
      onChange={onChange}
      placeholder="Tell your story..."
      plugins={plugins}
      ref={(element: Editor) => {
        editor.current = element;
      }}
    >
      <Editor
        editorKey="SimpleInlineToolbarEditor"
        editorState={editorState}
        onChange={onChange}
        plugins={plugins}
        ref={(element) => {
          editor.current = element;
        }}
      />
      <InlineToolbar />
    </DraftailEditor>
  );
};

export default SimpleInlineToolbarEditor;
