import React from "react";
import Accordion from "../../components/Accordion";
import Layout from "../../components/Layout/Layout";
import SeoHead from "../../components/SeoHead";
import interviewData from "/Data/interviewQuestions.json";
const Interview = () => {
  return (
    <>
      <SeoHead title="Selenium Ninja" />
      <Layout>
        <Accordion data={interviewData.selenium} />
      </Layout>
    </>
  );
};

export default Interview;
