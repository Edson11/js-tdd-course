const city = 'Dublin';
const something = 'Guinness';
const otherThing = 'Leprechaums';

function green(template, ...values) {
  return template.reduce((accumulator, part, i) => {
    return `
          ${accumulator}
          <span class="green">${values[i-1]}</span>
          ${part}
    `
  });
};



//const ireland = `I live in ${city} the city of ${something} and ${otherThing}`

const ireland = green`I live in ${city} the city of ${something} and ${otherThing}`;

document.body.innerHTML = ireland;
