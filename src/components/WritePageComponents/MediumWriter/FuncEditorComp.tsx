// import { ReactElement, useEffect, useMemo, useRef, useState } from "react";
// import { EditorState } from "draft-js";
// import Editor, { createEditorStateWithText } from "@draft-js-plugins/editor";
// import createInlineToolbarPlugin from "@draft-js-plugins/inline-toolbar";
// import createSideToolbarPlugin from "@draft-js-plugins/side-toolbar";
// import { DraftailEditor } from "draftail";
// import "@draft-js-plugins/inline-toolbar/lib/plugin.css";
// import "@draft-js-plugins/side-toolbar/lib/plugin.css";
// import "../../../styles/medium-editor.css";
// import "../../../styles/editorStyles.css";

// const text =
//   "In this editor a toolbars shows up once you select part of the text …";

// const SimpleInlineToolbarEditor = (): ReactElement => {
//   const [plugins, ToolBar] = useMemo(() => {
//     const inlineToolbarPlugin = createInlineToolbarPlugin();
//     const sideToolbarPlugin = createSideToolbarPlugin();
//     return [
//       [inlineToolbarPlugin, sideToolbarPlugin],
//       [inlineToolbarPlugin.InlineToolbar, sideToolbarPlugin.SideToolbar],
//     ];
//   }, []);

//   const [editorState, setEditorState] = useState(() =>
//     createEditorStateWithText("")
//   );

//   useEffect(() => {
//     // fixing issue with SSR https://github.com/facebook/draft-js/issues/2332#issuecomment-761573306
//     setEditorState(createEditorStateWithText(text));
//   }, []);

//   const editor = useRef<Editor | null>(null);

//   const onChange = (value: EditorState): void => {
//     setEditorState(value);
//   };

//   const focus = (): void => {
//     editor.current?.focus();
//   };

//   return (
//     <>
//       {/* <EditorState> */}
//       <DraftailEditor
//         editorKey="ToolbarEditor"
//         editorState={editorState}
//         onChange={onChange}
//         plugins={plugins}
//         ref={(element: Editor) => {
//           editor.current = element;
//         }}
//         onFocus={focus}
//       />
//       {ToolBar.map((ToolBar) => (
//         <ToolBar />
//       ))}
//       {/* </EditorState> */}
//     </>
//   );
// };

// export default SimpleInlineToolbarEditor;
