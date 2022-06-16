// import React from "react";
// import { DraftailEditor } from "draftail";
// import { EditorState } from "draft-js";
// import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
// import createSideToolbarPlugin from "draft-js-side-toolbar-plugin";
// import "../../../styles/medium-editor.css";
// import "draft-js/dist/Draft.css";
// import "draftail/dist/draftail.css";
// import "draft-js-inline-toolbar-plugin/lib/plugin.css";
// import "draft-js-side-toolbar-plugin/lib/plugin.css";
// import styled from "styled-components";
// import { Spring, animated } from "react-spring";
// const inlineToolbarPlugin = createInlineToolbarPlugin();
// const { InlineToolbar } = inlineToolbarPlugin;
// const sideToolbarPlugin = createSideToolbarPlugin();
// const { SideToolbar } = sideToolbarPlugin;
// const plugins = [inlineToolbarPlugin, sideToolbarPlugin];

// const ButtonUpload = styled.button`
//   background-color: #1a1a1a;
//   border: 1px solid #ccc;
//   border-radius: 15px;
//   color: #fff;
//   cursor: pointer;
//   font-size: 1.2em;
//   font-weight: bold;
//   padding: 3px 5px;
//   position: relative;
//   text-align: center;
//   text-decoration: none;
//   width: 30em;
//   height: 10em;

//   &:hover {
//     color: #fffa;
//   }
//   &:focus {
//     outline: none;
//   }
// `;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.inputRef = React.createRef();
//     this.state = {
//       editorState: EditorState.createEmpty(),
//       isImage: false,
//       image: null,
//       isImageSpring: false,
//     };
//     this.changeState = this.changeState.bind(this);
//   }
//   changeState(state) {
//     this.setState({
//       editorState: state,
//     });
//   }

//   setImage(url) {
//     this.setState({ image: url });
//   }

//   setIsImage(state) {
//     this.setState({ isImage: state });
//   }

//   render() {
//     return (
//       <div className="editor">
//         <div className="title-input">
//           <input type="text" placeholder="Title" />
//           {this.state.isImage == true ? (
//             <Spring scale={this.state.isImageSpring ? 1 : 0}>
//               {(styles) => (
//                 <animated.img
//                   style={styles}
//                   src={this.state.image}
//                   onClick={() => {
//                     this.setState({ isImageSpring: !this.state.isImageSpring });
//                     setTimeout(() => {
//                       this.setIsImage(false);
//                       this.setImage(null);
//                     }, 500);
//                   }}
//                 />
//               )}
//             </Spring>
//           ) : (
//             <ButtonUpload
//               onClick={() => {
//                 this.inputRef.current.click();
//               }}
//             >
//               Upload Image
//             </ButtonUpload>
//           )}
//           <input
//             ref={this.inputRef}
//             type="file"
//             accept="image/*"
//             style={{ display: "none" }}
//             id="contained-button-file"
//             onChange={(e) => {
//               const file = e.target.files[0];
//               this.setImage(URL.createObjectURL(file));
//               this.setIsImage(true);
//               this.setState({ isImageSpring: true });
//             }}
//           />
//         </div>
//         <div className="editor-container">
//           <DraftailEditor
//             editorState={this.state.editorState}
//             onChange={this.changeState}
//             placeholder="Tell your story..."
//             plugins={plugins}
//           />
//           <InlineToolbar />
//           <SideToolbar />
//         </div>
//         <div className="buttons">
//           <button>Confirm</button>
//           <button
//             onClick={() => {
//               console.log(this.state.editorState.getCurrentContent());
//             }}
//           >
//             save
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
// export default App;
