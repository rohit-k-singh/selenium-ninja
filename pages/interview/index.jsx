import React, { useState } from "react";
import Accordion from "../../components/Accordion";
import Layout from "../../components/Layout/Layout";
import SeoHead from "../../components/SeoHead";
import interviewData from "/Data/interviewQuestions.json";
const Interview = () => {
  const [activeTab, setActiveTab] = useState(Object.keys(interviewData)[0]);
  return (
    <>
      <SeoHead title="Selenium Ninja" />
      <Layout>
        <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          {Object.keys(interviewData)?.map((d) => (
            <li class="mr-2" onClick={() => setActiveTab(d)}>
              <button
                aria-current={d}
                class={`${
                  activeTab === d
                    ? "text-black-500 bg-gray-100"
                    : " text-blue-600"
                } inline-block p-4 rounded-t-lg active dark:bg-gray-800 px-8 dark:text-blue-500 capitalize`}
              >
                {d}
              </button>
            </li>
          ))}
        </ul>

        <Accordion data={interviewData?.[activeTab]} />
      </Layout>
    </>
  );
};

export default Interview;
