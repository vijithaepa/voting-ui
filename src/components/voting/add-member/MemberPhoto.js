import React, { useState, useContext } from 'react';
import FalconDropzone from 'components/common/FalconDropzone';
import avatarImg from 'assets/img/team/avatar.png';
import { isIterableArray } from 'helpers/utils';
import Avatar from 'components/common/Avatar';
import cloudUpload from 'assets/img/icons/cloud-upload.svg';
import { AuthWizardContext } from 'context/Context';
import Flex from 'components/common/Flex';
import { Col, Row } from 'react-bootstrap';

const PersonalForm = (/*{ register, errors, setValue }*/) => {
  const { user } = useContext(AuthWizardContext);
  const [avatar, setAvatar] = useState([
    ...(user.avater ? user.avater : []),
    { src: avatarImg }
  ]);

  return (
    <>
      <Row className="mb-3">
        <Col md={12}>
          <h5 className="mb-2 mb-md-0">Add image</h5>
        </Col>
        <Col md={12} className="px-9 px-md-7 px-xl-7">
          <Avatar
            size="5xl"
            rounded="soft"
            src={
              isIterableArray(avatar) ? avatar[0]?.base64 || avatar[0]?.src : ''
            }
          />
        </Col>
        <Col md>
          <FalconDropzone
            files={avatar}
            onChange={files => {
              setAvatar(files);
              // setValue('avatar', files);
            }}
            multiple={false}
            accept="image/*"
            placeholder={
              <>
                <Flex justifyContent="center">
                  <img src={cloudUpload} alt="" width={25} className="me-2" />
                  <p className="fs-0 mb-0 text-700">
                    Upload your profile picture
                  </p>
                </Flex>
                <p className="mb-0 w-75 mx-auto text-400">
                  Upload a 300x300 jpg image with a maximum size of 400KB
                </p>
              </>
            }
          />
        </Col>
      </Row>
    </>
  );
};

// PersonalForm.propTypes = {
//   register: PropTypes.func.isRequired,
//   errors: PropTypes.object,
//   setValue: PropTypes.func.isRequired
// };

export default PersonalForm;
