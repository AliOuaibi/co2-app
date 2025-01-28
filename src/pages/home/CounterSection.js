import React, {useState} from "react";

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Counter = () => {

  const [state, setState] = useState(true);

  const counters = [
    {
      countNum: 3,
      countTitle: 'FORMATEURS',
      counterSubtext: 'FORMATEUR',
      online: null
    },
    {
      countNum: 100,
      countTitle: 'E-Learning',
      online: true
    },
    {
      countNum: 4,
      countTitle: 'NOS FORMATIONS',
      online: null
    }

  ];

  const countUpOnline = (counter) => {
    if (counter.online) {
      return (
        <>
          <CountUp
            start={0}
            end={counter.countNum}
            duration={5}
            onEnd={() => setState(false)}
          />
          %
        </>
      );
    }
    return (
      <>
        +<CountUp
        start={state ? 0 : counter.countNum}
        end={counter.countNum}
        duration={5}
        onEnd={() => setState(false)}
      />
      </>
    );
  };

  return (
    <div className="count__area pb---110">
      <div className="container count__width">
        <div className="row">
          <div className="col-xxl-11 col-xl-11 col-lg-11 offset-lg-1">
            {counters &&
              <div className="row">
                {counters.map((counter, num) => (
                  <div key={num} className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 wow animate__fadeInUp"
                       data-wow-duration="0.3s">
                    <div className="count__content">
                      <p className="count__content--paragraph">{counter.countTitle}</p>
                      <h3 className="count__content--title-1 counter">
                        {countUpOnline(counter)}
                        {({countUpRef, start}) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef}/>
                          </VisibilitySensor>
                        )}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
export default Counter;