import React from 'react';
import { DataBox, HashedBox, FlexColumnSpaceBetween, FlexRowSpaceBetween } from '../../Common';
import { Link } from 'react-router-dom';
import { useGlobal } from 'reactn';

const Origination = ({ op }) => {
  const [chain] = useGlobal('chain');
  return (
    <>
      <FlexRowSpaceBetween mt={10}>
        <FlexColumnSpaceBetween>
          <Link to={`/${op.block}`}>
            <DataBox title="Block" value={op.height} />
          </Link>
          <DataBox title="Gas Limit" value={op.gas_limit} />
        </FlexColumnSpaceBetween>
        <FlexColumnSpaceBetween>
          <DataBox title="Confirmations" value={chain.height-op.height} />
          <DataBox title="Gas Used" value={op.gas_used} />
        </FlexColumnSpaceBetween>
        <FlexColumnSpaceBetween>
          <Link to={`/cycle/${op.cycle}`}>
            <DataBox title="Cycle" value={op.cycle} />
          </Link>
          <DataBox title="Gas Price" valueType="currency-short" value={op.gas_price / 1000} />
        </FlexColumnSpaceBetween>
        <FlexColumnSpaceBetween>
          <DataBox title="Fee" value={op.fee} valueType="currency-short" />
          <DataBox title="Burned" value={op.burned} valueType="currency-short" />
        </FlexColumnSpaceBetween>
        <FlexColumnSpaceBetween>
          <DataBox title="Amount Transfered" value={op.volume} valueType="currency-full" />
          <DataBox title="Storage Limit" value={op.storage_limit} />
        </FlexColumnSpaceBetween>
        <FlexColumnSpaceBetween>
          <DataBox title="Date & Time" valueType="datetime" value={op.time} />
          <DataBox title="Storage Size" value={op.storage_size} />
        </FlexColumnSpaceBetween>
        <FlexColumnSpaceBetween>
          <HashedBox hash={op.manager} isCopy={false} short={true} typeName={'Manager'} />
          <DataBox title="Storage Paid" value={op.storage_paid} />
        </FlexColumnSpaceBetween>
      </FlexRowSpaceBetween>
    </>
  );
};

export default Origination;
