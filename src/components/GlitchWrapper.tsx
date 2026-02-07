import React from 'react';

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ children, className = "" }) => {
  // We need to extract the text content for the data-text attribute to work with CSS pseudo-elements
  // If children is a string, use it. If it's a complex node, we might need a prop for the raw text.
  // For safety/flexibility, let's strictly require a 'text' prop if we rely on attr(data-text),
  // OR we can just try to expect that children is the text.
  // Given the usage in HeroSection might involve nested spans (though currently they are just letters),
  // it's safer to ask for the text string explicitly for the effect.
  
  let textContent = "";
  if (typeof children === 'string') {
    textContent = children;
  } else if (React.isValidElement(children) && typeof children.props.children === 'string') {
     textContent = children.props.children;
  }
  
  // However, HeroSection maps letters. 
  // Ideally, we pass the full string to this component and let it render.
  
  return (
    <span className={`glitch-container ${className}`} data-text={textContent}>
      {children}
    </span>
  );
};

// Revamped approach: The component should probably just take the text string to be glitched.
// But the current HeroSection uses framer-motion spans for per-letter fade in.
// If we wrap that structure in a glitch container, the container's pseudo-elements (which are copies of the text)
// need to match the text.
// So we'll accept a `text` prop for the data attribute.

interface GlitchWrapperProps {
    text: string; // The text to display in the pseudo-elements
    children: React.ReactNode; // The actual content (e.g. the motion spans)
    className?: string;
}

const GlitchWrapper: React.FC<GlitchWrapperProps> = ({ text, children, className = "" }) => {
    return (
        <span className={`glitch-wrapper ${className}`} data-text={text}>
            {children}
        </span>
    );
};

export default GlitchWrapper;
