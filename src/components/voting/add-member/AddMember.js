import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import MemberInfo from './MemberInfo';
import MemberHeader from './MemberHeader';
import MemberFooter from './MemberFooter';
import PoliticalHistory from './PoliticalHistory';
import MemberPhoto from './MemberPhoto';
import Education from './Education';
import Activities from './Activities';
import {
  getMemberConfig,
  getMembers,
  saveMember
} from '../../../services/ContainerService';
import MembersList from './MembersList';

const schema = yup
  .object({
    title: yup.string().required('This field is required.'),
    fullName: yup.string().required('This field is required.')
    // manufacturarName: yup.string().required('This field is required.'),
    // identificationNumber: yup.string().required('This field is required.'),
    // productSummery: yup.string().required('This field is required.'),
    // importStatus: yup.string().required('This field is required.'),
    // countryOrigin: yup.string().required('This field is required.'),
    // productCategory: yup.string().required('This field is required.'),
    // productSubCategory: yup.string().required('This field is required.'),
    // regularPrice: yup
    //   .number()
    //   .transform(value => (Number.isNaN(value) ? null : value))
    //   .nullable()
    //   .required('This field is required.')
  })
  .required();

const AddMember = () => {
  const submittedValues = {};
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      political: [],
      education: [],
      activities: []
    }
  });

  const { handleSubmit, reset } = methods;
  const [config, setConfig] = useState({ organasations: [] });
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getMembers().then(members => setMembers(members));
    getMemberConfig().then(config => setConfig(config));
  }, []);

  const onSubmit = data => {
    console.log('Form data', data);
    saveMember(data).then(res => console.log('Member saved', res));
    // ------- Get all object keys form data and set empty values to reset ------------
    const keys = Object.keys(data);
    for (const key of keys) {
      submittedValues[key] =
        key === 'political' || key === 'education' || key === 'activities'
          ? []
          : '';
    }
    reset({ ...submittedValues });
  };

  console.log('Add Member Main page ', config, members);

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="g-3">
          <Col md={12}>
            <MemberHeader />
          </Col>
          <Col md={8} xl={8} xxl={9}>
            <MemberInfo userStatus={config.userStatus} />
          </Col>
          <Col md={4} xl={4} xxl={3}>
            <div className="sticky-sidebar">
              {/*<ProductType />*/}
              {/*<MemberUpload />*/}
              <MemberPhoto />
              {/*<MemberTags />*/}
            </div>
          </Col>
          <Col md={12}>
            <PoliticalHistory parties={[config.organasations]} />
            <Education status={config.qualificationStatus} />
            <Activities categories={config.activityCategories} />
            {/*<ProductSpecifications />*/}
            {/*<ProductSpecifications />*/}
          </Col>
          <Col md={12}>
            <MemberFooter />
          </Col>
        </Row>
      </Form>
      <MembersList members={members} />
    </FormProvider>
  );
};

export default AddMember;
