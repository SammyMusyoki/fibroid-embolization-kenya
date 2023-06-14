import React from 'react'
import HeroComponent from '../components/HeroComponent';
import SectionComponent from '../components/SectionComponent';
import { Faqs } from '../Data';
import FaqComponent from '../components/FaqComponent';

const FAQS = () => {

  return (
    <React.Fragment>
      <HeroComponent className="bg-faq">
        <div className="text-center sm:my-16">
          <h1 className="text-5xl text-gray-100 p-4 font-serif font-bold bg-green-500 bg-opacity-40 border-green-300 border-2">
            Frequently Asked Questions
          </h1>
        </div>
      </HeroComponent>
      <SectionComponent className="bg-green-100">
        <div className="text-center -mt-12 mb-12">
          <p className="text-lg font-medium">
            Here are some of the frequently asked questions about fibroids and
            fibroid embolization.
          </p>
        </div>

        <ul className="space-y-4">
            {
                Faqs.map((item) => {
                    return (
                      <FaqComponent
                        key={item.id}
                        item={item}
                      />
                    );
                }
            )}
        </ul>
      </SectionComponent>
    </React.Fragment>
  );
}

export default FAQS
