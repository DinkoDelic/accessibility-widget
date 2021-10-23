import React from 'react';
import './App.css';
import AccessibilityButton from './components/AccessibilityButton.jsx';
import AccessibilityOptions from './AccessibilityOptions';

class App extends React.Component {
  render() {
    return (
      <div className="button-wrapper">
        <AccessibilityButton
          onClick={AccessibilityOptions.changeStyling}
          options={['zoom-120','zoom-130','zoom-150']}
          text="Increase font"
        ></AccessibilityButton>
        <AccessibilityButton
          onClick={AccessibilityOptions.changeStyling}
          options={['line-height-2','line-height-250','line-height-3']}
          text="Increase line height"
        ></AccessibilityButton>
        <AccessibilityButton
          onClick={AccessibilityOptions.changeStyling}
          options={['word-spacing-2px','word-spacing-4px','word-spacing-8px']}
          text="Increase word spacing"
        ></AccessibilityButton>
          <AccessibilityButton
          onClick={AccessibilityOptions.changeStyling}
          options={['text-align-center','text-align-left','text-align-right','text-align-justify']}
          text="Change text align"
        ></AccessibilityButton>
         <AccessibilityButton
          onClick={AccessibilityOptions.changeStyling}
          options={['dyslexia-font']}
          text="Dyslexia friendly font"
        ></AccessibilityButton>
         <AccessibilityButton
          onClick={AccessibilityOptions.changeStyling}
          options={['dark-contrast','light-contrast']}
          text="Change contrast"
        ></AccessibilityButton>
      </div>
    );
  }
}

export default App;
