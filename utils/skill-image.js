import html from '/public/svg/skills/html.svg';
import css from '/public/svg/skills/css.svg';
import javascript from '/public/svg/skills/javascript.svg';
import python from '/public/svg/skills/python.svg';
import github from '/public/svg/skills/github-logo.svg'; // Adjust path and name as needed
import selenium from '/public/svg/skills/selenium.svg';
import canva from '/public/svg/skills/canva.svg';
import figma from '/public/svg/skills/figma.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'python':
      return python;
    case 'github':
      return github; // Ensure this matches the actual import
    case 'selenium':
      return selenium;
    case 'canva':
      return canva;
    case 'figma':
      return figma;
    default:
      return defaultimage;
  }
};