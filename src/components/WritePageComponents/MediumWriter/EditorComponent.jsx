import React from "react";
import { DraftailEditor } from "draftail";
import { EditorState, ContentState } from "draft-js";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import createSideToolbarPlugin from "draft-js-side-toolbar-plugin";
import "../../../styles/medium-editor.css";
import "draft-js/dist/Draft.css";
import "draftail/dist/draftail.css";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import "draft-js-side-toolbar-plugin/lib/plugin.css";
import { stateToHTML } from "draft-js-export-html";
import { stateFromHTML } from "draft-js-import-html";
import styled from "styled-components";
import { Spring, animated } from "react-spring";
import { connect } from "react-redux";
import { selectUser } from "../../../features/useSlices";
import { articleClient } from "../../../client";

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const sideToolbarPlugin = createSideToolbarPlugin();
const { SideToolbar } = sideToolbarPlugin;
const plugins = [inlineToolbarPlugin, sideToolbarPlugin];

const ButtonUpload = styled.button`
  background-color: #1a1a1a;
  border: 1px solid #ccc;
  border-radius: 15px;
  color: #fff;
  cursor: pointer;
  font-size: 1.2em;
  font-weight: bold;
  padding: 3px 5px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 30em;
  height: 10em;

  &:hover {
    color: #fffa;
  }
  &:focus {
    outline: none;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      editorState: EditorState.createEmpty(),
      isImage: false,
      image: null,
      isImageSpring: false,
      title: "",
      user: {},
    };
    this.changeState = this.changeState.bind(this);
    // const user = useSelector(selectUser);
    const mapStateToProps = (state) => ({
      user: state.user.user,
    });
  }
  changeState(state) {
    this.setState({
      editorState: state,
    });
  }

  setImage(url) {
    this.setState({ image: url });
  }

  setIsImage(state) {
    this.setState({ isImage: state });
  }

  htmlToString() {
    return stateToHTML(this.state.editorState.getCurrentContent());
  }
  stringToHtml() {
    const htmlString = window.sessionStorage.getItem("content");
    return stateFromHTML(htmlString);
  }

  createArticle() {
    const article = {
      title: this.state.title,
      content: this.htmlToString(),
    };
    articleClient
      .post("/create", article, {
        headers: {
          Authorization: `Bearer ${this.props.user.token}`,
        },
        data: this.isImage ? this.state.image : null,
      })
      .then((res) => {
        alert(res);
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    return (
      <div className="editor">
        <div className="title-input">
          <input
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={(e) => {
              this.setState({ title: e.target.value });
            }}
          />
          {this.state.isImage == true ? (
            <Spring scale={this.state.isImageSpring ? 1 : 0}>
              {(styles) => (
                <animated.img
                  style={styles}
                  src={this.state.image}
                  onClick={() => {
                    this.setState({ isImageSpring: !this.state.isImageSpring });
                    setTimeout(() => {
                      this.setIsImage(false);
                      this.setImage(null);
                    }, 500);
                  }}
                />
              )}
            </Spring>
          ) : (
            <ButtonUpload
              onClick={() => {
                this.inputRef.current.click();
              }}
            >
              Upload Image
            </ButtonUpload>
          )}
          <input
            ref={this.inputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            id="contained-button-file"
            onChange={(e) => {
              const file = e.target.files[0];
              this.setImage(URL.createObjectURL(file));
              this.setIsImage(true);
              this.setState({ isImageSpring: true });
            }}
          />
        </div>
        <div className="editor-container">
          <DraftailEditor
            editorState={this.state.editorState}
            onChange={this.changeState}
            placeholder="Tell your story..."
            plugins={plugins}
          />
          <InlineToolbar />
          <SideToolbar />
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              console.log(this.stringToHtml());
              this.setState({
                editorState: EditorState.createWithContent(this.stringToHtml()),
              });
            }}
          >
            Re-load
          </button>
          <button
            onClick={() => {
              window.sessionStorage.setItem("content", this.htmlToString());
            }}
          >
            save
          </button>
          <button
            onClick={() => {
              this.createArticle();
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    );
  }
}
export default connect(selectUser)(App);
