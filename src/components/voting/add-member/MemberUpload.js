import React, { useContext, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { getSize, isIterableArray } from 'helpers/utils';
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import Flex from 'components/common/Flex';
import cloudUpload from 'assets/img/icons/cloud-upload.svg';
import CardDropdown from 'components/common/CardDropdown';
import Avatar from '../../common/Avatar';
import FalconDropzone from '../../common/FalconDropzone';
import avatarImg from '../../../assets/img/team/avatar.png';
import { AuthWizardContext } from '../../../context/Context';

const MemberUpload = () => {
  const { setValue } = useFormContext();
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.png', '.jpg']
    },
    onDrop: acceptedFiles => {
      setValue('uploadedFiles', acceptedFiles);
      setFiles([
        // ...files,
        ...acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      ]);
    }
  });

  const handleRemove = path => {
    setFiles(files.filter(file => file.path !== path));
  };

  const { user } = useContext(AuthWizardContext);
  const [avatar, setAvatar] = useState([
    ...(user.avater ? user.avater : []),
    { src: avatarImg }
  ]);

  return (
    <Card className="mb-3">
      <Card.Header as="h6" className="bg-light">
        Add images
      </Card.Header>
      <Card.Body>
        <Row className="mb-12">
          <Col>
            <Flex
              justifyContent="center"
              className="align-self-center p-2 mb-2"
            >
              <div>
                <Avatar
                  size="5xl"
                  src={
                    isIterableArray(avatar)
                      ? avatar[0]?.base64 || avatar[0]?.src
                      : ''
                  }
                />
              </div>
            </Flex>
          </Col>
        </Row>
        <Row className="mb-12">
          <Col className="mb-3">
            <FalconDropzone
              files={avatar}
              onChange={files => {
                setAvatar(files);
                setValue('avatar', files);
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
      </Card.Body>
    </Card>
  );
};

export default MemberUpload;
