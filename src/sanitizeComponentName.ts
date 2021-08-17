const SANITIZATION_REGEXP = /^[a-zA-Z$]{1}[a-zA-Z0-9-_$]+$/;

// Only allows -, _, a-z, A-Z and numbers after the second character
// If it contains - (e.g. due-date), it becomes capitalized (e.g. dueDate)
function sanitizeComponentName(componentName: string) {
  if (SANITIZATION_REGEXP.test(componentName)) {
    if (componentName.includes("-")) {
      return capitalizeDashedString(componentName);
    } else {
      return componentName;
    }
  } else {
    throw new Error(`Invalid component name: ${componentName}`);
  }
}

function capitalizeDashedString(dashedString: string): string {
  const dashPosition = dashedString.indexOf("-");
  const hasDash = dashPosition > -1;

  if (hasDash) {
    const nextCharacter = dashedString[dashPosition + 1];
    if (nextCharacter) {
      const beforeDash = dashedString.slice(0, dashPosition);
      const capitalizedNextCharacter = nextCharacter.toUpperCase();
      const afterNextCharacter = capitalizeDashedString(
        dashedString.slice(dashPosition + 2),
      );
      return `${beforeDash}${capitalizedNextCharacter}${afterNextCharacter}`;
    } else {
      return dashedString.slice(0, -1);
    }
  } else {
    return dashedString;
  }
}

export default sanitizeComponentName;
