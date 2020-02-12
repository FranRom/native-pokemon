import React from 'react';
import { shallow } from 'enzyme';

import AdditionalInfo from './AdditionalInfo';

const MOCKED_DATA = {
  height: 50,
  weight: 50,
  order: 30
};

describe('AdditionalInfo', () => {
  const wrapper = shallow(
    <AdditionalInfo
      height={MOCKED_DATA.height}
      weight={MOCKED_DATA.weight}
      order={MOCKED_DATA.order}
    />
  );

  it('should render the expected info fields', () => {
    expect(
      wrapper.find('[data-test="additional-info-height"]').exists()
    ).toBeTruthy();
    expect(
      wrapper.find('[data-test="additional-info-weight"]').exists()
    ).toBeTruthy();
    expect(
      wrapper.find('[data-test="additional-info-order"]').exists()
    ).toBeTruthy();
  });
  it('should render the value received as prop', () => {
    expect(
      wrapper
        .find('[data-test="additional-info-height-value"]')
        .render()
        .text()
    ).toEqual(MOCKED_DATA.height.toString());
    expect(
      wrapper
        .find('[data-test="additional-info-weight-value"]')
        .render()
        .text()
    ).toEqual(MOCKED_DATA.weight.toString());
    expect(
      wrapper
        .find('[data-test="additional-info-order-value"]')
        .render()
        .text()
    ).toEqual(MOCKED_DATA.order.toString());
  });
});
