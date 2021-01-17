import React, { useState } from 'react';
import Button from './Button';

const Screen = ({ theme, statusColor, controlBg, buttonsHolder }) => {
  const [value, setValue] = useState('0');
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleClick = (title) => {
    const num = parseFloat(value);

    if (title === 'AC') {
      setValue('0');
      setMemory(null);
      setOperator(null);
      return;
    }

    if (title === '±') {
      setValue((num * -1).toString());
      return;
    }

    if (title === '%') {
      setValue((num / 100).toString());
      setMemory(null);
      setOperator(null);
      return;
    }

    if (title === '.') {
      if (value.includes('.')) return;

      setValue(value + '.');
      return;
    }

    if (title === '+') {
      if (operator !== null) {
        if (operator === '+') {
          setMemory(memory + parseFloat(value));
        } else if (operator === '-') {
          setMemory(memory - parseFloat(value));
        } else if (operator === '×') {
          setMemory(memory * parseFloat(value));
        } else if (operator === '÷') {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue('0');
      setOperator('+');
      return;
    }
    if (title === '-') {
      if (operator !== null) {
        if (operator === '+') {
          setMemory(memory + parseFloat(value));
        } else if (operator === '-') {
          setMemory(memory - parseFloat(value));
        } else if (operator === '×') {
          setMemory(memory * parseFloat(value));
        } else if (operator === '÷') {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue('0');
      setOperator('-');
      return;
    }
    if (title === '×') {
      if (operator !== null) {
        if (operator === '+') {
          setMemory(memory + parseFloat(value));
        } else if (operator === '-') {
          setMemory(memory - parseFloat(value));
        } else if (operator === '×') {
          setMemory(memory * parseFloat(value));
        } else if (operator === '÷') {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue('0');
      setOperator('×');
      return;
    }
    if (title === '÷') {
      if (operator !== null) {
        if (operator === '+') {
          setMemory(memory + parseFloat(value));
        } else if (operator === '-') {
          setMemory(memory - parseFloat(value));
        } else if (operator === '×') {
          setMemory(memory * parseFloat(value));
        } else if (operator === '÷') {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue('0');
      setOperator('÷');
      return;
    }

    if (title === '=') {
      if (!operator) return;

      if (operator === '+') {
        setValue((memory + parseFloat(value)).toString());
      } else if (operator === '-') {
        setValue((memory - parseFloat(value)).toString());
      } else if (operator === '×') {
        setValue((memory * parseFloat(value)).toString());
      } else if (operator === '÷') {
        setValue((memory / parseFloat(value)).toString());
      }
      setMemory(null);
      setOperator(null);
      return;
    }

    if (value[value.length - 1] === '.') {
      setValue(value + title);
    } else {
      setValue(parseFloat(num + title).toString());
    }
  };

  return (
    <div className="screen" style={{ backgroundColor: theme }}>
      <div className="top" style={{ color: statusColor }}>
        <div className="left">4:20</div>
        <div className="right">
          <i className="fas fa-signal"></i>
          <i class="fas fa-wifi"></i>
          <i class="fas fa-battery-full"></i>
        </div>
      </div>
      <div className="control" style={{ color: statusColor }}>
        <div
          className="control__content"
          style={{ color: statusColor, backgroundColor: controlBg }}
        >
          <i class="fas fa-sun"></i>
          <i class="fas fa-moon"></i>
        </div>
      </div>
      <div className="inputArea" style={{ color: statusColor }}>
        {/* <div className="operation" style={{ fontSize: '16px' }}>
          {' '}
          308 <span>x</span> 42
        </div> */}
        {value}
      </div>
      <div className="buttons" style={{ backgroundColor: buttonsHolder }}>
        <Button
          title="AC"
          controlBg={controlBg}
          statusColor={statusColor}
          type="function"
          onButtonClick={handleClick}
        />
        <Button
          title="±"
          controlBg={controlBg}
          statusColor={statusColor}
          type="function"
          onButtonClick={handleClick}
        />
        <Button
          title="%"
          controlBg={controlBg}
          statusColor={statusColor}
          type="function"
          onButtonClick={handleClick}
        />
        <Button
          title="÷"
          controlBg={controlBg}
          statusColor={statusColor}
          type="operator"
          onButtonClick={handleClick}
        />
        <Button
          title="7"
          controlBg={controlBg}
          statusColor={statusColor}
          onButtonClick={handleClick}
        />
        <Button
          title="8"
          controlBg={controlBg}
          statusColor={statusColor}
          onButtonClick={handleClick}
        />
        <Button
          title="9"
          controlBg={controlBg}
          statusColor={statusColor}
          onButtonClick={handleClick}
        />
        <Button
          title="×"
          controlBg={controlBg}
          statusColor={statusColor}
          type="operator"
          onButtonClick={handleClick}
        />
        <Button
          title="4"
          controlBg={controlBg}
          statusColor={statusColor}
          onButtonClick={handleClick}
        />
        <Button
          title="5"
          controlBg={controlBg}
          statusColor={statusColor}
          onButtonClick={handleClick}
        />
        <Button
          title="6"
          controlBg={controlBg}
          statusColor={statusColor}
          onButtonClick={handleClick}
        />
        <Button
          title="-"
          controlBg={controlBg}
          statusColor={statusColor}
          type="operator"
          onButtonClick={handleClick}
        />
        <Button
          title="1"
          controlBg={controlBg}
          statusColor={statusColor}
          onButtonClick={handleClick}
        />
        <Button
          title="2"
          controlBg={controlBg}
          statusColor={statusColor}
          onButtonClick={handleClick}
        />
        <Button
          title="3"
          controlBg={controlBg}
          statusColor={statusColor}
          onButtonClick={handleClick}
        />
        <Button
          title="+"
          controlBg={controlBg}
          statusColor={statusColor}
          type="operator"
          onButtonClick={handleClick}
        />
        <Button
          title="0"
          controlBg={controlBg}
          statusColor={statusColor}
          onButtonClick={handleClick}
        />
        <Button
          title="."
          controlBg={controlBg}
          statusColor={statusColor}
          onButtonClick={handleClick}
        />
        <Button
          title="="
          controlBg={controlBg}
          statusColor={statusColor}
          type="operator"
          onButtonClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Screen;
