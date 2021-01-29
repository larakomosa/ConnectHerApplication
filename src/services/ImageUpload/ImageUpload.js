import React, { Component } from 'react'; /*8.5K (gzipped: 3.4K)*/
import { connect } from 'react-redux'; /*13.3K (gzipped: 4.8K)*/
import DropzoneS3Uploader from 'react-dropzone-s3-uploader'; /*26.5K(gzipped: 8.2K)*/
import mapStoreToProps from '../../redux/mapStoreToProps';

class ImageUpload extends Component {
  handleFinishedUpload = (info) => {
    this.setState({
      avatar: info.fileUrl,
    });
    const headshotInfo = {
      avatarPath: info.fileUrl,
      avatarId: this.props.store.user.id,
    };
    this.props.dispatch({
      type: 'SET_USER_HEADSHOT',
      payload: headshotInfo,
    });
  };

  render() {
    const uploadOptions = {
      server: 'http://localhost:5000',
    };

    const s3Url = 'https://innovateher2020.s3.amazonaws.com';

    return (
      <div style={{ marginBottom: '10px' }}>
        <DropzoneS3Uploader
          onFinish={this.handleFinishedUpload}
          s3Url={s3Url}
          maxSize={1024 * 1024 * 5}
          upload={uploadOptions}
        />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ImageUpload);
