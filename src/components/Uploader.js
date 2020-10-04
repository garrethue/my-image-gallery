import React from "react";
import Uppy from "@uppy/core";
import DashboardModal from "@uppy/react/lib/DashboardModal";
import Tus from "@uppy/tus";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";

class Uploader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };

    this.uppy = new Uppy().use(Tus, {
      resume: true,
      endpoint: "/gallery/uppy-upload",
    });

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillUnmount() {
    this.uppy.close();
  }

  handleOpen() {
    this.setState({
      modalOpen: true,
    });
  }

  handleClose() {
    this.setState({
      modalOpen: false,
    });
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleOpen}>
          Upload an image{" "}
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-cloud-upload-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.5 14.5V11h1v3.5a.5.5 0 0 1-1 0z"
            />
          </svg>
        </button>
        <DashboardModal
          uppy={this.uppy}
          closeModalOnClickOutside
          open={this.state.modalOpen}
          onRequestClose={this.handleClose}
        />
      </div>
    );
  }
}

export default Uploader;
