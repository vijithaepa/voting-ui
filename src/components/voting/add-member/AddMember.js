import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import MemberInfo from './MemberInfo';
import MemberHeader from './MemberHeader';
import MemberFooter from './MemberFooter';
import PoliticalHistory from './PoliticalHistory';
import MemberPhoto from './MemberPhoto';

const schema = yup
  .object({
    productName: yup.string().required('This field is required.'),
    manufacturarName: yup.string().required('This field is required.'),
    identificationNumber: yup.string().required('This field is required.'),
    productSummery: yup.string().required('This field is required.'),
    importStatus: yup.string().required('This field is required.'),
    countryOrigin: yup.string().required('This field is required.'),
    productCategory: yup.string().required('This field is required.'),
    productSubCategory: yup.string().required('This field is required.'),
    regularPrice: yup
      .number()
      .transform(value => (Number.isNaN(value) ? null : value))
      .nullable()
      .required('This field is required.')
  })
  .required();

const AddMember = () => {
  const submittedValues = {};
  const methods = useForm({
    resolver: yupResolver(schema)
    // defaultValues: {
    //   specifications: [
    //     {
    //       label: 'Processor',
    //       property: '2.3GHz quad-core Intel Core i5'
    //     },
    //     {
    //       label: 'Memory',
    //       property: '8GB of 2133MHz LPDDR3 onboard memory'
    //     },
    //     {
    //       label: 'Brand name',
    //       property: 'Apple'
    //     }
    //   ]
    // }
  });
  const { handleSubmit, reset } = methods;

  const onSubmit = data => {
    console.log(data);
    // ------- Get all object keys form data and set empty values to reset ------------
    const keys = Object.keys(data);
    for (const key of keys) {
      submittedValues[key] = '';
    }
    reset({ ...submittedValues });
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="g-3">
          <Col md={12}>
            <MemberHeader />
          </Col>
          <Col xl={8} xxl={9}>
            <MemberInfo />
          </Col>
          <Col xl={4} xxl={3}>
            <div className="sticky-sidebar">
              {/*<ProductType />*/}
              {/*<MemberUpload />*/}
              <MemberPhoto />
              {/*<MemberTags />*/}
            </div>
          </Col>
          <Col md={12}>
            <PoliticalHistory />
            {/*<ProductSpecifications />*/}
            {/*<ProductSpecifications />*/}
            {/*<ProductSpecifications />*/}
            {/*<ProductSpecifications />*/}
          </Col>
          <Col md={12}>
            <MemberFooter />
          </Col>
        </Row>
      </Form>
    </FormProvider>
  );
};

export default AddMember;
